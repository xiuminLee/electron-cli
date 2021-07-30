const {
    ipcMain: ipc,
} = require('electron');

// 监听事件
function handleEvent(mainWindow) {

    ipc.on('minWin', () => {
        mainWindow.minimize();
    });

    //登录窗口最大化
    ipc.on('maxWin', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
        } else {
            mainWindow.maximize();
        }
    });

    ipc.on('closeWin', (event) => {
        mainWindow.hide();
        mainWindow.setSkipTaskbar(true);
        event.preventDefault();
    });
}

module.exports = handleEvent;