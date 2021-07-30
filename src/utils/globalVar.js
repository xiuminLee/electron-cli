// 获取和修改主进程的变量
const electron = window.require('electron');
const { remote } = electron;

const globalVar = {
    // 获取全局变量
      getGlobalVar: function(key, storeName = 'globalStore') {
        return remote.getGlobal(storeName)[key];
      },
      // 修改全局变量
      setGlobalVar: function(key, val, storeName = 'globalStore') {
        remote.getGlobal(storeName)[key] = val;
      }
  };
  
  export default globalVar;