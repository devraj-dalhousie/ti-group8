import React, { Component } from "react";
import {Link, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './login.css'
import axios from "axios";
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false, basicValidation: false};
        this.setState = this.setState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.setError = this.setError.bind(this);
        this.removeError = this.removeError.bind(this);
        this.checkNotEmpty = this.checkNotEmpty.bind(this);
        this.doBasicValidation = this.doBasicValidation.bind(this);
        this.authValidation = this.authValidation.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    validateForm(event) {
        event.preventDefault();
        const isBasicValidationPassed = this.doBasicValidation();
        if (isBasicValidationPassed === false) {
            console.log("Basic validation failed.")
            return;
        }
        console.log("Basic validation passed");
    }

    async authValidation() {
        this.setState({redirect: true});
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //const loginUrl = "https://ti8-backend.herokuapp.com/profile/login";
        const loginUrl = "http://localhost:8080/profile/login";
        const payload = {
            'email': email,
            'password': password
        };
        await axios.post(loginUrl, payload)
            .then(response => {
                if (response.status === 200 && response.statusText === 'OK') {
                    console.log("Login successful");
                    this.setState({redirect: true});
                } else {
                    console.log("Login failed");
                    const top = document.getElementById("top")
                    this.setError(top, "Invalid credentials.");
                    this.setState({redirect: false})
                }
            }).catch(error => {
                console.log("Error: " + error);
                const top = document.getElementById("top")
                this.setError(top, "Invalid credentials.");
                this.setState({redirect: false})
            });
    }

    async doBasicValidation() {
        console.log("Doing basic validation");
        const email = document.getElementById("email");
        if (this.checkNotEmpty(email.value) === false) {
            this.setError(email, "Enter your email");
        } else {
            this.removeError(email);
            this.setState({"email": email.value});
        }

        const password = document.getElementById("password");
        if (this.checkNotEmpty(password.value) === false) {
            this.setError(password, "Enter you password");
        } else {
            this.removeError(password);
            this.setState({"password": password.value});
        }
        const loginUrl = "https://ti8-backend.herokuapp.com/profile/login";
        //const loginUrl = "http://localhost:8080/profile/login";
        const payload = {
            'email': email.value,
            'password': password.value
        };
        console.log(email.value)
        console.log(password.value)
        await axios.post(loginUrl, payload)
            .then(response => {
                if (response.status === 200) {
                    console.log("Login successful");
                    this.setState({redirect: true});
                } else {
                    console.log("Login failed");
                    const top = document.getElementById("top")
                    this.setError(top, "Invalid credentials.");
                    this.setState({redirect: false})
                }
            }).catch(error => {
                console.log("Error while login.");
                const top = document.getElementById("top")
                this.setError(top, "Invalid credentials.");
                this.setState({redirect: false})
            });

        return this.state.basicValidation;
    }

    setError(input, message) {
        if(input === null) {
            console.error(input + " is null. Please debug.")
        }
        const e = input.parentElement;
        e.className = 'form-group error'
        const errMsg = e.querySelector('small');
        errMsg.innerText = message
        errMsg.color='red'
        this.state.basicValidation = false;
    }

    removeError(input) {
        const e = input.parentElement;
        e.className = 'form-group success'
        this.state.basicValidation = true;
    }

    checkNotEmpty(value) {
        return value.trim() !== "";

    }

    render() {
        if (this.state.redirect === true) {
            return (<Navigate to={"/home"}/>)
        }
        return (
            <div className={"login-form"}>
            <form onSubmit={this.validateForm}>
                <h3>Log in</h3>
                <div className="form-group">
                    <small id="top">
                        Invalid credentials. Either email or password is wrong.
                    </small>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" />
                    <small>dummy_error_message</small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter password" />
                    <small>dummy_error_message</small>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="new-user text-right">
                    New User? <Link to={"/sign-up"}>Sign up</Link>
                </p>

            </form>
            </div>
        );
    }
}