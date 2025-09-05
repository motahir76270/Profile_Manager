import { createContext , useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
     const [profileData , setProfileData] = useState([]);
     const [newProfile , setNewProfile] = useState([]);
     const [searchProject,setSearchProject  ] = useState([]);
     const [selectedProfile , setSelectedProfile] = useState(() => {
   const stored = localStorage.getItem('selectedProfile');
    return stored ? JSON.parse(stored) : [];
   });

  useEffect( () => {
  localStorage.setItem('selectedProfile', JSON.stringify(selectedProfile));
  },[selectedProfile])
   
  return (
     <UserContext.Provider value={{profileData, setProfileData,newProfile,setNewProfile,selectedProfile,setSelectedProfile ,searchProject,setSearchProject  }}>
        {children}
     </UserContext.Provider>
  )
}

export default UserProvider
