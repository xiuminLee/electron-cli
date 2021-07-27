import React, { Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserLayout from './userLayout';
// import MainLayout from './mainLayout';

function RouterMap() {   
  return (
    <Fragment>
        <HashRouter>
            <Switch>
                <Route path='/user' component={UserLayout}/>
                {/* <Route path='/main' component={MainLayout}/> */}
                <Redirect to='/user/login' />
            </Switch> 
        </HashRouter>
     
    </Fragment>
  );
}

export default RouterMap;
