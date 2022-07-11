import { useState, createContext } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  //state
  const [places, setPlaces] = useState([
    { id: 1, place: "Hawaii" },
    { id: 2, place: "Paris" },
    { id: 3, place: "Hong Kong" },
  ]);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  return (
    <PlaceContext.Provider
      value={{
        places,
        addPlace,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceContext;
