import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes } from '../routes';
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';
const DevicePage = () => {
    const isAuth = false;

    return(
        <Switch>
            {isAuth === true && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default DevicePage;