import React, { Component, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import SideMenu from './SideMenu';
// import PageHeader from '../../components/pageHeader';
// import OrderList from '../../pages/order';
// import style from './style.module.scss';

class MainLayout extends Component {
    linkTo = (type) => {
        this.props.history.push(`/factory/${type}`);
    }
    render() {
        return (
            <Fragment>
                <div>
                    我是主要页面
                    {/* <PageHeader history={this.props.history} />
                    <div>
                    <Switch>
                        <Route path="/factory/order" component={OrderList} />
                    </Switch>
                    </div> */}
                </div>
            </Fragment>      
        );
    }
}

export default MainLayout;
