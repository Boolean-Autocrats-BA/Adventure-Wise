import HeaderApp from "./header/HeaderApp";
import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Home from "./home/Home";
import Explore from "./explore/Explore";
import Trips from "./my-trips/Trips";
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
            <Explore gobackpage={gobackpage} />
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
         <Home />
         <HeaderApp />
         <Navbar gobackpage={gobackpage} />
         <Profile />
      </div>
   );
}

export default App;
