import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

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


    return(<div className="header">
                <div className="logo-containter">
                    <img className="logo" src={LOGO_URL} alt="logo"/>
                </div>

                <div className="nav-items">
                    <ul>    
                    <li>
                     <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                       {/* <a href="/contact" >Contact</a> if we use anchor tag it will reload the page */}
                    <Link to="/contact">Contact</Link>
                     </li>   
                    <li>Cart</li>    
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