import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Left from "./Left";
import Right from "./Right";
import Header from "./Header";
import Footer from "./Footer";
import {App, token} from "./App.jsx";
import axios from "axios";
import getToken from "./getToken.js";

function Home(props) {
  const [selectedTab, setSelectedTab] = useState("Placements");
  console.log("In the home: " + token);
  console.log(token);

  function random(value){
    setSelectedTab(value);
  }

  // Promise.all([getToken()])
  //    console.log(results[0].data.accessToken);
  // .then(function (results) {
  //   token.token = results[0].data.accessToken;
  // });

  return (<div className="row">
    <div className="col-lg-3 col-md-3 col-sm-12">
      <Left random = {random} selectedTab = {selectedTab}/>
    </div>
    <div className="col-lg-8 col-md-12 col-sm-12">
      <Right selectedTab={selectedTab}/>
    </div>
  </div>);
}

export default Home;
