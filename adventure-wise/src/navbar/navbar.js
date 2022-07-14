import React from "react";
import './navbar.css';

function Navbar({gobackpage}){
    

    function updatepage(p){ 
        gobackpage(p)
         
   }

   return(
    <div className="navbar">
        <button className="navbutton" onClick={()=>updatepage('home')} >HOME</button>
        <button className="navbutton" onClick={()=>updatepage('explore')}>EXPLORE</button>
        <button className="navbutton" onClick={()=>updatepage('trips')}>MY TRIPS</button>
    </div>    
   
   )

}

export default Navbar;