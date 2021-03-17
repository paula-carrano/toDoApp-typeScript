import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tasks } from './Tasks'
import { Users } from './Users'
import { Dashboard } from './Dashboard'
import { Profile } from './Profile'

const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export { Private };
