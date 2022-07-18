import { useContext, useEffect } from "react";
import PlaceContext from "../../context/PlaceContext";
import UserContext from "../../context/UserContext";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { setMyTrip, tripId, setTripId } = useContext(PlaceContext);
  const { userID } = useContext(UserContext);

  useEffect(() => {
    let myTripsArr = [];
    fetch(`http://localhost:3050/users/trips/${userID}`)
      .then((res) => res.json())
      .then((trips) => {
        trips.forEach((trip) => {
          myTripsArr.push(trip.trip_id);
        });
        setMyTrip(trips);
      })
      .then(() => setTripId(myTripsArr));
  }, []);

  return (
    <div className="trip_listItems">
      {tripId?.map((id, index) => (
        <TripListItem key={index} tripId={id} />
      ))}
    </div>
  );
};

export default TripList;
