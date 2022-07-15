import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";

export default function GoogleSearch() {
   const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ["places"],
   });

   const [searchRes, setSearchRes] = useState(null);

   const {
      value,
      suggestions: { data },
      setValue,
   } = usePlacesAutocomplete({ cache: 86400, debounce: 500 });

   const { handleSubmit } = useForm();

   const handleInput = (e) => {
      setValue(e.target.value);
   };

   const onSubmit = () => {
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

      if (searchRes.length !== 0) {
         searchRes.map((id) => {
            parameters.placeId = id;
            getDetails(parameters).then((details) => {
               console.log(details);
            });
         });
      }
   };

   // clear out previous search results to be able to push new ones into the state or a better logic

   if (!isLoaded) {
      return <h1>Loading...</h1>;
   } else {
      return (
         <form onSubmit={handleSubmit(onSubmit)}>
            <input value={value} onChange={handleInput} placeholder="search" />
            <input type="submit" />
         </form>
      );
   }
}
