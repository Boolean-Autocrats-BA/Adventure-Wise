import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const TripDetailsOverview = ({ dates }) => {
  const { myTrip, itineraryId } = useContext(PlaceContext);
  const simpleDate = new Date(dates.trip_date);
  const tripDate = simpleDate.toDateString();

  const trip = myTrip.filter((trip) => trip[`trip_id`] == itineraryId);

  return (
    <table className="myTrips_tableOverview">
      <thead>
        <tr>
          <th>{trip[0].trip_name}</th>
          <th>{tripDate}</th>
          <th># of Places</th>
        </tr>
      </thead>
    </table>
  );
};

export default TripDetailsOverview;
