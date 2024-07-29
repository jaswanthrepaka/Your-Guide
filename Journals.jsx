import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Journals(props) {
  const accessToken = localStorage.getItem('accessToken');
  const [state, setState] = useState(null);
  const [isLoading, setLoading] = useState(true);

  let content = [
    <div class="loading box4">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
    ];

    useEffect(async () => {
      setLoading(true);
      axios({
        url: "https://intense-cove-28580.herokuapp.com/journals",
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": `Bearer ${accessToken}`
        }
      }).then((res) => {
        // console.log(res.data.placements);
        setState(res.data.journals);
        //console.log(data);
        setLoading(false);
      }).catch((err) => {
        alert(err);
        console.log(err);
      });
    }, []);

    if (state) {
      content = [];
      console.log(state);
      state.forEach((ele, i) => {
        ele.journals.forEach((le, j) => {
          // {var value = "#collapseExample"+i.toString()+j.toString()}
          content.push(<div className="box3">
            <a className="removestyle2" aria-expanded="false" aria-controls="collapseExample">
              <div>
                <p className='title2'>{le["paper_title"]}</p>
              </div>
              <div >
                <h1 key={ele.companyname} className="companyName2"><b>Paper Type: </b>{ele["types"]}</h1>
              </div>
              <div>
                <a className="btn btn-primary" href={le["pdf_link"]} target="_blank">Read Now</a>
              </div>
            </a>

          </div>);
        });
      });
    }
    return (<div>{content}</div>);
}

export default Journals;
