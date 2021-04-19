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
                <div id="firstLine">
                    <img id="avatar" src={avatar} className="rounded float-start" alt="avatar" width="150px"></img>
                    <div id="follow">
                        <button type="button" class="btn btn-danger">
                            Follow <span class="badge bg-secondary">0</span>
                        </button>
                    </div>
                </div>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label className="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" readOnly/>
                    </div>
                    <div class="col-md-4">
                        <label className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" readOnly/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" aria-describedby="inputGroupPrepend" readOnly/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" id="validationCustom03" readOnly/>
                    </div>
                    <div class="col-md-6" id="userAbout">
                        <label className="form-label">About</label>
                        <textarea className="form-control" id="textAbout" readOnly></textarea>
                    </div>
                    <div className="col-12" id="saveButton">
                        <button className="btn btn-primary" type="submit" >Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactCard;