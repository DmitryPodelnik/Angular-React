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

export default class Routing extends React.Component { 
 
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/Article/List" render={routeProps=>(
                        <ArticleList />
                    )}/>
                    <Route path="/Article/Create" component={ArticleForm}/>
                    <Route path="/Article/:id" render={(routeProps)=>(
                        <ArticleDetails match={routeProps.match}/>
                    )}/>

                    <Route path="/Category" component={ChildRoutes}/>
                    <Route path="/Search" component={Search}/>
                    <Route exact path="/" children={()=><h2>Home</h2>}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
        )
    }
};