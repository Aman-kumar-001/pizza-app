import React, {useState} from "react";
import "../navbar/navbar.css";
import { IoMenu } from "react-icons/io5";
import  Sidebar from "../navbar/sidebar/sidebar";

function Navbar(){
    const [ count, setCount ] = useState(false);
    console.log(count);
return(
     
    <div className="header">
        <div className="leftNav">PizzaOn</div>
        <div className="rightNav"><IoMenu className="svg" onClick={() =>setCount((prev)=> !prev) }/>
        <Sidebar open={count} onclose={() => setCount(false)}/>
        </div> 
       
    </div>
    
)
}
export default Navbar;