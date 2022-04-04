import React, {Component} from 'react';
import UserNavbar from '../../components/navBar/UserNavBar';
import './home.css';

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
                #BeFitBeHealthy
                </div>
            </div>
        );
    }
}

export default Home;