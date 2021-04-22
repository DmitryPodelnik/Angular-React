import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ContactCard from "./ContactCard";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm";
import Nav from "./Nav/Nav";
import NotFound from "./NotFound"
import UserList from "./UserList";

import $ from 'jquery';

import "./SocialNetwork.css";

import users from "./Users.json";

function SocialNetwork() {

    

    return (
        <div>
            <BrowserRouter>

                    <header>   
                        <Nav/>           
                    </header>

                    {/* <UserList data={users}/> */}
                    {/* <AuthorizationForm /> */}
                    {/* <RegistrationForm /> */}
                    {/* <ContactCard />  */} 

                <Switch>

                     <Route exact path="/" children={()=><h2>Home</h2>}/>

                    <Route path="/users/list" render={routeProps => (
                        <UserList data={users} form="list"/>
                    )}/>

                    <Route path="/profile" component={ContactCard}/>
                    <Route path="/auth" component={AuthorizationForm}/>
                    <Route path="/reg" component={RegistrationForm}/>

                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
 
export default SocialNetwork;