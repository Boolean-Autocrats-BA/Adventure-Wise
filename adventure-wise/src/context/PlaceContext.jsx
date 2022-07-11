import { useState, createContext } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  /* state used for myTrips component -Mike */
  // Dummy data to fill trip details in myTrips component -Mike
  const [places, setPlaces] = useState([
    { id: 1, place: "Hawaii", dates: "12 - 19 Aug 22", events: 10 },
    { id: 2, place: "Paris", dates: "1 - 10 Sep 22", events: 15 },
    { id: 3, place: "Hong Kong", dates: "15 - 31 Oct 22", events: 12 },
  ]);

  // Used to determine if there's data to render to trip details in myTrips component -Mike
  const [isTripAdded, setTripAdded] = useState(false);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  return (
    <PlaceContext.Provider
      value={{
        places,
        addPlace,
        isTripAdded,
        setTripAdded,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceContext;
