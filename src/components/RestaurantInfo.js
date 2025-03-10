import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

import useRestaurentMenu from "../utils/useRestaurentMenu";




const RestaurantInfo =()=>{
    const {resId}=useParams();
   // console.log(resId);

   // const [restInfo,setRestinfo]=useState(null);

    const resInfo = useRestaurentMenu(resId);


    
     
     if(!resInfo){
         return <Shimmer></Shimmer>
     }

     const {name,cuisines,costForTwoMessage,menu}=resInfo.cards[2].card.card.info;
     //console.log(restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
     const{itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
   

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join("-")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
               {itemCards.map((item)=>{
                   return <li key={item.card.info.id}>{item.card.info.name}</li>})}
            </ul>
        </div>
    )
}

export default RestaurantInfo;