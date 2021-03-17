import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from './Login'
import { SignUp } from './SignUp'

const Public = () => {
    return (
        <Router>
            <Switch>
                <Route path='/signup' component={SignUp} />
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    );
}

export { Public };