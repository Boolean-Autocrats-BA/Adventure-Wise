import TripDetails from "./components/TripDetails";
import TripList from "./components/TripList";
import "./Trips.css";

const Trips = () => {
  return (
    <div className="myTrip_container">
      <div className="myTrip_header">Planned Trips/Itinerary</div>
      <div className="myTrip_overview">
        <TripList />
        <TripDetails />
      </div>
    </div>
  );
};

export default Trips;
