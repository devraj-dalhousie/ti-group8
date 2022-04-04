import React, {Component} from 'react';
import './diet.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Diet extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"diet-page"}>
                <section>
                    <h4>We provide curated list of diet plans based on health profile and goals.You health profile and goal is: Weight-loss with non-vegetarian diet.</h4>
                    <br/>
                    <h4>Based on your health profile and goal, here is your curated diet plan:</h4>
                    <div className="container">
                        <div className="row text-center align-items-end">
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Monday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie and Eggs</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Bean Burrito</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">BBQ Cauliflower and Steak</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Apple and 1Tbsp Peanut Butter</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">1/2 cup pumpkin seeds in shell</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Tuesday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie and Tofu Scramble</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Cold sessame noodles and Edamame</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Salad and Pizza</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Homemade trail mix</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Avacado toast</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Wednesday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie with Oatmeal</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Garden Omelet</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Baked Asian Tofu</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Greek Yogurt</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">1/4 almond plus pear</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Thursday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie</li>
                                        <li className="mb-3">Greek yogurt parfait</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Veggie burger and quinoa chickpea salad</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Vegetarian chilli</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Chocolate Protein Muffin</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Veggies with 1/4 cup hummus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Friday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie</li>
                                        <li className="mb-3">Avacado toast</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Baked potato with topped with vegetarian chilli</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Buffalo Tempeh wings with blue cheese dip</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">1/2 cup Pistachio nuts in shell</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">1 cheese stick and Orange</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Saturday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie</li>
                                        <li className="mb-3">Craig McMuffin</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Power salad</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Portabella Pizza</li>
                                        <li className="mb-3">Corn soup</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Banana</li>
                                        <li className="mb-3">1 Tbsp Nut Butter</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Greek Yogurt with Sunflower Seeds</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h3 className="h6 text-uppercase font-weight-bold mb-4">Sunday</h3>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <h4>Breakfast</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Protein smoothie</li>
                                        <li className="mb-3">Joys Protien Pancakes</li>
                                    </ul>
                                    <hr/>
                                    <h4>Lunch</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Chinese takeout</li>
                                    </ul>
                                    <hr/>
                                    <h4>Dinner</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Veggie Burgers</li>
                                        <li className="mb-3">Steak</li>
                                        <li className="mb-3">Quinoa and Edamame</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 1:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">1-2 cups Lentil</li>
                                        <li className="mb-3">Black Bean Soup</li>
                                    </ul>
                                    <hr/>
                                    <h4>Snacks 2:</h4>
                                    <ul className="list-styled text-small text-left">
                                        <li className="mb-3">Chocolate Protien Muffin</li>
                                    </ul>
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

export default Diet;