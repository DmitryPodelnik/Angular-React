import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
import $ from "jquery";
import {LoginContext} from "../../LoginContext/LoginContext"

import "./AuthorizationForm.css";

class AuthorizationForm extends Component {

    constructor(props)   {
        super(props);
        
        this.user = "default";
        this.state = {
            addContainer: false,
        }
    }


    userCheck = () => {

        this.context.toggleLogging();
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
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
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

AuthorizationForm.contextType = LoginContext;

export default AuthorizationForm;