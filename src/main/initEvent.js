const Storage = require('./storage.js');

async function initEvent() {
    // 定义一个主进程和渲染进程的全局变量
    global.globalStore = {
        mainVar: '主进程变量',
    };
    // 初始化一个config.json文件
    new Storage();
}

module.exports = initEvent;