import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import TripDetailsItem from "./TripDetailsItem";

const TripDetails = () => {
  const { places, addPlace } = useContext(PlaceContext);
  const { isTripAdded } = useContext(PlaceContext);

  return (
    <div className="trip_details">
      <table className="tripDetails_table">
        <thead>
          <tr>
            <th>Trip Name</th>
            <th>Dates</th>
            <th># of Places</th>
          </tr>
        </thead>
        <tbody>
          {!isTripAdded ? (
            <tr>
              <td>Select a trip from the list on the left</td>
            </tr>
          ) : (
            places.map((item, index) => (
              <TripDetailsItem key={index} className="trip_item" item={item} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TripDetails;
