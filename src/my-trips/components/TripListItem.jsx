import { useContext, useEffect, useState } from "react";
import PlaceContext from "../../context/PlaceContext";

const TripListItem = ({ tripId, tripName }) => {
   const { setIsTripSelected, setTripAdded, setLoading, setPlaces, places, setSelectedTripId } =
      useContext(PlaceContext);

   const addTripDetails = (e) => {
      const targetId = e.target.id;

      setSelectedTripId(targetId);
      setIsTripSelected(true);
      setTripAdded(true);
      setLoading(true);
      getPlaces(targetId);
   };

   const getPlaces = (targetId) => {
      fetch(`http://localhost:3050/users/trips/${targetId}/places`)
         .then((res) => res.json())
         .then((data) => {
            setPlaces(data);
         });
   };

   useEffect(() => {
      if (places.length > 0) {
         setLoading(false);
      }
   }, [places]);

   return (
      <button id={tripId} onClick={addTripDetails} className="trip_btn">
         {tripName}
      </button>
   );
};

export default TripListItem;
