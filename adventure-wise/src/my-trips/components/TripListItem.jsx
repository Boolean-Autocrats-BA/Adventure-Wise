import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const TripListItem = ({ itineraryId }) => {
  const { setTripAdded } = useContext(PlaceContext);
  const { setTripId } = useContext(PlaceContext);

  const addTripDetails = (e) => {
    setTripId(e.target.id);
    setTripAdded(true);
  };

  return (
    <button id={itineraryId} onClick={addTripDetails} className="trip_btn">
      Trip {itineraryId}
    </button>
  );
};

export default TripListItem;
