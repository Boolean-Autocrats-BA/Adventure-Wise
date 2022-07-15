import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userID, setUser] = useState(8);
  const [userProfile, setUserProfile] = useState(null);
  const [userTrips, setUserTrips] = useState(null);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
