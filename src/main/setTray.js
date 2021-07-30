// 退出到系统托盘操作
const {app, Menu, Tray} = require('electron');
const path = require('path');
// 隐藏主窗口，并创建托盘，绑定关闭事件
class ElectronTray {
    constructor(mainWindow) {
        this.win = mainWindow;
        // 设置系统托盘图标
        const iconPath = path.join(__dirname, './tray.jpg');
        this.appTray = new Tray(iconPath);
        this.watcher();
        this.setTray();
    }
    setTray = () => {
// 用一个 Tray 来表示一个图标,这个图标处于正在运行的系统的通知区
    // 通常被添加到一个 context menu 上.
    // 系统托盘右键菜单
    const trayMenuTemplate = [
        {
            // 系统托盘图标目录
            label: '退出',
            click: () => {
                app.quit();
            }
        }
    ];

    // 图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);

    // 展示主窗口，隐藏主窗口 mainWindow.hide()
    // this.win.hide();

    // 设置托盘悬浮提示
    this.appTray.setToolTip('SDS');

    // 设置托盘菜单
    this.appTray.setContextMenu(contextMenu);
    }
    watcher = () => {
    // 单击托盘小图标显示应用
    this.appTray.on('click', () => {
        // 显示主程序
        this.win.show();
        this.win.setSkipTaskbar(!this.win.isVisible());
        // 关闭托盘显示
        // appTray.destroy();
    });
    }
    destory = () => {
        this.appTray.destroy();
    }
}

module.exports = ElectronTray;