import HeaderApp from "./header/HeaderApp";
import React, { useState } from "react";
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

function App() {
   return (
      <div className="App">
         <HeaderApp />
         <Navbar />
         <PlaceProvider>
            <Routes>
               <Route path="home" element={<Home />} />
               <Route path="explore" element={<ExploreApp />} />
               <Route path="mytrips" element={<Trips />} />
               <Route path="about" element={<About />} />
               <Route path="myprofile" element={<Profile />} />
            </Routes>
         </PlaceProvider>
      </div>
   );
}

export default App;

{
   /* <Login />
<HeaderApp />
<Home />
<SearchProvider>
   <ExploreApp />
   <SelectedSearch />
</SearchProvider>
<Navbar gobackpage={gobackpage} />
<Profile />
<About /> */
}

// const [page, setpage] = useState("");

// function gobackpage(p) {
//    setpage(p);
// }

// if (page === "home") {
//    return (
//       <div className="App">
//          <Home gobackpage={gobackpage} />
//       </div>
//    );
// } else if (page === "explore") {
//    return (
//       <div className="App">
//          <ExploreApp gobackpage={gobackpage} />
//       </div>
//    );
// } else if (page === "trips") {
