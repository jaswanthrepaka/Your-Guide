import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import Placements from "./Placements";
import Competitions from "./Competitions";
import Roadmaps from "./Roadmaps";
import Journals from "./Journals";
import Ebooks from "./Ebooks";
import Tutorials from "./Tutorials";
import Logout from "./Logout";

const components = {
    "Placements": () => {
        return (<div>
            <Placements />
        </div>);
    },
    "Competitions": () => {
        return (<div>
            <Competitions />
        </div>);
    },
    "Ebooks": () => {
        return (<div>
        <Ebooks />
        </div>);
    },
    "Tutorials": () => {
        return (<div>
        <Tutorials />
        </div>);
    },
    "Roadmaps": () => {
        return (<div>
        <Roadmaps />
        </div>);
    },
    "Journals": () => {
        return (
        <div>
        <Journals />
        </div>);
    },
    "Logout": () => {
      return (
        <div>
          <Logout />
        </div>
      );
    }
}

function Right(props) {
  console.log(props.selectedTab);
    return <div className="topMarginSpace scrollableDiv">{components[props.selectedTab]()}</div>;
}

export default Right;
