import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const TripListItem = ({ tripId }) => {
  const { setIsTripSelected, setItineraryId, setTripAdded } =
    useContext(PlaceContext);

  const addTripDetails = (e) => {
    setIsTripSelected(true);
    setItineraryId(e.target.id);
    setTripAdded(true);
  };

  return (
    <button id={tripId} onClick={addTripDetails} className="trip_btn">
      Trip {tripId}
    </button>
  );
};

export default TripListItem;
