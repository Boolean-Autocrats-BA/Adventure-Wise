import React, { useEffect, useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import UserContext from "../../context/UserContext";
import TripItemDetails from "./TripItemDetails";
import TripDetailsOverview from "./TripDetailsOverview";

const TripDetails = () => {
  const { places, setPlaces, isTripAdded, isTripSelected } =
    useContext(PlaceContext);
  const { userID } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3050/users/trips/${userID}/places`)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, []);

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
