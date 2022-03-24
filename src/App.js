import './App.css';
import {Register} from "./components/register/register";
import {Login} from "./components/login/login";
import Home from "./components/home/home";
import {Component} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path={"/"} element={<Login />}/>
                        <Route exact path={"/login"} element={<Login />}/>
                        <Route exact path={"/register"} element={<Register />}/>
                        <Route exact path={"/home"} element={<Home />}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;