import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './profile.css';

/*
Age,
Smoke
Drink

 */
class Profile extends Component {
    render() {
        return (
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
                        <input type="email" id="email" className="profile-form-group" placeholder="Enter height (in cm)" />
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
                    <div className={"form-group"}>
                        <label>What are you more interested in?:</label>
                        <br/>

                        <label htmlFor="int-diet"> Interested in balanced diet
                            <input type={"checkbox"} id={"int-diet"} name={"int-diet"} value={"Diet"} />
                        </label><br/>

                        <label htmlFor="int-weightloss"> Interested in weight loss
                            <input type={"checkbox"} id={"int-weightloss"} name={"int-weightloss"} value={"Weight loss"} />
                        </label><br/>

                        <label htmlFor="int-fitness"> Interested in overall fitness
                            <input type={"checkbox"} id={"int-fitness"} name={"int-fitness"} value={"Fitness"} />
                        </label><br/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default Profile;