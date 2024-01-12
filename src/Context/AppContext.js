import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  const [showSidebar , setShowSidebar] = useState(false);
  
 const [showschedulePostPopup , setShowSchedulePopup] = useState(false);
  
  const value = {
    showSidebar ,
     setShowSidebar , 
     showschedulePostPopup , 
     setShowSchedulePopup
  
  };


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
