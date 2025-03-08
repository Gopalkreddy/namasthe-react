import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>   
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