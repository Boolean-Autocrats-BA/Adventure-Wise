import { useContext } from "react";
import PlaceContext from "../../context/PlaceContext";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { places } = useContext(PlaceContext);

  return (
    <div className="trip_listItems">
      {places?.map((place) => (
        <TripListItem key={place.id} place={place} />
      ))}
    </div>
  );
};

export default TripList;
