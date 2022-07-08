import TripDetails from "./components/TripDetails";
import TripList from "./components/TripList";
import "./Trips.css";

const Trips = () => {
  return (
    <div className="myTrip-container">
      <div className="myTrip-header">Planned Trips/Itinerary</div>
      <div className="myTrip-overview">
        <TripList />
        <TripDetails />
      </div>
    </div>
  );
};

export default Trips;
