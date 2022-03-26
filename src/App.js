import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login/login";
import SignUp from "./components/register/register";

function App() {
    return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}>DietPlan</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
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
                        </Routes>
                    </div>
                </div>
            </div>
    );
}

export default App;