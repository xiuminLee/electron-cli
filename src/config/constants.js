const CONSTANTS = {
    SCHEMA: {
        // 用户账号密码
        username: {
          type: 'string',
          default: ''
        },
        password: {
          type: 'string',
          default: ''
        },
        // 用户token
        token: {
          type: 'string',
          default: ''
        },
        // 是否记住密码
        remeber: {
          type: 'boolean',
          default: false
        },
        // 是否自动登录
        autoLogin: {
          type: 'boolean',
          default: false
        },
        // 用户的登录方式 0 手机 1 邮箱 2 游客(后续自动登录需要)
        loginMode: {
          type: 'number',
          default: 0
        },
        // 当前语言
        language: {
          type: 'string',
          default: 'en'
        },
        // 关闭时是退出还是关闭到系统托盘
        closeOption: {
          type: 'boolean',
          default: false
        },
      },
}

  module.exports = CONSTANTS;