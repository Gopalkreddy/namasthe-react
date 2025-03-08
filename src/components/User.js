import {useState} from 'react';


const User = (props)=>{
    const {name,address}=props;

    const [count,setCount]=useState(0);

   return( <div className="user-card">
         <button onClick={()=>{
           setCount(count+1)
         }
         }>Increment</button>
         <h1>Count : {count}</h1>
        
          <h1>Name : {name}</h1>
          <p>Address: {address}</p>
        
        </div>
   )
}

export default User;