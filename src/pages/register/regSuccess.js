import React from "react";
import {Link} from "react-router-dom";
import './regSuccess.css';

const RegSuccess = (props) => {
    return (
        <div className={"profile-success"}>
            <h2>Registration successful!!</h2>
            <h5>
                Please login using your email-id and password.
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
            </h5>
        </div>
    );
}

export default RegSuccess;