import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {generatePath, useNavigate} from 'react-router';
import {App, token} from './App.jsx';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function Login(props) {

  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [status, setStatus] = useState(0);
  let navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://intense-cove-28580.herokuapp.com/login",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        "username": username,
        "password": pwd
      }
    }).then((res) => {
      const data = res.data;
      if(localStorage.getItem('accessToken')){
          localStorage.removeItem('accessToken');
      }
      // const temp = localStorage.getItem('accessToken');
      // if(data.accessToken && temp!=data.accessToken){
      // localStorage.setItem('accessToken', data.accessToken);
      // }
      if (data.status === 200) {
        if (data.accessToken) {
          console.log(data.accessToken);
          // localStorage.removeItem('accessToken');
          localStorage.setItem('accessToken', data.accessToken);
        }
        navigate('/home');
        console.log("Successfully Login");
      } else if(data.status === 409){
        alert(data.message);
      } else {
        alert("Error: Enter email in correct format and password with atleast 6 characters");
      }
    }).catch((err) => {
      alert(err.message);
      console.log(err);
    });
  }

  const handlesubmit1 = (e) => {
    e.preventDefault();
    setCpwd();
    axios({
      url: "https://intense-cove-28580.herokuapp.com/register",
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {

        "username": username,
        "password": pwd
      }
    }).then((res) => {
      const data = res.data;
      console.log(data);
      if (data.status === 200) {
        navigate('/home');
        console.log("Successfully signup");
      } else if(data.status === 409){
        alert(data.message);
      }else {
        alert("Failed to signup:\nEnter email in correct format and password with atleast 6 characters");
      }
    }).catch((err) => {
      alert(err);
      console.log(err);
    });
  }

  return (<div className="container row box">
    <div className="col-lg-7"></div>
    <div className="col-lg-5 box2">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-3 col-md-12 col-sm-12 changeToPointer">
          <div className='tab-left' onClick={() => setStatus(0)}>Log in</div>
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3 col-md-12 col-sm-12 changeToPointer">
          <div className='tab-right' onClick={() => setStatus(1)}>Sign up</div>
        </div>
      </div>
      <hr/>
      <div className="form"></div>
      {
        !status
          ? (<form className="login" onSubmit={handlesubmit}>
            <label>Login Id</label><br/>
            <input type="text" className="inputfield" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required="required"/><br/>
            <label>Passowrd</label><br/>
            <input type="password" className="inputfield" value={pwd} placeholder="password" onChange={(e) => setPwd(e.target.value)} required="required"/><br/>
            <input className='btn btn-lg btn-dark button' type="submit" value="Log In"/>
          </form>)
          : (<form className="login" onSubmit={handlesubmit1}>
            <label>Login Id</label><br/>
            <input type="text" className="inputfield" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required="required"/><br/>
            <label>Passowrd</label><br/>
            <input type="password" className="inputfield" value={pwd} placeholder="password" onChange={(e) => setPwd(e.target.value)} required="required"/>
            <label>Confirm Passowrd</label>
            <input type="password" className="inputfield" value={cpwd} placeholder=" retype password" onChange={(e) => setCpwd(e.target.value)} required="required"/><br/>
            <input className='btn btn-lg btn-dark button' type="submit" value="Sign Up"/>
          </form>)
      }
    </div>
  </div>);
}

export default Login;
