import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';


import Users from '../components/Users/Users'
import SocialNetwork from '../components/App/SocialNetwork'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import ContactCard from '../components/ContactCard/ContactCard'
import AuthorizationForm from '../components/AuthorizationForm/AuthorizationForm'
import UsersList from '../components/UsersList/UsersList'
import NotFound from '../components/NotFound/NotFound'
import LoginControl from '../components/LoginControl/LoginControl'

import Nav from '../components/Nav/Nav'

export default class Routing extends React.Component { 
 
    render() {
        return ( 
            
            <div>
                <header>     
                    <Nav/>           
                </header>

                <main>
                    <Switch>

                        <Route exact path="/" component={LoginControl}/>
                        {/* <Route exact path="/" children={()=><h2>Home</h2>}/> */}
                        {/* <Route exact path="/friends" children={()=><h2>Friends</h2>}/> */}

                        <Route path="/users" component={Users}/>
                        <Route path="/profile/:id(\d+)" component={ContactCard}/>
                        <Route path="/auth" component={AuthorizationForm}/>
                        <Route path="/reg" component={RegistrationForm}/>

                        <Route component={NotFound}/>
                    </Switch>
                    
                </main>    
            </div>
        )
    }
};