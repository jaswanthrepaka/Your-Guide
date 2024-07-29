import React, {useState} from "react";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App";

function MainLogin(props) {

  if (localStorage.getItem('accessToken')) {
    localStorage.removeItem('accessToken');
  }

  return (<div>
    <Header/>
    <Login/>
    <Footer/>
  </div>);
}

export default MainLogin;
