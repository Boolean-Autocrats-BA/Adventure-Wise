import React from "react";

const TripDetailsItem = ({ item }) => {
  return (
    <tr className="trip_item">
      <td>{item.place}</td>
      <td>{item.dates}</td>
      <td>{item.events}</td>
    </tr>
  );
};

export default TripDetailsItem;
