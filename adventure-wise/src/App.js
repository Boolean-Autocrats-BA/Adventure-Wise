import HeaderApp from "./header/HeaderApp";
import React, { useContext, useState } from "react";
import Login from "./login/Login";
import Navbar from "./navbar/navbar";
import Home from "./home/Home";
import ExploreApp from "./explore/ExploreApp";
import SelectedSearch from "./explore/components/SelectedSearch";
import { SearchProvider } from "./context/SearchContext";
import Trips from "./my-trips/Trips";
import About from "./about/About";
import Profile from "./profile/Profile";
import { Routes, Route } from "react-router-dom";
import { PlaceProvider } from "./context/PlaceContext";
import UserContext from "./context/UserContext";

function App() {
   const [popularPlaces, setPopularPlaces] = useState(null);

   const { loggedIn, userID, userProfile, setUserProfile, userTrips, setUserTrips } = useContext(UserContext);

   const getUser = () => {
      const promises = Promise.all([
         fetch(`http://localhost:3050/users/${userID}`), // gets user profile info
         fetch(`http://localhost:3050/users/trips/${userID}`), // get user trips
         fetch("http://localhost:3050/api/popular"), // for popular places
      ]);

      promises
         .then(([user, trips, places]) => {
            return Promise.all([user.json(), trips.json(), places.json()]);
         })
         .then(([user, trips, places]) => {
            setUserProfile(user);
            setUserTrips(trips);
            setPopularPlaces(places);
         });
   };

   if (!loggedIn) {
      return <Login />;
   } else if (!userProfile) {
      getUser();
      return <div>Loading...</div>;
   } else {
      return (
         <div className="App">
            <HeaderApp />
            <Navbar />
            <PlaceProvider>
               <SearchProvider>
                  <Routes>
                     <Route path="/" element={<Home user={userProfile} popularPlaces={popularPlaces} />} />
                     <Route
                        path="explore"
                        element={
                           <>
                              <ExploreApp />
                              <SelectedSearch />
                           </>
                        }
                     />
                     <Route path="mytrips" element={<Trips trips={userTrips} />} />
                     <Route path="about" element={<About />} />
                     <Route path="myprofile" element={<Profile user={userProfile} />} />
                  </Routes>
               </SearchProvider>
            </PlaceProvider>
         </div>
      );
   }
}

export default App;
