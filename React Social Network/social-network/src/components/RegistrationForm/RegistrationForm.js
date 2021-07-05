import React, { Component } from "react"
import "./RegistrationForm.css"
import $ from 'jquery';

class RegistrationForm extends Component {

    constructor(props)   {

        super(props);


        this.checkForm = this.checkForm.bind(this);
 
        this.state = {

            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            passwordConfirm: "",
            email: "",
            city: "",
            file: null,
            fileSize: 0,
        };
    }

    getValues = () => {

        this.setState(state => ({
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            userName: $("#userName").val(),
            password: $("#password").val(),
            passwordConfirm: $("#confirmPassword").val(),
            email: $("#email").val(),
            city: $("#city").val(),
            age: $("#age").val(),
            file: $("#avatar"),
        }));
    }

    getFile = () => {
        let file = document.getElementById("avatar").files[0];

        this.setState(state => ({
            fileSize: file.size,
        }));
      }

    checkForm(e) {

        e.preventDefault();

        this.getValues();
        this.getFile();

        if (this.state.fileSize < 40000 || this.state.fileSize > 625000) {
            alert("File size must be between 40kb and 5mb");
            return;
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            alert("Passwords are not equal!");
            return;
        }
        else if (this.state.age < 1 && this.state.age > 99) {
            alert("Enter a correct age!");
            return;
        }
        else if (this.state.firstName.length < 1 && this.state.firstName.length > 32) {
            alert("Enter a correct length of first name!");
            return;
        }
        else if (this.state.lastName.length < 1 && this.state.lastName.length > 32) {
            alert("Enter a correct length of last name!");
            return;
        } else {

            fetch(`https://localhost:44318/api/users/register?FirstName=${this.state.firstName}&LastName=${this.state.lastName}&Username=${this.state.userName}&Password=${this.state.password}&Email=${this.state.email}&City=${this.state.city}&Age=${this.state.age}`, {
                method: "POST",})
            .then(res => res.json())
            .then(
                data => {
                    alert(data.userName);   
                },
                error => {
                    alert("error");
                }
            )
        }

         
    }

    render() {

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
                    <div class="col-md-4">
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
                    <div class="col-md-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div class="col-md-3">
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

export default RegistrationForm;