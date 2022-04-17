import React, {Component} from 'react';
import './payment.css';
import UserNavbar from "../../components/navBar/UserNavBar";

export default class Payment extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
            <div className="payment-page">
                <div className="page-header">
                    <h1>Pay using credit card or debit card </h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="row">
                                        <h5 className="text-center">Payment details:</h5>
                                        <img className="img-responsive cc-img"
                                             src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" alt={"credit-card-icons"}/>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <label>CARD NUMBER</label>
                                                    <div className="input-group">
                                                        <input type="tel" className="form-control"
                                                               placeholder="Valid Card Number"/>
                                                        <span className="input-group-addon"><span
                                                            className="fa fa-credit-card"></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-7 col-md-7">
                                                <div className="form-group">
                                                    <label><span
                                                        className="visible-xs-inline">EXPIRATION</span> DATE</label>
                                                    <input type="tel" className="form-control" placeholder="MM / YY"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-5 col-md-5 pull-right">
                                                <div className="form-group">
                                                    <label>CV CODE</label>
                                                    <input type="tel" className="form-control" placeholder="CVC"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <label>CARD OWNER</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Card Owner Names"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <button className="btn btn-warning btn-lg btn-block">Process payment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}