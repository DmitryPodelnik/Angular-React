import React from "react"
import "./ContactCard.css"
import $ from 'jquery';
import avatar from "../components/assets/avatar.jpg"

class ContactCard extends React.Component {

    constructor(props) {
        super(props);

        this.params = (new URL(document.location)).searchParams;

        this.countFollowers = 0;
        
        this.user = this.params.get("user");
        this.firstName = this.params.get("firstName");
        this.lastName = this.params.get("lastName");
        this.city = this.params.get("city");
        this.about = this.params.get("about");
    }

    increaseFolowers = () => {
        this.countFollowers++;
        document.getElementById("followers").innerHTML = "Followers: <span id='countFollowers' class='badge bg-secondary'></span>";
        document.getElementById("countFollowers").innerText = this.countFollowers;
    }

    switchEditMode = () => {
        let element = document.querySelector("#flexSwitchCheckDefault");    

        if (element.checked) {
           $("#saveButton").show();
           $("#uploadFile").show();
           document.getElementById("firstName").readOnly = false;
           document.getElementById("lastName").readOnly = false;
           document.getElementById("city").readOnly = false;
           document.getElementById("userName").readOnly = false;
           document.getElementById("textAbout").readOnly = false;
        }
        else {
           $("#saveButton").hide();
           $("#uploadFile").hide();
           document.getElementById("firstName").readOnly = true;
           document.getElementById("lastName").readOnly = true;
           document.getElementById("city").readOnly = true;
           document.getElementById("userName").readOnly = true;
           document.getElementById("textAbout").readOnly = true;
        }
    }

    initializeData = () => {
        document.getElementById("firstName").value = this.firstName;
        document.getElementById("lastName").value = this.lastName;
        document.getElementById("city").value = this.city;
        document.getElementById("userName").value = this.user;
        document.getElementById("textAbout").value = this.about;
    }

    saveChanges = (event) => {
        event.preventDefault();

        this.user = document.getElementById("userName").value;
        this.firstName = document.getElementById("firstName").value;
        this.lastName = document.getElementById("lastName").value;
        this.city = document.getElementById("city").value;
        this.about = document.getElementById("textAbout").value;

        window.location.href = `/profile?user=${this.user}&firstName=${this.firstName}&lastName=${this.lastName}&city=${this.city}&about=${this.about}`;
    }

    render() {

        return (
            <div id="user" onLoad={this.initializeData}>
                <div id="firstLine">
                    <img id="avatar" src={avatar} className="rounded float-start" alt="avatar" width="150px"></img>
                    <div id="uploadFile">
                        <label className="form-label" htmlFor="customFile"></label>
                        <input type="file" className="form-control-sm" id="customFile" />
                    </div>
                    <div id="follow">
                        <button id="followers" type="button" className="btn btn-danger" onClick={this.increaseFolowers}>
                            Follow <span id="countFollowers" className="badge bg-secondary">{this.countFollowers}</span>
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
                        <input type="text" className="form-control" id="firstName" readOnly/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" readOnly/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input id="userName" type="text" aria-describedby="inputGroupPrepend"nreadOnly/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" id="city" readOnly/>
                    </div>
                    <div className="col-md-6" id="userAbout">
                        <label className="form-label">About</label>
                        <textarea className="form-control" id="textAbout" readOnly></textarea>
                    </div>
                    <div className="col-12" id="saveButton">
                        <button className="btn btn-primary" onClick={this.saveChanges}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactCard;