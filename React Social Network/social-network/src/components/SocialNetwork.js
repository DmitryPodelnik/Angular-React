import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ContactCard from "./ContactCard";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm";
import Nav from "./Nav/Nav";
import NotFound from "./NotFound"
import UsersList from "./UsersList";
import Users from "./Users.js";

import $ from 'jquery';

import "./SocialNetwork.css";

import usersData from "./Users.json";

function SocialNetwork() {

    

    return (
        <div>
            <BrowserRouter>

                    <header>   
                        <Nav data = {usersData}/>           
                    </header>
                <Switch>

                    <Route exact path="/" children={()=><h2>Home</h2>}/>
                    {/* <Route exact path="/friends" children={()=><h2>Friends</h2>}/> */}

                    <Route path="/users" component={Users}/>

                    <Route path="/profile/:id(\d+)" component={ContactCard}/>
                    <Route path="/auth" component={AuthorizationForm}/>
                    <Route path="/reg" component={RegistrationForm}/>

                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
 
export default SocialNetwork;