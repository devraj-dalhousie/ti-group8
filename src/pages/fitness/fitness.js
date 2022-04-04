import React, {Component} from 'react';
import './fitness.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Fitness extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"fitness-page"}>
            <p>Fitness form...more to come.</p>
            </div>
            </div>
        );
    }
}

export default Fitness;