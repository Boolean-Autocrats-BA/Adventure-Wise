import React from "react";

const TripItemDetails = ({ place }) => {
  return (
    <tr className="trip_item">
      <td className="location">{place.place_address}</td>
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
