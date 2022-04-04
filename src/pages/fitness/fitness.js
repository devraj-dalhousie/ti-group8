import React, {Component} from 'react';
import './fitness.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Fitness extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
                <div className={"diet-page"}>
                    <section>
                        <h4>We provide fitness and workout routines based on your health goals.You health profile and goal is: Weight-loss with non-vegetarian diet.</h4>
                        <br/>
                        <h4>Based on your health profile and goal, here is your daily workout routine:</h4>
                        <div className="container">
                            <div className="row text-center align-items-end">
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Monday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Plank: Hold for 30 seconds</li>
                                            <li className="mb-3">Glute bridge</li>
                                            <li className="mb-3">Kettlebell deadlift</li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Squat</li>
                                            <li className="mb-3">Lunges</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Tuesday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">45 minutes of HIIT execise or intense cardio.</li>
                                            <li className="mb-3">Warm up for 10 minutes with light jog.</li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Static streching</li>
                                            <li className="mb-3">Power walking</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Wednesday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">12 reps of Dumbbell Bench Press</li>
                                            <li className="mb-3">12 reps of Dumbbell Row</li>
                                            <li className="mb-3">30 seconds plank</li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Squat</li>
                                            <li className="mb-3">Lunges</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Thursday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Moderate pace jog</li>
                                            <li className="mb-3">High intensity cardio workouts</li>
                                            <li className="mb-3">Cross </li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Squat</li>
                                            <li className="mb-3">Lunges</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Friday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">50 jumping jacks</li>
                                            <li className="mb-3">15 Burpees</li>
                                            <li className="mb-3">25 squats</li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">30 seconds plank</li>
                                            <li className="mb-3">20 V-ups</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Saturday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Single arm chest press.</li>
                                            <li className="mb-3">TRX row</li>
                                            <li className="mb-3">Dumbbell bicep curls</li>
                                        </ul>
                                        <hr/>
                                        <h4>Circuit 2</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Single-arm bent over row</li>
                                            <li className="mb-3">Knee push ups</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 mb-5 mb-lg-0">
                                    <div className="bg-white p-5 rounded-lg shadow">
                                        <h3 className="h6 text-uppercase font-weight-bold mb-4">Sunday</h3>
                                        <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                        <h4>Circuit 1</h4>
                                        <ul className="list-unstyled text-small text-left">
                                            <li className="mb-3">Take rest on Sunday</li>
                                            <li className="mb-3">Brisk walk for 5000 steps</li>
                                        </ul>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Fitness;