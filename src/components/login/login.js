import React from "react";
import {Navigate} from 'react-router-dom';

import "./login.css";
import axios from "axios";

export class Login extends React.Component {
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
        this.authValidation1 = this.authValidation1.bind(this);
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
        this.authValidation();
    }

    async authValidation() {
        this.setState({redirect: true});
        return;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email);
        console.log(password);
        const loginUrl = "https://tutorial4-api.herokuapp.com/api/users/login";
        const payload = {
            'email': email,
            'password': password
        };
        await axios.post(loginUrl, payload)
            .then(response => {
                console.log("Login response: " + response.status);
                console.log("Login response1: " + response.data);
                console.log("Login response2: " + response.statusText);
                if (response.status === 200 && response.statusText === 'OK') {
                    console.log("Login successful");
                    this.setState({redirect: true});
                } else {
                    console.log("Login failed");
                    document.getElementById('cred-error').style.visibility = 'visible';
                    this.setState({redirect: false})
                }
            }).catch(error => {
                console.log("Error: " + error);
                document.getElementById('cred-error').style.visibility = 'visible';
            });
    }

    authValidation1() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": "jonsnow@westeros.com",
            "password": "G@me0fthr0ne5"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tutorial4-api.herokuapp.com/api/users/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log("Results:", result))
            .catch(error => console.log('error', error));
    }

    doBasicValidation() {
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
        return this.state.basicValidation;
    }

    setError(input, message) {
        const e = input.parentElement;
        e.className = 'user-input error'
        const errMsg = e.querySelector('small');
        errMsg.innerText = message
        this.state.basicValidation = false;
    }

    removeError(input) {
        const e = input.parentElement;
        e.className = 'user-input success'
        this.state.basicValidation = true;
    }

    checkNotEmpty(value) {
        if (value.trim() === "") {
            return false;
        }
        return true;
    }

    render() {
        console.log("First time: ", this.state.redirect);
        if (this.state.redirect === true) {
            return (<Navigate to={"/home"}/>)
        }
        return (<div className="login-form">
            <h2>Login:</h2>
            <form id="form" onSubmit={this.validateForm}>
                <div className="user-input">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter your email" onChange={this.handleChange}/>
                    <small>dummy_error_message</small>
                </div>
                <div className="user-input">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password"
                           onChange={this.handleChange}/>
                    <small>dummy_error_message</small>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Submit"/>
                </div>
                <strong id={"cred-error"}>Wrong username or password</strong>
            </form>
        </div>);
    }
}