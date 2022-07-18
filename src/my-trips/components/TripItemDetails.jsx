import React from "react";

const TripItemDetails = ({ place }) => {
  const date = new Date(place.trip_date).toDateString();
  const time = new Date(place.trip_time).toLocaleTimeString();

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
    </tr>
  );
};

export default TripItemDetails;
