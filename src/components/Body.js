import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import { Link } from "react-router";

import Shimmer from "./Shimmer";

import restList from "../utils/mockData";

import useOnlineStatus from "../utils/useOnlineStatus";
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

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus){
    console.log("offline in body")
    return <h1>Offline</h1>
  }
    
    return listOfRestaurants.length===0?  <Shimmer/> : (<div className="body">
             
              <div className="flex ">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" placeholder="Search for Restaurants" value={searchText} 
                    onChange={(e)=>
                    setSearchText(e.target.value)
                    }/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer" onClick={()=>{
                        const filterdList =  listOfRestaurants.filter((restaurant)=>{
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        }
                        )

                        setFilteredList(filterdList);
                    }
                    }
                    >Search</button>
                </div>
                  <div className="m-4 p-4 flex items-center">
                      <button className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer" onClick={()=>{
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
              </div>
              <div className="flex flex-wrap">
                {
                    // filteredList.map((restaurant)=>{
                    //     return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    // })

                    filteredList.map((restaurant)=>(
                      <Link to={"/restaurent/"+restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/>
                      </Link>
                    ))
                }
                  
              </div>
            </div>)
            
}  

export default Body;