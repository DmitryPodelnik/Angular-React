import React from "react"
import {Link} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import $ from 'jquery';

import "../ContactCard/ContactCard.css"

import avatar from "../assets/avatar.jpg"

class ContactCard extends React.Component {

    constructor(props) {
        super(props);

        if (props.location.state != undefined) {
            this.data = props.location.state.data;
        }

        this.state = {

            countFollowers: 0,
            isReading: true,
        };

        this.increaseFolowers = this.increaseFolowers.bind(this);
        this.initializeData = this.initializeData.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
    }

    increaseFolowers () {

         this.setState(state => ({
             countFollowers: ++state.countFollowers,
         }));
    }

    switchEditMode () {  

        this.setState(state => ({

            isReading: !state.isReading,
        }));
    }

    initializeData () {
        //document.getElementById("firstName").value = this.data.firstName;
        document.getElementById("lastName").value = this.data.lastName;
        document.getElementById("city").value = this.data.city;
        document.getElementById("userName").value = this.data.username;
        document.getElementById("textAbout").value = this.data.about;
    }

    saveChanges (event) {
        event.preventDefault();

    }

    render() {

        if (this.data === undefined) {
            return <h2>Пользователь не найден</h2>;
        }
        else {
            return (
                <div id="user" onLoad={this.initializeData}>
                    <div id="firstLine">
                        <img id="avatar" src={avatar} className="rounded float-start" alt="avatar" width="150px"></img>
                        {!this.state.isReading
                            ? <div id="uploadFile" >
                                <label className="form-label" htmlFor="customFile"></label>
                                <input type="file" className="form-control-sm" id="customFile" />
                            </div>
                            : null
                        }
                        <div id="follow">
                            <button id="followers" type="button" className="btn btn-danger" onClick={this.increaseFolowers}>
                                Follow <span id="countFollowers" className="badge bg-secondary">{this.state.countFollowers}</span>
                            </button>
                        </div>
                    </div>
                    <div className="form-check form-switch" id="switchMode">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={this.switchEditMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Edit mode</label>
                        </div>
                    <form className="row g-3 needs-validation" noValidate name="userInfo">
                        <div className="col-md-4">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" readOnly={this.state.isReading} /> 
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" readOnly={this.state.isReading} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Username</label>
                            <div className="input-group">
                                <span className="input-group-text">@</span>
                                <input id="userName" type="text" aria-describedby="inputGroupPrepend" readOnly={this.state.isReading} />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" readOnly={this.state.isReading}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" id="city" readOnly={this.state.isReading} />
                        </div>
                        <div className="col-md-6" id="userAbout">
                            <label className="form-label">About</label>
                            <textarea className="form-control" id="textAbout" readOnly={this.state.isReading}></textarea>
                        </div>
                        {!this.state.isReading 
                            ? <div className="col-12" id="saveButton">
                                <button className="btn btn-primary" onClick={this.saveChanges}>Save</button>
                            </div>
                            : null
                        }
                    </form>
                </div>
            )
        }
    }
}

export default ContactCard;