import React from "react"; //this is the default import it will get react from node_modules
import ReactDOM from "react-dom"; //this is the default import it will get react-dom from node_modules
import ReactDOM from "react-dom/client";   
import Header from "./components/Header";

import Body from "./components/Body";







const AppLayout=()=>{
    return(<div className="app">   
    <Header/>
    <Body/>
   
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
    