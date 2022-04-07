import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserNavbar from '../../components/navBar/UserNavBar';
import './healthDetailsSuccess.css';

class HealthDetailsSuccess extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
                <div className={"health-success"}>
                    <h4>Your health details has been successfully stored in our database.</h4>
                    <h5>
                        Based on your health data, we will show customized diet chart and fitness plan.
                    </h5>
                    <h5>You can also monitor your health activity <Link className="nav-link" to={"/activity"}>Activity</Link></h5>
                </div>
            </div>
        );
    }
}

export default HealthDetailsSuccess;