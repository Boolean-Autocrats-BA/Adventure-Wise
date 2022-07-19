import React from "react";

const TripItemDetails = ({ place }) => {
   const date = new Date(place.trip_date).toDateString();
   const time = new Date(place.trip_time).toLocaleTimeString();

   const deletePlace = (placeID) => {
      fetch(`http://localhost:3050/users/trips/places/${placeID}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      });
   };

   return (
      <tr className="trip_item">
         <td className="location">
            {place.place_name}
            <br />
            {place.place_address}
         </td>
         <td className="dates">
            {date}
            <br />
            {time}
         </td>
         <td className="notes">{place.notes}</td>
         <td>
            <button
               className="deletePlaceBtn"
               id={place.place_id}
               onClick={(e) => {
                  console.log(e.target.id);
                  deletePlace(e.target.id);
               }}
            >
               X
            </button>
         </td>
      </tr>
   );
};

export default TripItemDetails;
