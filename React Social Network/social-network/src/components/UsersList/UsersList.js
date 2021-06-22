import React from "react"
import ContactCard from "../ContactCard/ContactCard"

import {Link} from 'react-router-dom'

//function UserList(props) {
    // const {data} = props;
    // const {username} = props;
    // const {password} = props;
    // const {form} = props;
    // let userComponents = null;
    // let check = false;

    // if (form == "list") {
    //     userComponents = data.map(item => {
    //         return <ContactCard key={item.id} userData={item}/>
    //     });
    // }
    // else if (data.length) { 
    //     userComponents = data.map(item => {
    //         if (username == item.username && password == item.password) {
    //             //form.getElementById("mainForm").style.display = "none";
    //             //return <ContactCard key={item.id} userData={item}/>
    //             //localStorage.signInLogOut = "Log Out";
    //             window.location.href = `/profile?user=${item.username}&firstName=${item.firstName}&lastName=${item.lastName}&city=${item.city}&about=${item.about}`;
    //             check = true;
                
    //             return;
    //         }
    //     });
    // }

    // if (!check) {
            // return <div>
            //             <Switch>
            //                 <Route exact path="/users" render={routeProps => (
            //                     <UserList data={users} form="list"/>
            //                 )}/>
            //                 <Route path="/products/:id(\d+)" component={ContactCard} />
            //             </Switch>
            //         </div>
    //}
//}

class UsersList extends React.Component{

    constructor(props)   {
        super(props);

        this.data = props.data;
    }

    render() { 
        return <div>
            <ul className="navbar-nav">
                {
                    this.data.map(function(item) {
                        return  <li key={item.id}>
                                    {/* <NavLink to={`/users/${item.id}`} data={item}>{item.username}</NavLink> */}
                                    <Link to={{
                                        pathname: `/users/${item.id}`,
                                        state: { data: item }
                                    }}>{item.username}</Link>
                                </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default UsersList;