import React, { useContext, useState } from "react";
import "./ExploreApp.css";
import SearchContext from "../context/SearchContext";
import GoogleSearch from './components/GoogleSearch'
import UserContext from "../context/UserContext";
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";



function ExploreApp() {
    const { setselSearch } = useContext(SearchContext)
    const { searchRes, setSearchRes, placeDetails } = useContext(UserContext)
    const [loading, setloading] = useState(true);

    function HandleViewButton(event) {
        placeDetails?.map((elem) => {
            if (event.target.id === elem.place_id) {
                setselSearch({
                    "title": elem.name,
                    "address": elem.formatted_address,
                    "website": elem.website,
                    "image_url": "https://i.imgur.com/R0hRWaZ.jpeg"
                })
            }
        })
        
        

    }
    function openSearchNav() {
        document.getElementById("Search-Sidepanel").style.width = "300px";
        document.getElementById("Search-Sidepanel").style.height = "450px";
    }

    function closeSearchNav() {
        document.getElementById("Search-Sidepanel").style.width = "0";
    }

    function closeTripNav(){
        document.getElementById("Trip-Sidepanel").style.width = "0";
    }

    function openTripNav(){
        document.getElementById("Trip-Sidepanel").style.width = "300px";
        document.getElementById("Trip-Sidepanel").style.height = "450px";
    }

   
    return (
        <div className='Explore-container'>
            <div className="Search-BarContainer">
            <GoogleSearch />
            {}
            </div>
            {/* Search Results SideBar*/}
            <div id="Search-Sidepanel" class="Search-Sidepanel">
                <a class="closebtn" onClick={closeSearchNav}>&times;</a>
              {
              placeDetails?.map((elem) => {
                {console.log(elem.website)}
                return (
                    <div>
               <div className='Result-Card'>
                               <br></br>
                               {/* <img src={elem.image_url} className="Result-CardImg" onClick={HandleViewButton}></img> */}
                               <br></br>
                               <h2 onClick={HandleViewButton} className="Result-CardTitle" id={elem.place_id}>{elem.name}</h2>
                           </div>
               </div>
                )
              })
              }
            </div>
            <button class="openbtn" onClick={openSearchNav}>&#9776; Search Results</button>
             {/* Search Results SideBar*/}
              {/* Trips SideBar*/}
              <div id="Trip-Sidepanel" class="Trip-Sidepanel">
                <a class="closeTripbtn" onClick={closeTripNav}>&times;</a>
                <div>
                <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                        <details className="Trips-SideBarInd">
                            <summary><center>Family Get Together</center></summary>
                            <div class="Trip-SideBarCardContent">
                                <p>place #1</p>
                            </div>
                        </details>
                </div>
            </div>
            <button class="openTripbtn" onClick={openTripNav}>&#9776; Your trips</button>
               {/* Trips SideBar*/}

        </div>
    )
}

export default ExploreApp;