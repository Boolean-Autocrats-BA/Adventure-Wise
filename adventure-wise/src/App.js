import ExploreApp from "./explore/ExploreApp";
import SelectedSearch from "./explore/components/SelectedSearch";
import { SearchProvider } from "./context/SearchContext";
import React from "react";

function App() {
   return (
<SearchProvider>
<div className="App">
<ExploreApp />
<SelectedSearch />
</div>
</SearchProvider>
   );
}

export default App;
