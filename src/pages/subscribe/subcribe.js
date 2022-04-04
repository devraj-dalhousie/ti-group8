import React, {Component} from 'react';
import './subscribe.css';
import {Link} from "react-router-dom";
import UserNavbar from '../../components/navBar/UserNavBar';

class Subcribe extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
                <div className={"subscribe"}>
                <div className="pricing-table">
                    <div className="ptable-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-title">
                                    <h2>Basic</h2>
                                </div>
                                <div className="ptable-price">
                                    <h2><small>$</small>9.99<span>/ M</span></h2>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>General guides</li>
                                        <li>Activity tracker</li>
                                        <li>Free exercise videos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <Link className="nav-link" to={"/pay"}>Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ptable-item featured-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-status">
                                    <span>Best Value</span>
                                </div>
                                <div className="ptable-title">
                                    <h2>Premium</h2>
                                </div>
                                <div className="ptable-price">
                                    <h2><small>$</small>39.99<span>/ M</span></h2>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>Custom plans</li>
                                        <li>Health Coaches</li>
                                        <li>Ad-free experience</li>
                                        <li>Free exercise videos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <Link className="nav-link" to={"/pay"}>Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ptable-item">
                        <div className="ptable-single">
                            <div className="ptable-header">
                                <div className="ptable-title">
                                    <h2>Standard</h2>
                                </div>
                                <div className="ptable-price">
                                    <h2><small>$</small>19.99<span>/ M</span></h2>
                                </div>
                            </div>
                            <div className="ptable-body">
                                <div className="ptable-description">
                                    <ul>
                                        <li>Custom plans</li>
                                        <li>Activity trackers</li>
                                        <li>Free exercise videos</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ptable-footer">
                                <div className="ptable-action">
                                    <Link className="nav-link" to={"/pay"}>Buy now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Subcribe;