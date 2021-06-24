import React, { Component } from "react";
import {Link, Redirect, NavLink} from "react-router-dom";
import $ from "jquery";


import UsersList from "../UsersList/UsersList";
import "./AuthorizationForm.css";

import users from "../App/Users.json";

class AuthorizationForm extends Component {

    constructor(props)   {
        super(props);
        
        this.user = "default";
        this.state = {
            addContainer: false,
        }
    }


    userCheck = () => {
        this.setState({addContainer: !this.state.addContainer});
        for (let item of users) {
            if (item.username == $("#exampleInputEmail1").val()) {
                this.user = item;
                break; 
            }
        }
    }



    render() {

        return (
            <div id="main">
                <form id="mainForm">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.userCheck()}>Sign in</button>
                    <span> or </span>
                    <NavLink to={`/reg`} ><div className="btn btn-dark">Sign up</div></NavLink>
                </form>
                {this.state.addContainer && 
                    <Link to={{
                        pathname: `/users/${this.user.id}`,
                        state: { data: this.user }
                    }}>{this.user.username}</Link>
                }
            </div>
        );
    }
}

export default AuthorizationForm;