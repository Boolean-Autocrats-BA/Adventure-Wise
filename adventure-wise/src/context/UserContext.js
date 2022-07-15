import { createContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [loggedIn, setLoggedIn] = useState(false);
   const [userID, setUser] = useState(null);
   const [userProfile, setUserProfile] = useState(null);
   const [userTrips, setUserTrips] = useState(null);
   const [searchRes, setSearchRes] = useState(null);

   const { isLoaded } = useLoadScript({
      googleMapsApiKey: ,
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
            searchRes,
            setSearchRes
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

export default UserContext;
