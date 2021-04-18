import React from 'react'
import ContactCard from './ContactCard'

import UserList from "../components/UserList"
import "./SocialNetwork.css"
import users from "./Users.json"

function SocialNetwork() {

    

    return (
        <div>
            <ContactCard /> 
            {/* <UserList data={users}/> */}
        </div>
    )
}
 
export default SocialNetwork;