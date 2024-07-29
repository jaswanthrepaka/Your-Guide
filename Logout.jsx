import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {generatePath, useNavigate} from 'react-router';
import axios from 'axios';

function Logout(props){
  let navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(async () => {
    console.log("In effect");
    axios({
      url: "https://intense-cove-28580.herokuapp.com/logout",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": `Bearer ${accessToken}`
      }
    }).then((res) => {
      // console.log(res.data.placements);
      // setState(res.data.placements);
      //console.log(data);
      navigate('/');
    }).catch((err) => {
      alert(err);
      console.log(err);
    });
  } ,[]);

  return (
    <div>
    </div>
  );
}

export default Logout;
