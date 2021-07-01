import React from 'react';
import {Route, Switch} from 'react-router-dom'

import UsersList from "../UsersList/UsersList";
import ContactCard from "../ContactCard/ContactCard";

class Users extends React.Component{
    render() {
        return <div>
                    <Switch>
                        <Route path="/users/:id(\d+)" component={ContactCard} />
                        <Route exect path="/users" render={() => <UsersList />}/>
                        {/* <Route path="/users/:id/friends" component={ContactCard} /> */}
                    </Switch>
                </div>;
    } 
}

export default Users;