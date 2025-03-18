import { CDN_URL } from "../utils/constants";   

import { useContext } from "react";

import UserContext from "../utils/userContext";


const restStyle={
    backgroundColor: "#f0f0f0",
}
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {loggedInUser}=useContext(UserContext);
    const{name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData.info;
   //console.log(props);
    return( 
                <div className="m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200 " > 
                   <img className="rounded-2xl" src={ CDN_URL +cloudinaryImageId} alt="restaurant"/>
                    <h3 className="font-bold py-4 text-xl">{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.slaString}</h4>
                    <h4>{loggedInUser}</h4>
                   
                </div>
           )
}   

// Higher order component

//input : restaurentCard ==> output : restaurentCardWithPromoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
       
      
            return(
                <div>
                    <label className="absolute bg-black text-white m-2 p-2 rounded-2xl">Promoted</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        
        
    }
}

export default RestaurantCard;