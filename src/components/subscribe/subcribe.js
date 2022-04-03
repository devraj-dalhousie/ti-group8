import React, {Component} from 'react';
import './subscribe.css';
import {Link} from "react-router-dom";

class Subcribe extends Component {
    render() {
        return (
            <div className={"subscribe"}>
                <h1>Subscribe to our world-class coaching and paid services.</h1>
                <hr/>
                <h2>Monthly subscription available:</h2>
                <div>
                    One to one diet consulation - 30 CAD per month
                    <Link className="nav-link" to={"/pay"}>Pay</Link>
                </div>
                <div>
                    One to one exercise consulation with our fitness expert- 35 CAD per month
                    <Link className="nav-link" to={"/pay"}>Pay</Link>
                </div>
                <div>
                    One to one consulation for both diet and exercise - 40 CAD per month
                    <Link className="nav-link" to={"/pay"}>Pay</Link>
                </div>
            </div>
        );
    }
}

export default Subcribe;