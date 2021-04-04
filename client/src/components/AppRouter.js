import React, { useContext } from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import { authRoutes } from '../routes';
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';

import { Context } from '../index';

const DevicePage = () => {
    const {user} = useContext(Context);

    console.log(user);

    return(
        <Switch>
            {user.isAuth === true && authRoutes.map(({path, Component}) => 
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