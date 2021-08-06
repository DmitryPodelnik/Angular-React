import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import $ from "jquery";
import { LoginContext } from "../../LoginContext/LoginContext"
import AuthHelper from "../../utils/authHelper"
import "./AuthorizationForm.css";

class AuthorizationForm extends Component {

    constructor(props)   {
        super(props);
        
        this.user = "default";
        this.state = {
            userName: null,
            password: null,
        }

        this.logout = this.logout.bind(this);
        this.setUserId = this.setUserId.bind(this);
        this.userCheck = this.userCheck.bind(this);
        this.userConfirmation = this.userConfirmation.bind(this);
    }

    
    logout() {
        AuthHelper.clearAuth();
    }

    setUserId() {

        let user = {
            username: this.state.userName,
        }; 
        
        fetch(`https://localhost:44318/api/users/getuserid?username=${user.username}`)
        .then(res => res.json())
        .then(
            data => {
                this.context.setCurrentUserId(data.id);
            },
            error => {
                alert(error);
            }
        )
    }

    userConfirmation() {

        if (this.state.userName && this.state.password) {
            
            let user = {
                username: this.state.userName,
                password: this.state.password 
            };            
    
            fetch('https://localhost:44318/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(user)
            }).then((response) => {
                if (response.ok) {                              
                    return response.json();
                } else {
                    alert("Error authorization");
                    return;
                }
            }).then((data) => {            
                AuthHelper.saveAuth(user.username, data.access_token);
                this.context.toggleLogging();      
                this.setUserId();    
                alert("You have successfully authenticated!");
            }).catch((ex) => {
                alert(ex);
            });
        } else {
                alert('Необходимо ввести имя пользователя и пароль');
        }
    } 

    userCheck () {

        this.setState(state => ({
            userName: $("#userName").val(),
            password: $("#password").val(),
        }), this.userConfirmation);
    }

    render() {

        if (this.context.currentUserId !== -1)
        {
            return <Redirect to={`/profile/${this.context.currentUserId}`} />
        } else {
        return (
            <div id="main">
                <form id="mainForm">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="userName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.userCheck()}>Sign in</button>
                    <span> or </span>
                    <NavLink to={`/reg`} ><div className="btn btn-dark">Sign up</div></NavLink>
                </form>
            </div>
        );
        }
    }
}

AuthorizationForm.contextType = LoginContext;

export default AuthorizationForm;