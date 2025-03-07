import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [buttonNameReact, setButtonNameReact] = useState("Login");
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