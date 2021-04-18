import React from "react"
import "./ContactCard.css"

import avatar from "../components/avatar.jpg"

class ContactCard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div id="user">
                <img id="avatar" src={avatar} className="rounded float-start" alt="avatar" width="150px"></img>
            <form className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                </div>
                <div class="col-md-4">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input type="text" aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-6">
                    <label className="form-label">About</label>
                    <textarea  className="form-control" id="validationCustom03"></textarea>
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