import React, { Component } from "react"
import "./AuthorizationForm.css"
import $ from 'jquery';

import UserList from "./UserList";
import users from "./Users.json";

class AuthorizationForm extends Component {

    constructor(props)   {
        super(props);

        this.state = {
            title: "Title",
            text: "Some text",
            isValid: true,
            isAgree: false,
            isValidtitle: true,
            isValidtext: true,
            isValidtext: true,
        }
    }

    state = {
        addContainer: false,
     }

    add = () => {
        this.setState({addContainer: !this.state.addContainer});
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
                    <button type="button" className="btn btn-primary" onClick={() => this.add()}>Sign in </button>
                </form>
                {this.state.addContainer && <UserList form={document} data={users} username={$("#exampleInputEmail1").val()} password={$("#exampleInputPassword1").val()}/>}
            </div>
        );
    }
}

export default AuthorizationForm;