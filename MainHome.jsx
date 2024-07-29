import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState} from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App";

function MainHome(props) {
  return (<div>
    <Header/>
    <Home/>
    <Footer/>
  </div>);
}

export default MainHome;
