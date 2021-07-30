import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/login';
import PageHeader from '../../components/pageHeader';
import style from './style.module.scss';

class UserLayout extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader history={this.props.history} />
                <div className={style.userLayoutContainer}>
                    <Switch>
                        <Route path="/user/login" component={Login} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default UserLayout;