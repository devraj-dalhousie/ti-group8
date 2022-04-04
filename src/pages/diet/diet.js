import React, {Component} from 'react';
import './diet.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Diet extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className={"diet-page"}>
                <h3>Diet suggestion based on your plan</h3>
                <p>Based on your profile and preferences, we recommend following diet plan</p>
                <ul>
                    <li>
                        <h5>Cut back on refined carbs</h5>
                        <p>One way to help lose weight quickly is to cut back on sugars and starches, or carbohydrates. This could be with a low carb eating plan or by reducing refined carbs and replacing them with whole grains.</p>
                    </li>
                    <li>
                        <h5>Eat protein, fat, and vegetables</h5>
                        <p>
                            Aim to include a variety of foods at each meal. To balance your plate and help you lose weight your meals should include:
                            <ul>
                                <li>a protein source</li>
                                <li>fat source</li>
                                <li>vegetables</li>
                                <li>a small portion of complex carbohydrates, such as whole grains</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <h5>Move your body. More exercise and yoga</h5>
                        <p>Exercise, while not required to lose weight, can help you lose weight more quickly. Lifting weights has particularly good benefits.
                            <br/>
                            By lifting weights, you’ll burn calories and help prevent your metabolism from slowing down, which is a common side effect of losing weight
                            <br/>
                            Try strength training three to four times a week. If you’re new to lifting weights, a trainer may be able to help you get started. Make sure your doctor is also aware of any new exercise plans.
                            <br/>
                            If lifting weights is not an option for you, doing some cardio workouts such as walking, jogging, running, cycling, or swimming is very beneficial for weight loss and general health.
                        </p>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Diet;