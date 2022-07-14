import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

function SelectedSearch() {
    const {selSearch} = useContext(SearchContext)

    return (
        <div className="Selected-SearchContainer">
                <h1>{selSearch.title}</h1>
                <p>{selSearch.address}</p>
                <label className="start-DTLabel">Start date and time :</label>
                <br></br>
                <input type="datetime-local" id="start-DT"></input>
                <br></br>
                <label className="end-DTLabel">End date and time :</label>
                <br></br>
                <input type="datetime-local" id="end-DT"></input>
                <br></br>
                <textarea maxLength="1000" placeholder="What will you be doing here?" id='notes-Input' className="notes-Input"></textarea>
                <button class="add" role="button">Add to list</button>
        </div>

    )
}

export default SelectedSearch;