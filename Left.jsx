import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState} from "react";
import {App, token} from "./App.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as FaICons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import Logout from './Logout';

function Left(props, state) {
  const Token = localStorage.getItem('accessToken');

  const [valueClicked, setValueClicked] = useState("Placements");
  props.random(valueClicked);

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (<div>

    <div>
      <> <div className='left'>
        <IconContext.Provider value={{
            color: '#fff'
          }}>
          <nav className='nav-menu'>
            <ul className='nav-list'>
              <li className={props.selectedTab === "Placements"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Placements")}>Placements</button>
              </li>
              <li className={props.selectedTab === "Competitions"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Competitions")}>Competitions</button>
              </li>
              <li className={props.selectedTab === "Ebooks"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Ebooks")}>Ebooks</button>
              </li>
              <li className={props.selectedTab === "Tutorials"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Tutorials")}>Tutorials</button>
              </li>
              <li className={props.selectedTab === "Roadmaps"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Roadmaps")}>Roadmaps</button>
              </li>
              <li className={props.selectedTab === "Journals"?'nav-text-active':'nav-text'}>
                <button onClick = {() => setValueClicked("Journals")}>Journals</button>
              </li>
              <li className={props.selectedTab === "Logout"?'nav-text-active':'nav-text'}>
                <button class="" onClick = {() => setValueClicked("Logout")}>Log Out</button>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  </div>

</div>);
}

export default Left;
