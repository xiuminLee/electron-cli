const {
    app,
    BrowserWindow,
    Menu,
    protocol,
    globalShortcut,
} = require('electron');
const path = require('path')
const url = require('url');
const handleEvent = require('./handleEvent.js');
const initEvent = require('./initEvent.js');
const ElectronTray = require('./setTray');

let mainWindow;
let winTray;

// 禁止多开
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) { 
  app.quit();
} else {
    app.on('second-instance', () => {
        if (mainWindow) {
          if (mainWindow.isMinimized()) mainWindow.restore();
          mainWindow.focus();
          mainWindow.show();
        }
      });  
}
function createWindow() {
    Menu.setApplicationMenu(null);
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        show: false,
        frame: false,
        webPreferences: {
            webviewTag: true,
            webSecurity: false,
            contextIsolation: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, './preload.js')
        }
    })
    const winUrl = process.env.NODE_ENV === 'development' ?
        'http://localhost:3000/' :
        url.format({
            pathname: path.join(__dirname, '../../build/index.html'),
            protocol: 'file:',
            slashes: true
        });
    mainWindow.loadURL(winUrl);
    mainWindow.on('ready-to-show', function () { // 初始化完成后显示，避免短暂白屏
        mainWindow.show();
    })
    mainWindow.on('closed', function () {
        mainWindow = null
    })
    // 打开开发工具页面
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }
    protocol.interceptFileProtocol('file', (req, callback) => {
        const url = req.url.substr(8);
        callback(decodeURI(url));
      }, (error) => {
        if (error) {
          console.error('Failed to register protocol');
        }
      });
}
app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+Shift+i', function () {
        mainWindow.webContents.openDevTools()
      })
    createWindow();
    // 初始化
    initEvent();
    winTray = new ElectronTray(mainWindow);
    // 监听渲染进程事件
    handleEvent(mainWindow, winTray);
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
    if (mainWindow === null) createWindow();
})