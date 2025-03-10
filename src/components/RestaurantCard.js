import { CDN_URL } from "../utils/constants";   


const restStyle={
    backgroundColor: "#f0f0f0",
}
const RestaurantCard=(props)=>{
    const {resData}=props;
    const{name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData.info;
   // console.log(props);
    return( 
                <div className="m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-200 " > 
                   <img className="rounded-2xl" src={ CDN_URL +cloudinaryImageId} alt="restaurant"/>
                    <h3 className="font-bold py-4 text-xl">{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.slaString}</h4>
                   
                </div>
           )
}   

export default RestaurantCard;