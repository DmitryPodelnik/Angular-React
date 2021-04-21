import React from "react"
import ContactCard from "./ContactCard"

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
    let userComponents = null;

    if (data.length) { 
        userComponents = data.map(item => {
            if (username == item.username && password == item.password) {
                return <ContactCard key={item.id} userData={item}/>
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