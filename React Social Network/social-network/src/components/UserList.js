import React from "react"
import ContactCard from "./ContactCard"

import {BrowserRouter, Route, Switch} from "react-router-dom";

// function UserList(props) {
//     const {data} = props;
//     let userComponents = null;

//     if (data.length) { 
//         userComponents = data.map(item => {
//             return <ContactCard key={item.id} userData={item}/>
//         });
//     }
//     else {
//         userComponents = <p>No users</p>
//     }

//     return (
//         <div>
//             {userComponents}
//         </div>
//     );
// }
function UserList(props) {
    const {data} = props;
    const {username} = props;
    const {password} = props;
    const {form} = props;
    let userComponents = null;

    if (form == "list") {
        userComponents = data.map(item => {
            return <ContactCard key={item.id} userData={item}/>
        });
    }
    else if (data.length) { 
        userComponents = data.map(item => {
            if (username == item.username && password == item.password) {
                form.getElementById("mainForm").style.display = "none";
                return <ContactCard key={item.id} userData={item}/>
                //window.location.href = "/profile";
            }
        });
    }
    else {
        userComponents = <p>No users</p>
    }

    return (
        <div>
            {userComponents}
        </div>
    );
}

export default UserList;