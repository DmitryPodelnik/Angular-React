import React, { Component } from "react"
import "./RegistrationForm.css"
import $ from 'jquery';
import { Redirect } from "react-router";
import { LoginContext } from "../../LoginContext/LoginContext"
import { uploadFile } from "../UploadingFile/UploadingFile"

class RegistrationForm extends Component {

    constructor(props)   {

        super(props);

        this.checkForm = this.checkForm.bind(this);
        this.setUserId = this.setUserId.bind(this);
    }

    setUserId (id) { 
        
        this.context.setCurrentUserId(id); 
    }

    checkOnCorrectEmail = (str) => {

        const r = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (r.test(str)) {
            return true;
        } else {
            return false;
        }
    }

    checkForm (e) {

        e.preventDefault();

        if ($("#password").val().length < 6) {
            alert("Password must have more than 5 symbols!");
            return;
        }
        else if ($("#firstName").val().length < 1 || $("#firstName").val().length > 32) {
            alert("Enter a correct length of first name!");
            return;
        }
        else if ($("#lastName").val().length < 1 || $("#lastName").val().length > 32) {
            alert("Enter a correct length of last name!");
            return;
        }
        else if ($("#userName").val().length < 4) {
            alert("Enter a correct length of username!");
            return;
        }
        else if (!this.checkOnCorrectEmail($("#email").val())) {
            alert("Email is incorrect");
            return;
        } 
        else if ($("#city").val().length < 1 || $("#city").val().length > 32) {
            alert("Enter a correct length of city!");
            return;
        }
        else if ($("#age").val() < 1 || $("#age").val() > 99) {
            alert("Enter a correct age!");
            return;
        }
        else if ($("#password").val() !== $("#confirmPassword").val()) {
            alert("Passwords are not equal!");
            return;
        }
        if (!$('#invalidCheck').is(":checked"))
        {
            alert("You have to agree with the rules!");
            return;
        } else {

            let fData = new FormData();
                fData.append("avatar", document.getElementById("avatar").files[0]); // добавляем файл в объект FormData() 

            fetch(`https://localhost:44318/api/users/register?FirstName=${$("#firstName").val()}&LastName=${$("#lastName").val()}&Username=${$("#userName").val()}&Password=${$("#password").val()}&Email=${$("#email").val()}&City=${$("#city").val()}&Age=${$("#age").val()}`, {
                method: "POST",
                body: fData
            })
            .then(res => res.json())
            .then(
                data => {
                    this.context.toggleLogging();      
                    this.setUserId(data.id);    
                    alert("You have been successfully registered!");   
                },
                error => {
                    alert(error);
                }
            )
        }
    }

    componentDidMount() {

        document.getElementById("avatar").addEventListener("change", () => {
            uploadFile(document.getElementById("avatar").files[0]);
        });
    }

    render () {

        if (this.context.currentUserId !== -1)
        {
            return <Redirect to={`/profile/${this.context.currentUserId}`} />
        } else {
        return (            
            <div id="main">
                <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="userName" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="userName" aria-describedby="inputGroupPrepend" required/>
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" required/>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3" >
                    <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" id="age" required/>
                        <div className="invalid-feedback">
                            Please provide a valid age.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <div id="uploadFile" >
                        <label className="form-label" htmlFor="avatar"></label>
                        <input type="file" className="form-control-sm" id="avatar" name="avatar" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" onClick={this.checkForm}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
        }
    }
}

RegistrationForm.contextType = LoginContext;

export default RegistrationForm;