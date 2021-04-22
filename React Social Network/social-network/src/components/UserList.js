import React from "react"
import ContactCard from "./ContactCard"

import {BrowserRouter, Route, Switch} from "react-router-dom";

function UserList(props) {
    const {data} = props;
    const {username} = props;
    const {password} = props;
    const {form} = props;
    let userComponents = null;
    let check = false;

    if (form == "list") {
        userComponents = data.map(item => {
            return <ContactCard key={item.id} userData={item}/>
        });
    }
    else if (data.length) { 
        userComponents = data.map(item => {
            if (username == item.username && password == item.password) {
                //form.getElementById("mainForm").style.display = "none";
                //return <ContactCard key={item.id} userData={item}/>
                //localStorage.signInLogOut = "Log Out";
                window.location.href = `/profile?user=${item.username}&firstName=${item.firstName}&lastName=${item.lastName}&city=${item.city}&about=${item.about}`;
                check = true;
                
                return;
            }
        });
    }

    if (!check) {
        return (
            <div>
                <p>Invalid login or password</p>
            </div>
        );
    }
}

export default UserList;