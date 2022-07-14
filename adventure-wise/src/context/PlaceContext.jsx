import { useState, createContext } from "react";

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  /* state used for myTrips component -Mike */
  // Dummy data to fill trip details in myTrips component -Mike
  const [places, setPlaces] = useState([
    {
      trip_id: 1,
      place_id: 1,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Disney's Animal Kingdom Lodge",
      dates: "12 Aug 22",
      time: "3:00 pm",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 2,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Epcot",
      dates: "13 Aug 22",
      time: "8:00 am",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 3,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Viking Dinner Show",
      dates: "13 Aug 22",
      time: "6:30 pm",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 4,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Magic Kingdom",
      dates: "13 Aug 22",
      time: "9:00 am",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 5,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Finding Nemo - The Musical",
      dates: "14 Aug 22",
      time: "12:30 pm",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 6,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Blizzard Beach Water Park",
      dates: "15 Aug 22",
      time: "10:00 am",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
    {
      trip_id: 1,
      place_id: 7,
      location: "1375 E Buena Vista Dr, Orlando, FL 32830",
      place: "Fantasia On Ice",
      dates: "16 Aug 22",
      time: "7:00pm",
      notes:
        "This is where the notes will be. Details about the place will be displayed here",
    },
  ]);

  // Used to determine if there's data to render to trip details in myTrips component -Mike
  const [isTripAdded, setTripAdded] = useState(false);
  const [tripId, setTripId] = useState(1);
  const [itineraryId, setItineraryId] = useState([1]);

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
        tripId,
        setTripId,
        itineraryId,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceContext;
