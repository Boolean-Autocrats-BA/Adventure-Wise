import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
   return (
      <div className="navbar">
         <Link to="home">home</Link>
         <Link to="explore">explore</Link>
         <Link to="mytrips">my trips</Link>
         <Link to="about">about</Link>
         <Link to="myprofile">my profile</Link>
      </div>
   );
}

export default Navbar;
