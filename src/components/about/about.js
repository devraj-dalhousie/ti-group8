import React, {Component} from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className={"about-us"}>
                <h1>About us</h1>
                <hr/>
                <h3>We are Group-8 of Technology Innovation.</h3>
                <hr/>
                <h3>Meet our team</h3>
                <ul>
                    <li>Harjot Singh</li>
                    <li>Devraj Singh</li>
                    <li>Jaswanth Mandav</li>
                    <li>Eunbin Cha</li>
                    <li>Cameron Chaffey</li>
                    <li>Junied Ahmed Jisan</li>
                </ul>
            </div>
        );
    }
}

export default About;