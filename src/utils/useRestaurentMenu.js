
import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurentMenu = (resId) => {  

    const [restInfo,setRestinfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
     },[]);
     
     const fetchMenu = async()=>{
         const res = await fetch(MENU_API_URL + resId);
         const json = await res.json();
         //console.log(json);
            setRestinfo(json.data);
     }
     
     return restInfo;
}
export default useRestaurentMenu;