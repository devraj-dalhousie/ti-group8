import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './profile.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Profile extends Component {
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
                        <input type="text" id="lname" className="profile-form-group" placeholder="Enter weight in kg" />
                    </div>

                    <div className="form-group">
                        <label>Height(in cm)</label>
                        <input type="text" id="height" className="profile-form-group" placeholder="Enter height (in cm)" />
                    </div>
                <hr/>
                    <div className={"profile-form-group"}>
                        <div className={"gender"}>
                        <label>Gender</label>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="drink-input">
                        <label>Do you drink?
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="drink" id="yes" value="yes" />
                        <label htmlFor="no">No</label>
                        <input type="radio" name="drink" id="no" value="no"/>
                        <label htmlFor="occ">Occasionally</label>
                        <input type="radio" name="drink" id="occ" value="occ"/>
                        </label>
                    </div>
                    <hr/>
                    <div className="smoke-input">
                        <label>Do you smoke?</label>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="smoke" id="yes" value="yes" />
                        <label htmlFor="no">No</label>
                        <input type="radio" name="smoke" id="no" value="no"/>
                        <label htmlFor="occ">Occasionally</label>
                        <input type="radio" name="smoke" id="occ" value="occ"/>
                    </div>
                    <hr/>
                    <div className="drink-input">
                        <label>Please select health goals?
                            <label htmlFor="yes">Weight loss with vegetarian diet</label>
                            <input type="radio" name="drink" id="yes" value="yes" />
                            <label htmlFor="yes">Weight loss with non-vegetarian diet</label>
                            <input type="radio" name="drink" id="yes" value="yes" />
                            <label htmlFor="yes">Weight gain with vegetarian diet</label>
                            <input type="radio" name="drink" id="yes" value="yes" />
                            <label htmlFor="yes">Weight gain with non-vegetarian diet</label>
                            <input type="radio" name="drink" id="yes" value="yes" />
                        </label>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

export default Profile;