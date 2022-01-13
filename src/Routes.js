import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';
import Login from './pages/login';

export default () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/sobre">
                    <Sobre />
                </Route>
                <Route exact path="/logout">
                    <Login />
                </Route>
            </Switch>
    )
}