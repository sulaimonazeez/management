import React from "react";
import Profile from "./1691413082957.jpg";
import { Link } from "react-router-dom";
const Dialog = ({ myToggle }) => {
    return (
        <div className="container myrelative">
            <div>
                <button onClick={myToggle} className="btn btn-danger"><i className="fa fa-close"></i></button>
            </div>
            <div className="horiz">
                <img src={Profile} alt="Admin" className="admin-pic"/>
                <div>
                    <h4>sulaimon</h4>
                    <h5 className="text-primary">Administration</h5>
                </div>
            </div>
            <div className="myhori">
                <Link to="/profile">Profile</Link><br/>
                <hr/>
                <Link to="/message">Inbox</Link><br/>
                <hr/>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}
export default Dialog;