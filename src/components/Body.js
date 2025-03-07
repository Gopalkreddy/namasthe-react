import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

import restList from "../utils/mockData";
const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([])

    useEffect(()=>{
      fetchData()
    }
    ,[]);

    const fetchData= async()=>{ 
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.492117&lng=78.397275&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const jsonData = await data.json();
       console.log(jsonData);
       //optional chainimg
       setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //condintional rendering
  //  if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  //  }

    
    return listOfRestaurants.length===0?  <Shimmer/> : (<div className="body">
              <div className="search">Search</div>
              <div className="filter">
                <button className="filter-button" onClick={()=>{
                  const filterdList =  listOfRestaurants.filter((restaurant)=>{
                        return restaurant.info.avgRating>=4.3;
                    }
                    )

                    setListOfRestaurants(filterdList);
                }}
                >
                    
                    Top Ratted Restaurants
                
                </button>
              </div>
              <div className="restaurant-container">
                {
                    listOfRestaurants.map((restaurant)=>{
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
                  
              </div>
            </div>)
            
}  

export default Body;