import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
      dispatch(addItem(item));
    } 
  return (
   <div>
    
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-1  text-left flex">
            
                <div className="w-9/12">
                <div className="py-2">
                <span>{item.card.info.name}</span> 
                <span>- {item.card.info.price/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description} </p>
                </div>
                <div className="w-3/12">
                <div className="absolute">
                <button className="p-2 mx-2 bg-black text-white shadow-lg rounded-lg  " 
                onClick={()=>handleAddToCart(item)}
                >
                  Add+</button>
                </div>
               {item.card.info.imageId && <img src={CDN_URL+item.card.info.imageId} alt={item.card.info.name} className=" w-full rounded-lg"/>}
               
              </div>
            </div>
        ))}
    
    

   </div>
  );
}

export default ItemList;