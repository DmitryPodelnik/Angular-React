import React from "react"
import "./ContactCard.css"
import $ from 'jquery';
import avatar from "../components/avatar.jpg"

class ContactCard extends React.Component {

    constructor(props) {
        super(props);

        this.count = 0;
    }

    increaseFolowers = () => {
        this.count++;
        document.getElementById("followers").innerHTML = "Followers: <span id='countFollowers' class='badge bg-secondary'></span>";
        document.getElementById("countFollowers").innerText = this.count;
    }

    switchEditMode = () => {
        let element = document.querySelector("#flexSwitchCheckDefault");    

        if (element.checked) {
           $("#saveButton").show();
           $("#uploadFile").show();
           document.getElementById("validationCustom01").readOnly = false;
           document.getElementById("validationCustom02").readOnly = false;
           document.getElementById("validationCustom03").readOnly = false;
           document.getElementById("userName").readOnly = false;
           document.getElementById("textAbout").readOnly = false;
        }
        else {
           $("#saveButton").hide();
           $("#uploadFile").hide();
           document.getElementById("validationCustom01").readOnly = true;
           document.getElementById("validationCustom02").readOnly = true;
           document.getElementById("validationCustom03").readOnly = true;
           document.getElementById("userName").readOnly = true;
           document.getElementById("textAbout").readOnly = true;
        }
    }

    render() {

        return (
            <div id="user">
                <div id="firstLine">
                    <img id="avatar" src={avatar} className="rounded float-start" alt="avatar" width="150px"></img>
                    <div id="uploadFile">
                        <label className="form-label" htmlFor="customFile"></label>
                        <input type="file" className="form-control-sm" id="customFile" />
                    </div>
                    <div id="follow">
                        <button id="followers" type="button" className="btn btn-danger" onClick={this.increaseFolowers}>
                            Follow <span id="countFollowers" className="badge bg-secondary">{this.count}</span>
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
                        <input type="text" className="form-control" id="validationCustom01" readOnly/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" readOnly/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input id="userName" type="text" aria-describedby="inputGroupPrepend" readOnly/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom03" readOnly/>
                    </div>
                    <div className="col-md-6" id="userAbout">
                        <label className="form-label">About</label>
                        <textarea className="form-control" id="textAbout" readOnly></textarea>
                    </div>
                    <div className="col-12" id="saveButton">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactCard;