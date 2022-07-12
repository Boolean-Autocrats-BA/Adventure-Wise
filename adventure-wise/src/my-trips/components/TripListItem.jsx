import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";

const TripListItem = ({ place }) => {
  const { setTripAdded } = useContext(PlaceContext);

  const addTripDetails = () => {
    setTripAdded(true);
  };

  return (
    <button onClick={addTripDetails} className="trip_btn">
      Trip {place.id}
    </button>
  );
};

export default TripListItem;
