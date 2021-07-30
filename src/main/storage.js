// 用户数据系统文件操作
const Storage = require('electron-store');
const { app } = require('electron');
const { SCHEMA } = require('../config/constants');
class Storeage {
    constructor() {
        this.instance = new Storage({
            cwd: app.getPath('userData'), //文件位置-用户文件数据夹
            name: "config",
            fileExtension: "json",
            encryptionKey: 'quickfox',
            schema: SCHEMA,
            watch: true
        });
    }
    getAllConfig() {
        return this.instance.store;
    }
    getItem(name) {
        return this.instance.get(name);
    }
    setItem(data) {
        try {
            this.instance.set(data);
            return { result: true }
        } catch (e) {
            console.log(JSON.stringify(e));
            return { result: false }
        }
    }
    deleteItem(name) {
        this.instance.delete(name);
    }
}

module.exports = Storeage;