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

  return (
    <table className="myTrips_tableOverview">
      <thead>
        <tr>
          <th>{getTripName()}</th>
          <th>{getDates()}</th>
          <th>{places.length} Places</th>
        </tr>
      </thead>
    </table>
  );
};

export default TripDetailsOverview;
