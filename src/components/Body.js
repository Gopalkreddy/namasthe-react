import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import restList from "../utils/mockData";
const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState(restList)
    return(<div className="body">
              <div className="search">Search</div>
              <div className="filter">
                <button className="filter-button" onClick={()=>{
                  const filterdList =  listOfRestaurants.filter((restaurant)=>{
                        return restaurant.info.avgRating>=4;
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