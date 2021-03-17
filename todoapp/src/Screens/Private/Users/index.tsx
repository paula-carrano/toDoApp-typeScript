import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddUserForm } from './AddUserForm'
import { ListUser } from './ListUser'
import { UpdateUserForm } from './UpdateUserForm'

const Users = () => {

    return (
        <Router>
            <Switch>
                <Route path='/users/add' component={AddUserForm} />
                <Route path='/users/list' component={ListUser} />
                <Route path='/users/update/:id' component={UpdateUserForm} />
            </Switch>
        </Router>
    );
}

export { Users };