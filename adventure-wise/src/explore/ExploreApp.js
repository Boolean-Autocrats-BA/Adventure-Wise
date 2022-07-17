import React, { useContext } from "react";
import "./ExploreApp.css";
import SearchContext from "../context/SearchContext";
import GoogleSearch from "./components/GoogleSearch";
import UserContext from "../context/UserContext";

let searchObj = [
   {
      location_name: "Las Vegas Mall",
      description:
         "Las Vegas is known for its eye-catching shopping centers, like the Grand Canal Shoppes at The Venetian | The Palazzo, with its recreation of Old Venice, complete with gondolas.",
      image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      address: "2453 E. Coco Ave., Los Angeles, CA",
   },
   {
      location_name: "Las Vegas Mall",
      description:
         "Las Vegas is known for its eye-catching shopping centers, like the Grand Canal Shoppes at The Venetian | The Palazzo, with its recreation of Old Venice, complete with gondolas.",
      image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      address: "2453 E. Coco Ave., Los Angeles, CA",
   },
   {
      location_name: "Las Vegas Mall",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      address: "2453 E. Coco Ave., Los Angeles, CA",
   },
   {
      location_name: "Las Vegas Mall",
      description: "This is a mall!",
      image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      address: "2453 E. Coco Ave., Los Angeles, CA",
   },
   {
      location_name: "Las Vegas Mall",
      description: "This is a mall!",
      image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      address: "2453 E. Coco Ave., Los Angeles, CA",
   },
];

let tripObj = [
   {
      trip_name: "Family Get Together",
      places: ["Las Vegas Mall", "Los Angeles Downtown", "Nashville, Tennessee"],
   },
   {
      trip_name: "Family Get Together2",
      places: ["Las Vegas Mall", "Los Angeles Downtown", "Nashville, Tennessee"],
   },
   {
      trip_name: "Family Get Together3",
      places: ["Las Vegas Mall", "Los Angeles Downtown", "Nashville, Tennessee"],
   },
   {
      trip_name: "Family Get Together4",
      places: ["Las Vegas Mall", "Los Angeles Downtown", "Nashville, Tennessee"],
   },
];

function ExploreApp() {
   const { setselSearch } = useContext(SearchContext);
   const { searchRes, setSearchRes } = useContext(UserContext);
   function HandleViewButton() {
      setselSearch({
         title: "Las Vegas Mall",
         address: "2453 E. Coco Ave., Los Angeles, CA",
         image_url: "https://i.imgur.com/R0hRWaZ.jpeg",
      });
   }
   function openSearchNav() {
      document.getElementById("Search-Sidepanel").style.width = "300px";
      document.getElementById("Search-Sidepanel").style.height = "450px";
   }

   function closeSearchNav() {
      document.getElementById("Search-Sidepanel").style.width = "0";
   }

   function closeTripNav() {
      document.getElementById("Trip-Sidepanel").style.width = "0";
   }

   function openTripNav() {
      document.getElementById("Trip-Sidepanel").style.width = "300px";
      document.getElementById("Trip-Sidepanel").style.height = "450px";
   }

   return (
      <div className="Explore-container">
         <div className="Search-BarContainer">
            <GoogleSearch />
         </div>
         {/* Search Results SideBar*/}
         <div id="Search-Sidepanel" class="Search-Sidepanel">
            <a class="closebtn" onClick={closeSearchNav}>
               &times;
            </a>
            <div>
               {searchObj.map((elem) => {
                  return (
                     <div className="Result-Card">
                        <br></br>
                        <img src={elem.image_url} className="Result-CardImg" onClick={HandleViewButton}></img>
                        <br></br>
                        <h2 onClick={HandleViewButton} className="Result-CardTitle">
                           {elem.location_name}
                        </h2>
                     </div>
                  );
               })}
            </div>
         </div>
         <button class="openbtn" onClick={openSearchNav}>
            &#9776; Search Results
         </button>
         {/* Search Results SideBar*/}
         {/* Trips SideBar*/}
         <div id="Trip-Sidepanel" class="Trip-Sidepanel">
            <a class="closeTripbtn" onClick={closeTripNav}>
               &times;
            </a>
            <div>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
               <details className="Trips-SideBarInd">
                  <summary>
                     <center>Family Get Together</center>
                  </summary>
                  <div class="Trip-SideBarCardContent">
                     <p>place #1</p>
                  </div>
               </details>
            </div>
         </div>
         <button class="openTripbtn" onClick={openTripNav}>
            &#9776; Your trips
         </button>
         {/* Trips SideBar*/}
      </div>
   );
}

export default ExploreApp;
