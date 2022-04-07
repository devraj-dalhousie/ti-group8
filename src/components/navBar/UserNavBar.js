import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./UserNavBar.css";

function UserNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light static-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/home"}><h1>AdMix Fitness</h1></Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/subscribe"}>Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/activity"}>Activity</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/diet"}>Diet</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/profile"}>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/fitness"}>Fitness</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/about"}>About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Log out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
  )
}

export default UserNavbar