import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ContactCard from "./ContactCard";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm";
import Nav from "./Nav/Nav";

import UserList from "./UserList";
import "./SocialNetwork.css";
import users from "./Users.json";

function SocialNetwork() {

    

    return (
        <div>
            <header>   
                <Nav/>           
            </header>
            {/* <UserList data={users}/> */}
            <AuthorizationForm />
            {/* <RegistrationForm /> */}
            {/* <ContactCard />  */}
        </div>
    )
}
 
export default SocialNetwork;