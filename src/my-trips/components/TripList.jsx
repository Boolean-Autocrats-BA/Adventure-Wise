import { useEffect, useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { userTrips } = useContext(UserContext);

  const [tripIdArr, setTripIdArr] = useState([]);

  useEffect(() => {
    let myTripsArr = userTrips.map((trip) => {
      return trip.trip_id;
    });
    setTripIdArr(myTripsArr);
  }, []);

  return (
    <div className="trip_listItems">
      {tripIdArr?.map((id, index) => (
        <TripListItem key={id} tripId={id} tripNum={index} />
      ))}
    </div>
  );
};

export default TripList;
