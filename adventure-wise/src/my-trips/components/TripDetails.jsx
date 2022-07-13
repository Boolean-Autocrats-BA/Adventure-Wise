import React, { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import TripItemDetails from "./TripItemDetails";
import TripDetailsOverview from "./TripDetailsOverview";

const TripDetails = () => {
  const { places } = useContext(PlaceContext);
  const { isTripAdded } = useContext(PlaceContext);

  return (
    <div className="trip_details">
      <TripDetailsOverview />
      <table className="tripDetails_table">
        <tbody>
          {!isTripAdded ? (
            <tr>
              <td>Select a trip from the list on the left</td>
            </tr>
          ) : (
            places.map((place) => (
              <TripItemDetails key={place.place_id} place={place} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TripDetails;
