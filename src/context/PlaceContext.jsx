import { useState, createContext } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  /*used for myTrips component -Mike */
  const [places, setPlaces] = useState([]);
  const [isTripAdded, setTripAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTripSelected, setIsTripSelected] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);

  return (
    <PlaceContext.Provider
      value={{
        places,
        setPlaces,
        isTripAdded,
        setTripAdded,
        loading,
        setLoading,
        isTripSelected,
        setIsTripSelected,
        selectedTripId,
        setSelectedTripId,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceContext;
