import { createContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [loggedIn, setLoggedIn] = useState(false);
   const [userID, setUser] = useState(null);
   const [userProfile, setUserProfile] = useState(null);
   const [userTrips, setUserTrips] = useState(null);
   const [searchRes, setSearchRes] = useState(null);
   const [placeDetails, setplaceDetails] = useState([]);

   const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ["places"],
   });

   return (
      <UserContext.Provider
         value={{
            loggedIn,
            setLoggedIn,
            userID,
            setUser,
            userProfile,
            setUserProfile,
            userTrips,
            setUserTrips,
            isLoaded,
            searchRes,
            setSearchRes,
            placeDetails,
            setplaceDetails
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export default UserContext;
