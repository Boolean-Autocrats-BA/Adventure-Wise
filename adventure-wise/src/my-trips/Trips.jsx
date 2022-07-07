import TripDetails from "./components/TripDetails";
import TripList from "./components/TripList";
import "./Trips.css";

const Trips = () => {
  return (
    <div className="container">
      <div className="container_header">Planned Trips/Itinerary</div>
      <div className="overview">
        <TripList />
        <TripDetails />
      </div>
    </div>
  );
};

export default Trips;
