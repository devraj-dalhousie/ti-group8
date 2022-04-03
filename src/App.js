import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login/login";
import SignUp from "./components/register/register";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Diet from "./components/diet/diet";
import Fitness from "./components/fitness/fitness";
import Profile from "./components/profile/profile";
import Subcribe from "./components/subscribe/subcribe";
import Payment from "./components/payment/payment";

function App() {
    return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}>DietPlan</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/profile"}>Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/diet"}>Diet</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/fitness"}>Fitness</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/subscribe"}>Subscribe</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/about"}>About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Sign-in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="outer">
                    <div className="inner">
                        <Routes>
                            <Route exact path='/' element={<Login />} />
                            <Route path="/sign-in" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/diet" element={<Diet />} />
                            <Route path="/fitness" element={<Fitness />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/subscribe" element={<Subcribe />} />
                            <Route path="/pay" element={<Payment/>} />
                        </Routes>
                    </div>
                </div>
            </div>
    );
}

export default App;