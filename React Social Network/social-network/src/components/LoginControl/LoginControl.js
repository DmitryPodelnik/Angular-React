import React from 'react';
import {Redirect} from 'react-router-dom'
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