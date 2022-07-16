import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import UserContext from "../../context/UserContext";

const TripDetailsOverview = ({ dates }) => {
  const { places, selectedTripId } = useContext(PlaceContext);
  const { userTrips } = useContext(UserContext);
  const simpleDate = new Date(dates.trip_date);
  const tripDate = simpleDate.toDateString();

  const getTripName = () => {
    let tripName = userTrips.filter((trip) => trip.trip_id == selectedTripId);
    return tripName[0].trip_name;
  };

  return (
    <table className="myTrips_tableOverview">
      <thead>
        <tr>
          <th>{getTripName()}</th>
          <th>{tripDate}</th>
          <th>{places.length} Places</th>
        </tr>
      </thead>
    </table>
  );
};

export default TripDetailsOverview;
