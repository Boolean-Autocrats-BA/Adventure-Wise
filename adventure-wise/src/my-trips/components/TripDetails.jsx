import React, { useContext, useState } from "react";
import PlaceContext from "../../context/PlaceContext";
import TripItemDetails from "./TripItemDetails";
import TripDetailsOverview from "./TripDetailsOverview";

const TripDetails = () => {
  const { places, isTripAdded, isTripSelected, loading } =
    useContext(PlaceContext);

  if (loading) {
    return (
      <div className="trip_details">
        <table className="tripDetails_table">
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="trip_details">
      {isTripSelected ? <TripDetailsOverview dates={places[0]} /> : <></>}
      <table className="tripDetails_table">
        <tbody>
          {!isTripAdded ? (
            <tr>
              <td>Select a trip from your list to view details</td>
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
