import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import ActivityFeed from '../ActivityFeed/ActivityFeed';

import usersData from "../App/Users.json";
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';

class LoginControl extends React.Component{

    constructor(props)   {
        super(props);

        this.state = {

            isLogged: false,
        };
    }


    render() {
        return (
            <div id="main">
                {this.state.isLoggedIn 
                ? (<Redirect to="/"/>) 
                : (<Redirect to="/auth"/>)
                }
            </div>
        )
    } 
}

export default LoginControl;