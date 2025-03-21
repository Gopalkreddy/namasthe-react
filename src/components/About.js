import UserClass from "./UserClass";
import User from "./User";

import { Component} from "react";

import UserContext from "../utils/userContext";

class About extends Component{

    constructor(props){
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount(){
       // console.log("Parent componentDidMount");
    }
    
    render(){
        console.log("Parent render");
        return(<div className="about">
            <h1>About Page</h1>
            <p>This is the about page class</p>
            <UserContext.Consumer>
                {
                    (data)=>{
                        console.log("loggedInUser",data);
                        return <h1>{data.loggedInUser}</h1>
                    }
                }

            </UserContext.Consumer>
            <UserClass name={"Gopal Reddy - class"} address={"Hyd"}/>
            <User name={"Gopal Reddy -function component"} address={"Hyd"}/>
          
        </div>)
    }
}


// const About=()=>{
//     return(<div className="about">
//         <h1>About Page</h1>
//         <p>This is the about page</p>
//         <UserClass name={"Gopal Reddy - class"} address={"Hyd"}/>
//         <User name={"Gopal Reddy -function component"} address={"Hyd"}/>
      
//     </div>)
// }
export default About;