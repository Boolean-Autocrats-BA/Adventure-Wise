import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';


function Home(props) {
    return (
        
      <div className="Home">
       <h1 className="center"><style>
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Major+Mono+Display&display=swap');
            </style>Adventure<br></br>Wise</h1>
       <div className="halves">
       <div className="leftHalf">
       <div className="vertical-center">
       <div className="welcome">Welcome, Sid!</div>
       <h2>Explore</h2>
       <h2>My Trips</h2>
       <h2>About</h2>
       </div>
       </div>
       <div className="rightHalf">
       <h2>Top Destinations to Explore</h2>
       <div>Paris</div>
       </div>
       </div>
      </div>
    );
  }

export default Home;