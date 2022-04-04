import React, {Component} from 'react';
import UserNavbar from '../../components/navBar/UserNavBar';
import './home.css';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"home-page"}>
                Hello, welcome to Admix Fitness –(Blending Workout and Dietary Regimes) home page.
                <br/>
                We strive hard to keep you fit & healthy through a range of holistic offerings that include fitness and dietary program.
                Now anyone can now stay healthy from the safety of their homes with our curated solution designed.
                <br/>
                We offer various paid programs which will keep to healthy and fit. See our plans here:
                <br/>
                <Link to={"/subscribe"}>See our plans</Link>
                <br/>
                #BeFitBeHealthy
                </div>
            </div>
        );
    }
}

export default Home;