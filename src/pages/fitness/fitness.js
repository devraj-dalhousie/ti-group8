import React, {Component} from 'react';
import './fitness.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Fitness extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"fitness-page"}>
                <h2>You have selected the plan as Weight-loss and Non-Vegetarian</h2>.
                <h4>Based on your profile and plan, please follow the routine:</h4>
                <div className="row">
                    <div className="column">

                    </div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
            </div>
        );
    }
}

export default Fitness;