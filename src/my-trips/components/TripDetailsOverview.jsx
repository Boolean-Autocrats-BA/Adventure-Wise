import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import UserContext from "../../context/UserContext";

const TripDetailsOverview = ({ dates }) => {
   const { places, selectedTripId } = useContext(PlaceContext);
   const { userTrips } = useContext(UserContext);

   const getTripName = () => {
      let tripName = userTrips.filter((trip) => trip.trip_id == selectedTripId);
      return tripName[0].trip_name;
   };

   const getDates = () => {
      let beginDate = new Date(places[0].trip_date);
      let endDate = new Date(places[places.length - 1].trip_date);
      return beginDate.toDateString() + " - " + endDate.toDateString();
   };

   const deleteTrip = (tripID) => {
      fetch(`http://localhost:3050/users/trips/${tripID}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      });
   };

   return (
      <table className="myTrips_tableOverview">
         <thead>
            <tr className="myTrips_OverviewRow">
               <th>{getTripName()}</th>
               <th>{getDates()}</th>
               <th>{places.length} Places</th>
               <th>
                  <button
                     id={selectedTripId}
                     onClick={(e) => {
                        deleteTrip(e.target.id);
                     }}
                  >
                     Delete Trip
                  </button>
               </th>
            </tr>
         </thead>
      </table>
   );
};

export default TripDetailsOverview;
