
import React from "react";

class UserClass1 extends React.Component {
constructor(props){
  super(props);

  this.state={
    name:props.name,
    address:props.address,
    age:20,
    count:0
  }

  console.log("Child constructor");
 
}

componentDidMount(){    
  console.log("Child componentDidMount");
  // const data= await fetch("https://jsonplaceholder.typicode.com/todos/1")
  // const jsonData=await data.json();
  // console.log(jsonData);
  // this.setState({name:jsonData.title});
 //using this method we can call api and update the state
 // this.setState({name:"Rajesh"});




//  this.timer = setInterval(()=>{
//  console.log("Interval called");
//  },1000) 


}

componentWillUnmount(){   
  console.log("Child componentWillUnmount");
  clearInterval(this.timer);
}



    render() {
      console.log("Child render");
     // const {name,address}=this.props;
      return (
        <div className="user-card">
          <button onClick={()=>{
            //never change the state directly
            //this.state.count=this.state.count+1;
            this.setState({count:this.state.count+1})
          }
          }>Increment</button>
          <h1>Count : {this.state.count}</  h1>
          <h1>Name : {this.state.name}</h1>
          <p>Address: {this.state.address}</p>
          <p>Age: {this.state.age}</p>
        </div>
      );
    }
  } 
    export default  UserClass1;

  
