import React, { Component } from "react";
import './register.css';
import {Link} from "react-router-dom";
import axios from "axios";
import RegSuccess from "./regSuccess";

export default class SignUp extends Component {
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

    async validateForm(event) {
        event.preventDefault();
        const fname = document.getElementById("fname");
        if (this.checkNotEmpty(fname.value) === false) {
            this.setError(fname, "First Name is a mandatory field.");
            return;
        } else if (this.checkIfAlphaNumeric(fname.value) === false) {
            this.setError(fname, "First Name must contain only alphanumeric characters");
            return;
        } else {
            this.removeError(fname);
            this.state.fname = fname.value;
        }

        const lname = document.getElementById("lname");
        if (this.checkNotEmpty(lname.value) === false) {
            this.setError(lname, "Last Name is a mandatory field.");
            return;
        } else if (this.checkIfAlphaNumeric(lname.value) === false) {
            this.setError(lname, "Last Name must contain only alphanumeric characters");
            return
        } else {
            this.removeError(lname);
            this.state.lname = lname.value;
        }
        const name = fname.value + " " + lname.value;

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

        //const loginUrl = "http://localhost:8080/profile";
        const loginUrl = "https://ti8-backend.herokuapp.com/profile";
        const payload = {
            'name': name,
            'email': email.value,
            'password': password1.value,
        };
        console.log(payload)
        await axios.post(loginUrl, payload)
            .then(response => {
                if (response.status === 200) {
                    console.log("Registration successful successful");
                    this.setState({redirect: true});
                } else {
                    console.log("registration failed");
                    const top = document.getElementById("top")
                    this.setError(top, "Invalid credentials.");
                    this.setState({redirect: false})
                }
            }).catch(error => {
                console.log("Error while registration.");
                const top = document.getElementById("top")
                this.setError(top, "Invalid credentials.");
                this.setState({redirect: false})
            });
    }

    setError(input, message) {
        const e = input.parentElement;
        e.className = 'form-group error'
        const errMsg = e.querySelector('small');
        errMsg.innerText = message
        this.setState({redirect: false});
    }

    removeError(input) {
        const e = input.parentElement;
        e.className = 'form-group success'
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
        if(this.state.redirect) {
            return (
                <div>
                    <RegSuccess />
                </div>
            )
        }
        return (
            <div className={"register-form"}>
            <form onSubmit={this.validateForm}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="fname" className="form-control" placeholder="First name" />
                    <small>dummy_error_message</small>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="lname" className="form-control" placeholder="Last name" />
                    <small>dummy_error_message</small>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" />
                    <small>dummy_error_message</small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password1" className="form-control" placeholder="Enter password" />
                    <small>dummy_error_message</small>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
            </div>
        );
    }
}