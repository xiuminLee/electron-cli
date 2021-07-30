import React, { Component, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';
import PageHeader from '../../components/pageHeader';

class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader history={this.props.history} />
                <div>
                {/* <Switch>
                    // 放置其他页面路由组件
                </Switch> */}
                </div>
            </Fragment>      
        );
    }
}

export default MainLayout;
