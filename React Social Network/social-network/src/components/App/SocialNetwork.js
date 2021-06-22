import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Routing from '../../routes/route'

import "./SocialNetwork.css";

function SocialNetwork() {
 
     

    return (
        <div>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </div>
    )
}
 
export default SocialNetwork;