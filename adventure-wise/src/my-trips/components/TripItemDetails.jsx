import React from "react";

const TripItemDetails = ({ place }) => {
  let index = 0;

  // for (let i = 0; i < places.length; i++) {
  //   if (tripId == places[i].place_id) {
  //     index = i;
  //   }
  // }

  return (
    <tr className="trip_item">
      <td className="location">{place.location}</td>
      <td className="dates">
        {place.dates}
        <br />
        {place.time}
      </td>
      <td className="notes">{place.notes}</td>
    </tr>
  );
};

export default TripItemDetails;
