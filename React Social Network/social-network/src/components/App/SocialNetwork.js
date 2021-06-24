import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Routing from '../../routes/route'

import "./SocialNetwork.css";

let isLogged = true;

function SocialNetwork() {
 
     

    return (
        <div>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </div>
    )
}
 
export {SocialNetwork, isLogged};