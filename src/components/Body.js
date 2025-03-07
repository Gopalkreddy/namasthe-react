import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import Shimmer from "./Shimmer";

import restList from "../utils/mockData";
const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const [searchText,setSearchText]=useState("");

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
       setFilteredList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //condintional rendering
  //  if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  //  }

    
    return listOfRestaurants.length===0?  <Shimmer/> : (<div className="body">
             
              <div className="filter">
                <div className="search">
              <input type="text" placeholder="Search for Restaurants" className="search-box" value={searchText} 
              onChange={(e)=>
              setSearchText(e.target.value)
              }/>
              <button className="search-button" onClick={()=>{
                  const filterdList =  listOfRestaurants.filter((restaurant)=>{
                      return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                  }
                  )

                  setFilteredList(filterdList);
              }
              }
              >Search</button>
              </div>

                <button className="filter-button" onClick={()=>{
                  const filterdList =  listOfRestaurants.filter((restaurant)=>{
                        return restaurant.info.avgRating>=4.3;
                    }
                    )

                    setFilteredList(filterdList);
                }}
                >
                    
                    Top Ratted Restaurants
                
                </button>
              </div>
              <div className="restaurant-container">
                {
                    filteredList.map((restaurant)=>{
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
                  
              </div>
            </div>)
            
}  

export default Body;