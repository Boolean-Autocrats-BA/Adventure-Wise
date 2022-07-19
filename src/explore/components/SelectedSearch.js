import React, { useContext, useEffect } from "react";
import SearchContext from "../../context/SearchContext";

function SelectedSearch() {
    const {selSearch} = useContext(SearchContext)
        return (
            <div className="Selected-SearchContainer">
                    {/* <img className="Selected-SearchImage" src={selSearch.image_url}></img> */}
                    <h2 class="Selected-SearchTitle">{selSearch.title}</h2>
                    <p>{selSearch.address}</p>
                    {selSearch.website !== undefined ?
                    <a href={selSearch.website} target="_blank" rel="noreferrer"> Visit Website
                      </a>
                      : <p> No Website Found </p>
                    }
                    <br/>
                    <label className="start-DTLabel">Start date and time :</label>
                    <br></br>
                    <input type="datetime-local" id="start-DT"></input>
                    <br></br>
                    <label className="end-DTLabel">End date and time :</label>
                    <br></br>
                    <input type="datetime-local" id="end-DT"></input>
                    <br></br>
                    <textarea maxLength="1000" placeholder="What will you be doing here?" id='notes-Input' className="notes-Input"></textarea>
                    <button class="add-ListButton" role="button">Add to trip</button>
            </div>
    
        )
   
}


export default SelectedSearch;