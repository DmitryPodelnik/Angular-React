import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import ActivityFeed from '../ActivityFeed/ActivityFeed';

import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import {LoginContext} from '../../LoginContext/LoginContext'

class LoginControl extends React.Component{

    constructor(props)   {
        super(props);

        this.state = {

            
        };
    }



    render() {
        return (
            <div id="main">
                {this.context.isLogged 
                ? (<Redirect to="/articles" />) 
                : (<Redirect to="/auth" />)
                }
            </div>
        )
    } 
}

LoginControl.contextType = LoginContext;

export default LoginControl;