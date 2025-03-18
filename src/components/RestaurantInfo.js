import { useState,useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

import useRestaurentMenu from "../utils/useRestaurentMenu";

import RestaurantCategory from "./RestaurentCategory";




const RestaurantInfo =()=>{
    const {resId}=useParams();
   // console.log(resId);

   // const [restInfo,setRestinfo]=useState(null);

    const resInfo = useRestaurentMenu(resId);

    const [showIndex,setShowIndex]=useState(0);


    
     
     if(!resInfo){
         return <Shimmer></Shimmer>
     }

     const {name,cuisines,costForTwoMessage,menu}=resInfo.cards[2].card.card.info;
     //console.log(restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
     const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
   
     console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4]);

     const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
     console.log("categories", categories);
    return(
        <div className="text-center " >
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage} </p>
            <div>
            {categories.map((category,index) => (
                //controlled component
            <RestaurantCategory key={category?.card?.card?.title} data={category.card.card} showItems={index==showIndex ? true : false} setShowIndex ={()=>setShowIndex(index)}/>
          ))}
          </div>
        </div>
    )
}

export default RestaurantInfo;