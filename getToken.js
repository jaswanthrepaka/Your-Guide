import React, {useState} from "react";
import axios from "axios";

async function getToken() {
  try {
    return axios.get("https://intense-cove-28580.herokuapp.com/token");
  } catch (error) {
    console.error(error);

  }
}

export default getToken;
