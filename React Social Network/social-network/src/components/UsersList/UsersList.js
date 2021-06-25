import React from "react"
import ContactCard from "../ContactCard/ContactCard"

import {Link} from 'react-router-dom'


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
                        // return  <li key={item.id}>
                        //             {/* <NavLink to={`/users/${item.id}`} data={item}>{item.username}</NavLink> */}
                                    // <Link to={{
                                    //     pathname: `/users/${item.id}`,
                                    //     state: { data: item }
                                    // }}>{item.username}</Link>
                        //         </li>
                        return  <li key={item.id}>
                                    <div className="card mb-3" id="card">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="..." className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <Link to={{ pathname: `/users/${item.id}`,
                                                                state: { data: item }
                                                                }}>
                                                        <h5 className="card-title">{item.username}</h5>
                                                    </Link>
                                                    <p className="card-text">{item.about}</p>
                                                    <p className="card-text"><small className="text-muted">{item.city}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        })
                    }
                    </ul>
                </div>
            }
}

export default UsersList;