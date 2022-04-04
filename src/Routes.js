import React from "react";
import { Route, Routes } from 'react-router-dom';

import Login from "./pages/login/login";
import SignUp from "./pages/register/register";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Diet from "./pages/diet/diet";
import Fitness from "./pages/fitness/fitness";
import Profile from "./pages/profile/profile";
import Subcribe from "./pages/subscribe/subcribe";
import Payment from "./pages/payment/payment";

function App() {

  return (
      <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subscribe" element={<Subcribe />} />
      <Route path="/pay" element={<Payment/>} />
      </Routes>
  );
}

export default App;
