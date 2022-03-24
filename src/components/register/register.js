import React from "react";

import "./register.css";
import Profile from "./profile";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.setError = this.setError.bind(this);
        this.removeError = this.removeError.bind(this);
        this.checkIfAlphaNumeric = this.checkIfAlphaNumeric.bind(this);
        this.checkLength = this.checkLength.bind(this);
        this.checkValidEmail = this.checkValidEmail.bind(this);
        this.checkNotEmpty = this.checkNotEmpty.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    validateForm(event) {
        event.preventDefault();
        //let histpry = useHistory();
        const fname = document.getElementById("fname");
        if (this.checkNotEmpty(fname.value) === false) {
            this.setError(fname, "First Name is a mandatory field.");
        } else if (this.checkIfAlphaNumeric(fname.value) === false) {
            this.setError(fname, "First Name must contain only alphanumeric characters");
        } else {
            this.removeError(fname);
            this.state.fname = fname.value;
        }

        const lname = document.getElementById("lname");
        if (this.checkNotEmpty(lname.value) === false) {
            this.setError(lname, "Last Name is a mandatory field.");
        } else if (this.checkIfAlphaNumeric(lname.value) === false) {
            this.setError(lname, "Last Name must contain only alphanumeric characters");
        } else {
            this.removeError(lname);
            this.state.lname = lname.value;
        }

        const email = document.getElementById("email");
        if (this.checkNotEmpty(email.value) === false) {
            this.setError(email, "Email is a mandatory field.");
        } else if (this.checkValidEmail(email.value) === false) {
            this.setError(email, "Enter a valid email");
        } else {
            this.removeError(email);
            this.state.email = email.value;
        }

        const password1 = document.getElementById("password1");
        if (this.checkNotEmpty(password1.value) === false) {
            this.setError(password1, "Password is a mandatory field.");
        } else if (this.checkLength(password1.value, 8, 2000) === false) {
            this.setError(password1, "Password must be minimum 8 characters");
        } else {
            this.removeError(password1);
            this.state.password1 = password1.value;
        }

        const password2 = document.getElementById("password2");
        if (this.checkNotEmpty(password2.value) === false) {
            this.setError(password2, "Please confirm password");
        } else if (password2.value !== password1.value) {
            this.setError(password2, "Both password value should match");
        } else {
            this.removeError(password2);
        }
    }

    setError(input, message) {
        const e = input.parentElement;
        e.className = 'user-input error'
        const errMsg = e.querySelector('small');
        errMsg.innerText = message
        this.setState({redirect: false});
    }

    removeError(input) {
        const e = input.parentElement;
        e.className = 'user-input success'
        this.setState({redirect: true});
    }

    checkIfAlphaNumeric(val) {
        const alphaNumericRegex = /^[a-z0-9]+$/i;
        return alphaNumericRegex.test(String(val).toLowerCase());
    }

    checkLength(val, min, max) {
        const len = val.length;
        if (len < min || len > max) {
            return false;
        }
        return true
    }

    checkValidEmail(email) {
        const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmailRegex.test(String(email).toLowerCase());
    }

    checkNotEmpty(value) {
        if (value.trim() === "") {
            return false;
        }
        return true;
    }

    render() {
        return <>
            <div>{!this.state.redirect ? (
                <div class="registration-form">
                    <h2>User Registration</h2>
                    <form id="form" onSubmit={this.validateForm}>
                        <div class="user-input">
                            <label for="first-name">First Name:</label>
                            <input type="text" id="fname" placeholder="Enter First Name" onChange={this.handleChange}/>
                            <small>dummy_error_message</small>
                        </div>
                        <div className="user-input">
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" id="lname" placeholder="Enter Last Name" onChange={this.handleChange}/>
                            <small>dummy_error_message</small>
                        </div>
                        <div className="user-input">
                            <label for="email">Email:</label>
                            <input type="text" id="email" placeholder="Enter Email address"
                                   onChange={this.handleChange}/>
                            <small>dummy_error_message</small>
                        </div>
                        <div className="user-input">
                            <label for="password1">Password:</label>
                            <input type="password" id="password1" placeholder="Enter password"
                                   onChange={this.handleChange}/>
                            <small>dummy_error_message</small>
                        </div>
                        <div className="user-input">
                            <label for="password2">Confirm Password:</label>
                            <input type="password" id="password2" placeholder="Confirm password"
                                   onChange={this.handleChange}/>
                            <small>dummy_error_message</small>
                        </div>
                        <div class="submit-button">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>) : (<Profile fname={this.state.fname} lname={this.state.lname} email={this.state.email} />)}
            </div>
        </>
    }
}