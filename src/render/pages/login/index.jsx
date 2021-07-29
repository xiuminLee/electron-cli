import React, { Component, Fragment } from 'react';
import style from './style.module.scss';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div className={style.page}>
                    我是登陆页
                </div>
            </Fragment>
        );
    }
}

export default Login;