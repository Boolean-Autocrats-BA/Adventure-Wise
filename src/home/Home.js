import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({ user, popularPlaces }) {
   return (
      <div className="homeGrid">
         <div className="home-leftGridContainer">
            <div className="userPicture"></div>
            <div className="userWelcome">Welcome, {user.first_name}!</div>
            <br></br>
            <div className="homeNavFlex">
               <Link className="homeLinks" to="explore">
                  explore
               </Link>
               <Link className="homeLinks" to="mytrips">
                  my trips
               </Link>
               <Link className="homeLinks" to="about">
                  about
               </Link>
               <Link className="homeLinks" to="myprofile">
                  my profile
               </Link>
            </div>
         </div>

         <div className="home-rightGridContainer">
            <h4 id="popularPlacesHeader">Popular Destinations</h4>
            <div className="destinations">
               {popularPlaces.slice(0, 6).map((place) => {
                  return (
                     <div className="destinationCard">
                        <img className="destinationPicture" src={place.picture} alt="" />
                        <div id="destinationAdr">
                           {place.city}, {place.state_country}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default Home;
