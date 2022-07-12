import React from "react";
import Trips from "./my-trips/Trips.jsx";
import { PlaceProvider } from "./context/PlaceContext";

function App() {
  return (
    <PlaceProvider>
      <div className="App">
        <Trips />
      </div>
    </PlaceProvider>
  );
}

export default App;
