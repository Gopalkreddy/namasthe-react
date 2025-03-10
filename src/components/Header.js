import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router";
const Header=()=>{
    const [buttonNameReact, setButtonNameReact] = useState("Login");
    console.log("Header called")


    useEffect(()=>{
        console.log("useEffect called only in first render")
    }
    ,[]);
// below useEffect called only when buttonNameReact changes
    // useEffect(()=>{
    //     console.log("useEffect called")
    // }
    // ,[buttonNameReact]);

// below useEffect called every time component renders
    useEffect(()=>{
        console.log("useEffect called")
    }
    );

    //custom hook
     const onlineStatus = useOnlineStatus();
     console.log("Online status",onlineStatus);


    return(<div className="flex justify-between bg-pink-50 shadow-lg ">
                <div className="logo-containter">
                    <img className="w-40" src={LOGO_URL} alt="logo"/>
                </div>

                <div className="flex items-center">
                    <ul className="flex p-4 m-4">  
                        <li className="px-4">online Status {onlineStatus?"✅":"❌"}</li>  
                    <li className="px-4">
                     <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                       {/* <a href="/contact" >Contact</a> if we use anchor tag it will reload the page */}
                    <Link to="/contact">Contact</Link>
                     </li>   
                     <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>    
                    <button className="login" onClick={()=>{
                        if(buttonNameReact==="Login"){
                            setButtonNameReact("Logout")
                        }else{
                            setButtonNameReact("Login")
                        }
                    }}>{buttonNameReact}</button>
                </ul>
                </div>
            </div>)
}

export default Header;