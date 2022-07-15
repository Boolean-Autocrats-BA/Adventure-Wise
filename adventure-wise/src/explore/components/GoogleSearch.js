import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";
import UserContext from "../../context/UserContext";

export default function GoogleSearch(isLoaded) {

   const {setSearchRes, searchRes} = useContext(UserContext)

   const {
      value,
      suggestions: { data },
      setValue,
   } = usePlacesAutocomplete({ cache: 86400, debounce: 200 });

   const { handleSubmit } = useForm();

   const handleInput = (e) => {
      setValue(e.target.value);
   };

   const onSubmit = () => {
      setSearchRes(null)
      const placeRes = [];
      data.map((results) => {
         const { place_id } = results;
         return placeRes.push(place_id);
      });
      setSearchRes(placeRes);
      renderPlaceResults();
   };

   const renderPlaceResults = () => {
      const parameters = {
         placeId: null,
         fields: [
            "name",
            "formatted_address",
            "opening_hours",
            "photos",
            "rating",
            "types",
            "user_ratings_total",
            "website",
         ],
      };

      console.log(searchRes)

         searchRes.map((id) => {
            parameters.placeId = id;
            getDetails(parameters).then((details) => {
               console.log(details);
            });
         });
      
   };

   // clear out previous search results to be able to push new ones into the state or a better logic

   if (!isLoaded) {
      return <h1>Loading...</h1>;
   } else {
      return (
         <form className='Search-BarContainer' onSubmit={handleSubmit(onSubmit)}>
            <input id="Place-SearchBar" value={value} onChange={handleInput} placeholder="search" />
            <input className="Search-BarButton" type="submit" value='Search'/>
         </form>
      );
   }
}
