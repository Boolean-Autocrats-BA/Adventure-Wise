import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
   const { setUser, setLoggedIn, setUserProfile, setUserTrips } = useContext(UserContext);

   return (
      <button
         className="navBarBtn"
         id="logoutBtn"
         onClick={() => {
            setUser(null);
            setLoggedIn(false);
            setUserProfile(null);
            setUserTrips(null);
            localStorage.clear();
         }}
      >
         logout
      </button>
   );
}
