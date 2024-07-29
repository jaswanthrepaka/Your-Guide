import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MainLogin from "./MainLogin";
import MainHome from "./MainHome";

export const token={token: ""};

function App() {

  return (<div>
    <Router>
      <Routes>
        <Route exact="exact" path='/' element={<MainLogin />}></Route>
        <Route exact="exact" path='/home' element={<MainHome />}></Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
