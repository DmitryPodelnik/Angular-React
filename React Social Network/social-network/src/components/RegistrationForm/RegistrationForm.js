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
            email: "",
            city: "",
        };
    }

    checkForm(e) {
        e.preventDefault();


        this.setState(state => ({
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            userName: $("userName").val(),
            email: $("email").val(),
            city: $("city").val(),
            age: $("age").val(),
        }));
         
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
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
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
                    <div id="uploadFile" >
                        <label className="form-label" htmlFor="customFile"></label>
                        <input type="file" className="form-control-sm" id="customFile" />
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