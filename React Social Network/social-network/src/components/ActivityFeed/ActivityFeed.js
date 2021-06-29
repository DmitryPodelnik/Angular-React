import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import usersData from "../App/Users.json";
import { LoginContext } from '../../LoginContext/LoginContext';

class ActivityFeed extends React.Component{

    constructor(props)   {
        super(props);

        this.state = {

            
        };
    }


    render() {

        return (
            <div id="main"> 
            {this.context.isLogged
                
            }
                
            </div>
        )
        
    } 
}

ActivityFeed.contextType = LoginContext;

export default ActivityFeed;