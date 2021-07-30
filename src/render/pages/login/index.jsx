import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import globalVar from '@/utils/globalVar';
import style from './style.module.scss';

@inject('loginStore')
@observer
class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={style.loginBox}>
                    <p>来自：{this.props.loginStore.title}</p>
                    <p>来自：{globalVar.getGlobalVar('mainVar')}</p>
                    <p>右上角菜单:渲染进程和主进程通信</p>
                    <p>shift + ctrl + i 唤起控制台</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;