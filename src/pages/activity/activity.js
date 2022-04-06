import React, {Component} from 'react';
import UserNavbar from "../../components/navBar/UserNavBar";
import './activity.css';

class Activity extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
                <div className={"activity-form"}>
                    Hello world....
                </div>
            </div>
        );
    }
}

export default Activity;