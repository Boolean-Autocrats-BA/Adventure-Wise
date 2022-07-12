import React from "react";
import "./About.css";
// import { Link } from 'react-router-dom';

function About(props) {
  function ButtonOne() {
    alert("You clicked button one.");
  }

  return (
    <div className="About">
      <h1 className="center">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Major+Mono+Display&display=swap');
        </style>
        Adventure<br></br>Wise
      </h1>
      <div className="aboutMain">
          <div className="vertical-center">
            <div className="info"><h1>About</h1></div>
            <br></br>
            <h2>creators:</h2>
            <h3>siddhant bose</h3>
            <h3>anthony clay</h3>
            <h3>michael howard</h3>
            <h3>yanchao jin</h3>
            <h3>magdiel rosario</h3><br></br><br></br><br></br>
          </div>
      </div>
    </div>
  );
}

export default About;
