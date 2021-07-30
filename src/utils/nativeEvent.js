const electron = window.require('electron');
const {
  ipcRenderer: ipc
} = electron;


const NativeEvent = {
  ctrlWin: function(event) { // 菜单控制
    ipc.send(event);
  },
};

export default NativeEvent;