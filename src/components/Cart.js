import { use } from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const store = useSelector((store)=>{
        return store;
    }
    );

  //  const cartItems = store.cart1.items;

    const cartItems = useSelector((store)=>{
        return store.cart1.items;
    }
    );

const dispatch = useDispatch();

    const handleDispatch = () => {
      dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4 ">
        <h1 className="text-xl font-bold"> Cart</h1>   
        <h2 className="text-xl font-bold"> Total Items: {cartItems.length}</h2>
        <button className="bg-red-100 p-2 m-2 rounded-lg cursor-pointer" 
        onClick={handleDispatch}
        >Clear Cart</button>
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;