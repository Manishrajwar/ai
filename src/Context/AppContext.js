import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [showSidebar , setShowSidebar] = useState(false);

  
  const value = {
    showSidebar ,
     setShowSidebar
  
  };


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
