import React, {Component} from 'react';
import './contact.css';
import UserNavbar from '../../components/navBar/UserNavBar';

class Contact extends Component {
    render() {
        return (
            <div>
            <UserNavbar />
            <div className="container-contact100">
                <div className="wrap-contact100">
                    <form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Send Us A Message
				</span>

                        <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                            <input className="input100" type="text" name="name" placeholder="Full Name" />
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                            <input className="input100" type="text" name="email" placeholder="E-mail" />

                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                            <input className="input100" type="text" name="phone" placeholder="Phone" />

                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                            <textarea className="input100" name="message" placeholder="Your Message"/>
                            <span className="focus-input100" />
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
						<span>
							Send
						</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;