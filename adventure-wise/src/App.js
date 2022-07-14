import HeaderApp from "./header/HeaderApp";
import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Home from "./home/Home";
import ExploreApp from "./explore/ExploreApp";
import SelectedSearch from "./explore/components/SelectedSearch";
import { SearchProvider } from "./context/SearchContext";
import Trips from "./my-trips/Trips";
import About from "./about/About";
import Profile from "./profile/Profile";

function App() {
   const [page, setpage] = useState("");

   function gobackpage(p) {
      setpage(p);
   }

   if (page === "home") {
      return (
         <div className="App">
            <Home gobackpage={gobackpage} />
         </div>
      );
   } else if (page === "explore") {
      return (
         <div className="App">
            <ExploreApp gobackpage={gobackpage} />
         </div>
      );
   } else if (page === "trips") {
      return (
         <div className="App">
            <Trips gobackpage={gobackpage} />
         </div>
      );
   }

   return (
      <div className="App">
         <HeaderApp />
         <Home />
         <SearchProvider>
            <ExploreApp />
            <SelectedSearch />
         </SearchProvider>
         <Navbar gobackpage={gobackpage} />
         <Profile />
         <About />
      </div>
   );
}

export default App;
