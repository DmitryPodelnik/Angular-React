import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Users from '../components/Users/Users'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import ContactCard from '../components/ContactCard/ContactCard'
import AuthorizationForm from '../components/AuthorizationForm/AuthorizationForm'
import NotFound from '../components/NotFound/NotFound'
import LoginControl from '../components/LoginControl/LoginControl'

import Nav from '../components/Nav/Nav'
import ArticleList from '../components/ArticleList/ArticleList';
import Article from '../components/Article/Article'
import FriendList from '../components/FriendList/FriendList';

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
                        <Route path="/profile/friends" component={FriendList} />
                        <Route path="/profile/:id(\d+)" component={ContactCard}/>
                        <Route path="/auth" component ={AuthorizationForm}/>
                        <Route path="/reg" component={RegistrationForm}/>
                        <Route path="/articles/:id(\d+)" component={Article} />
                        <Route exact path="/articles" component={ArticleList}/>

                        <Route component={NotFound}/>
                    </Switch>
                    
                </main>    
            </div>
        )
    }
};