import React, {Component} from 'react';
import UserNavbar from "../../components/navBar/UserNavBar";
import './activity.css';

class Activity extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
                <div className={"activity-form"}>
                    <h4>Based your consent, we have tracked the health data from your Apple Watch and stored the data in our database. </h4>
                    <h4>Here your health activity metrics. Please review it.</h4>
                    <hr/>
                    <table className={"health-metrics"}>
                        <tr>
                            <th>Health metrics</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>BMI value</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Your avg daily steps(last 10 days)</td>
                            <td>7562</td>
                        </tr>
                        <tr>
                            <td>Your avg standing time(last 10 days)</td>
                            <td>3 hour 42 minutes</td>
                        </tr>
                        <tr>
                            <td>Your blood oxygen levels(last 24 hours)</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <td>Avg sleeping time(last 4 days)</td>
                            <td>7 hour 23 minutes</td>
                        </tr>
                        <tr>
                            <td>Avg daily calory burn</td>
                            <td>56 kcal</td>
                        </tr>
                        <tr>
                            <td>Avg daily running time</td>
                            <td>14 minutes</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Activity;