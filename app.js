import React from "react"; //this is the default import it will get react from node_modules
import ReactDOM from "react-dom"; //this is the default import it will get react-dom from node_modules
import ReactDOM from "react-dom/client";    

const heading= React.createElement("h1",{id:"heading"},"React element1")
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)
    console.log(heading)
    


    //React element
    const jsxHeading =<h1 tabIndex="5">Heading using jsx</h1>
    
   
     //React component
    //Class based component -OLD
    //Functiobal component -NEW
    const Title =()=>( <h1 className="Head">Namasthe react using jsx</h1>)

    const HeadingComponet = ()=> (
        <div id ="containrer">
         <Title/>
         {heading}
         {Title()}
         <Title></Title>
         {jsxHeading}
         <h1> This is funcational component</h1>
        </div>
    )

    root.render(<HeadingComponet/>)
    