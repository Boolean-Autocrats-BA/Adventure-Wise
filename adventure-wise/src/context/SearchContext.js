import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
   const [selSearch, setselSearch] = useState({});
   return <SearchContext.Provider value={{ selSearch, setselSearch }}>{children}</SearchContext.Provider>;
};

export default SearchContext;
