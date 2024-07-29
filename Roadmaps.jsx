import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Roadmaps(props) {
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
        url: "https://intense-cove-28580.herokuapp.com/roadmaps",
        method: "GET",
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": `Bearer ${accessToken}`
        }
      }).then((res) => {
        // console.log(res.data.placements);
        setState(res.data.roadmaps);
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
        ele.roadmaps.forEach((le, j) => {
          // {var value = "#collapseExample"+i.toString()+j.toString()}
          content.push(<div className="box3">
            <a className="removestyle" data-bs-toggle="collapse" href={"#collapseExample" + i + j} role="button" aria-expanded="false" aria-controls="collapseExample">
              <div>
                <p className='jobTitle'>{le["job_role"]}</p>
              </div>
              <div>
                <h1 key={ele.companyname} className="workLocation"><b>Category: </b>{ele["type"]}</h1>
              </div>
            </a>

            <div class="collapse" id={"collapseExample" + i + j}>
              <div className="card-body">
                <div>
                  <div className='description'>
                    <p >
                      <b>Description:</b>
                      <br/>{le.Description}</p>
                  </div>
                  <img src={le.image_url} alt={le["job_role"]} width="700px" height="480px"/>
                </div>
              </div>
            </div>

          </div>);
        });
      });
    }
    return (<div>{content}</div>);
}

export default Roadmaps;
