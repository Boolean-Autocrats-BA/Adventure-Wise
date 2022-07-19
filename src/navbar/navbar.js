import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import "./navbar.css";

function Navbar() {
   return (
      <div className="navbar">
         <Link className="navBarBtn" to="">
            home
         </Link>
         <Link className="navBarBtn" to="explore">
            explore
         </Link>
         <Link className="navBarBtn" to="mytrips">
            my trips
         </Link>
         <Link className="navBarBtn" to="about">
            about
         </Link>
         <Link className="navBarBtn" to="myprofile">
            my profile
         </Link>
         <LogoutButton />
      </div>
   );
}

export default Navbar;
