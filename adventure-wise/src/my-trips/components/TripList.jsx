import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { places, itineraryId } = useContext(PlaceContext);

  return (
    <div className="trip_listItems">
      {itineraryId?.map((id) => (
        <TripListItem key={id} itineraryId={id} />
      ))}
    </div>
  );
};

export default TripList;
