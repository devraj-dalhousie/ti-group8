import React, {Component} from 'react';
import './profile.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.error = '';
        this.user= window.location.search !== "" ? window.location.search.substring(6) : localStorage.getItem('email');
        this.doBasicValidation = this.doBasicValidation.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.checkNotEmpty = this.checkNotEmpty.bind(this);
    }

    validateForm(event) {
        event.preventDefault();
        const isBasicValidationPassed = this.doBasicValidation();
        if (isBasicValidationPassed === false) {
            console.log("Basic validation failed.")
            const errorsDiv = document.getElementById("errors");
            errorsDiv.innerHTML = '<p style="color:red">' + this.error + '</p>'
            return;
        }
            localStorage.setItem(this.user+'-data', "done")
            window.location.href = window.location.origin + "/home?user=" + this.user;
    }
    
    doBasicValidation() {
        console.log("Doing basic validation");
        var errors = '';
        const age = document.getElementById("age");
        if (this.checkNotEmpty(age.value) === false || isNaN(String(age.value).trim())) {
            errors = errors + "Invalid Age.<br>";
        }

        const weight = document.getElementById("weight");
        if (this.checkNotEmpty(weight.value) === false || isNaN(String(weight.value).trim())) {
            errors = errors + "Invalid weight.<br>";
        }

        const height = document.getElementById("height");
        if (this.checkNotEmpty(height.value) === false || isNaN(String(height.value).trim())) {
            errors = errors + "Invalid height.<br>";
        }

        const wearableYes = document.getElementById("wearable");
        if (this.checkNotEmpty(wearableYes.value) === false) {
            errors = errors + "Invalid wearable.<br>";
        }

        const devices = document.getElementById("devices");
        if (this.checkNotEmpty(devices.value) === false) {
            errors = errors + "Invalid devices.<br>";
        }

        const gender = document.getElementById("gender");
        if (this.checkNotEmpty(gender.value) === false) {
            errors = errors + "Invalid gender.<br>";
        }

        const drinking = document.getElementById("drinking");
        if (this.checkNotEmpty(drinking.value) === false) {
            errors = errors + "Invalid drinking habits.<br>";
        }

        const smoking = document.getElementById("smoking");
        if (this.checkNotEmpty(smoking.value) === false) {
            errors = errors + "Invalid smoking habits.<br>";
        }

        const healthGoal = document.getElementById("healthGoal");
        if (this.checkNotEmpty(healthGoal.value) === false) {
            errors = errors + "Invalid health goals.<br>";
        }
        this.error = errors;
        
        if(this.checkNotEmpty(errors)){
            return false;
        } else{
            localStorage.setItem(this.user+'-age', age.value)
            localStorage.setItem(this.user+'-weight', weight.value)
            localStorage.setItem(this.user+'-height', height.value)
            localStorage.setItem(this.user+'-wearable', wearableYes.value)
            localStorage.setItem(this.user+'-devices', devices.value)
            localStorage.setItem(this.user+'-gender', gender.value)
            localStorage.setItem(this.user+'-drinking', drinking.value)
            localStorage.setItem(this.user+'-smoking', smoking.value)
            localStorage.setItem(this.user+'-healthGoal', healthGoal.value)
            return true;
        }

        
    }

    checkNotEmpty(value) {
        return value.trim() !== "";

    }

    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"profile-form"}>
                <form onSubmit={this.validateForm}>
                    <h3>Enter health details</h3>
                    <div className="profile-form-group">
                        <label>Age(in years)</label>
                        <input type="text" id="age" className="profile-form-group" placeholder="Age (in years)" />
                    </div>

                    <div className="form-group">
                        <label>Weight(in KG)</label>
                        <input type="text" id="weight" className="profile-form-group" placeholder="Enter weight in kg" />
                    </div>

                    <div className="form-group">
                        <label>Height(in cm)</label>
                        <input type="text" id="height" className="profile-form-group" placeholder="Enter height (in cm)" />
                    </div>
                    <hr/>
                    <div className={"profile-form-group"}>
                        <div className={"doYouWear"}>
                            <label>Do you wear wearables?</label>
                            <select name="devices" id="wearable">
                            <option name="" value=""></option>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                        <small>(By answering this question you give your consent to track the data from the wearable device.)</small>
                    </div>
                    <hr/>
                    <label htmlFor="devices">Which wearable device do you wear:</label>
                    <select name="devices" id="devices">
                        <option value=""></option>
                        <option value="apple">Apple Watch</option>
                        <option value="fitbit">Fitbit</option>
                        <option value="samsung">Samsung Watch</option>
                        <option value="xiaomi">Xiaomi Smart Band</option>
                        <option value="goqii">Goqii</option>
                        <option value="other">Others</option>
                    </select>
                <hr/>
                    <div className={"profile-form-group"}>
                        <div className={"gender"}>
                        <label>Gender</label>
                        <select name="gender" id="gender">
                            <option value=''></option>
                            <option name="male" value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className="drink-input">
                        <label>Do you drink?</label>
                        <select name="drinking" id="drinking">
                            <option name="" value=""></option>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                            <option value="occ">Occationally</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="smoke-input">
                        <label>Do you smoke?</label>
                        <select name="smoking" id="smoking">
                            <option name="" value=""></option>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                            <option value="occ">Occationally</option>
                        </select>
                    </div>
                    <hr/>
                    <div className="drink-input">
                        <label>Please select health goals?</label>
                        <select name="healthGoal" id="healthGoal">
                            <option name="" value=""></option>
                            <option>Weight loss with vegetarian diet</option>
                            <option>Weight loss with non-vegetarian diet</option>
                            <option>Weight gain with vegetarian diet</option>
                            <option>Weight gain with non-vegetarian diet</option>
                        </select>
                    </div>
                    <hr/>
                    <div id='errors'></div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default Profile;