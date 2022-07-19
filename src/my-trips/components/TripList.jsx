import { useContext } from "react";
import UserContext from "../../context/UserContext";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { userTrips } = useContext(UserContext);

  return (
    <div className="trip_listItems">
      {userTrips?.map((trip) => (
        <TripListItem
          key={trip.trip_id}
          tripId={trip.trip_id}
          tripName={trip.trip_name}
        />
      ))}
    </div>
  );
};

export default TripList;
