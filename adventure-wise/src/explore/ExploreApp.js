import React, { useContext } from "react";
import "./ExploreApp.css";
import SearchContext from "../context/SearchContext";
import SelectedSearch from "./components/SelectedSearch";

let searchObj= [
    {
        "location_name": "Las Vegas Mall",
        "description": "Las Vegas is known for its eye-catching shopping centers, like the Grand Canal Shoppes at The Venetian | The Palazzo, with its recreation of Old Venice, complete with gondolas.",
        "image_url": "https://i.imgur.com/R0hRWaZ.jpeg",
        "address": "2453 E. Coco Ave., Los Angeles, CA"
    },
    {
        "location_name": "Las Vegas Mall",
        "description": "Las Vegas is known for its eye-catching shopping centers, like the Grand Canal Shoppes at The Venetian | The Palazzo, with its recreation of Old Venice, complete with gondolas.",
        "image_url": "https://i.imgur.com/R0hRWaZ.jpeg",
        "address": "2453 E. Coco Ave., Los Angeles, CA"
    },
    {
        "location name": "Las Vegas Mall",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image_url": "https://i.imgur.com/R0hRWaZ.jpeg",
        "address": "2453 E. Coco Ave., Los Angeles, CA"
    },
    {
        "location_name": "Las Vegas Mall",
        "description": "This is a mall!",
        "image_url": "https://i.imgur.com/R0hRWaZ.jpeg",
        "address": "2453 E. Coco Ave., Los Angeles, CA"
    },
    {
        "location_name": "Las Vegas Mall",
        "description": "This is a mall!",
        "image_url": "https://i.imgur.com/R0hRWaZ.jpeg",
        "address": "2453 E. Coco Ave., Los Angeles, CA"
    }
]

let tripObj = [
    {
        "trip_name": "Family Get Together",
        "places": [
            "Las Vegas Mall",
            "Los Angeles Downtown",
            "Nashville, Tennessee"
        ]
    },
    {
        "trip_name": "Family Get Together2",
        "places": [
            "Las Vegas Mall",
            "Los Angeles Downtown",
            "Nashville, Tennessee"
        ]
    },
    {
        "trip_name": "Family Get Together3",
        "places": [
            "Las Vegas Mall",
            "Los Angeles Downtown",
            "Nashville, Tennessee"
        ]
    },
    {
        "trip_name": "Family Get Together4",
        "places": [
            "Las Vegas Mall",
            "Los Angeles Downtown",
            "Nashville, Tennessee"
        ]
    }
]

function ExploreApp () {
    const {setselSearch} = useContext(SearchContext)
    function HandleViewButton() {
        setselSearch({
            "title": "Las Vegas Mall",
            "address": "2453 E. Coco Ave., Los Angeles, CA"
        })

    }
    return (
        <div className='Explore-container'>
        <form className='Place-SearchForm'>
        <input type="search" id="Place-SearchBar" placeholder='Enter Location'></input>
        <select name="Category" id="CategorySelect">
                <option value="Attractions">Attractions</option>
                <option value="Hotels">Hotels</option>
                <option value="Transit">Transit</option>
                <option value="Resturaunts">Resturaunts</option>
                <option value="Emergency Services">Emergency Services</option>
            </select>
            <input type="submit" id="Place-SearchButton" value="Search"></input>
      </form>
      <div className="Search-SideBarContainer">
      <center><h3 className="Search-SideBarTitle">Search Results</h3></center>
      <div className="Search-SideBar"> 
      {searchObj.map((elem) => {
        return (
            <div className='Result-Card'>
                <br></br>
            <img src={elem.image_url} className="Result-CardImg"></img>
            <p>{elem.location_name}</p>
            <small><center>{elem.address}</center></small>
            <br></br>
            <button onClick={HandleViewButton}>View Details</button>
            <br></br>
            </div>
        )
      })}
      </div>
      </div>
      <div className="Trips-SideBarContainer">
      <h3><center>PLANNED TRIPS</center></h3>
      <div className="Trips-SideBar"> 
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
      </div>

      </div>
      </div>
   
        </div>
         )
}

export default ExploreApp;