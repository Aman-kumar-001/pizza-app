import { AiOutlineClose } from "react-icons/ai";
import '../sidebar/sidebar.css';
// import Login from "../../login-page/login";

const Sidebar = ({open , onclose}) => {
    if(!open) return null;
    return(
        <div className="sidebar">
        <div className="sidebarHead">
           
           <AiOutlineClose  onClick={onclose}/>
          
        </div>
        <div className="sidecontent">
            <ul>
                <li><a href="">login</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Contact</a></li>
                {/* <li><a href="#"></a></li> */}
                
                 <button id="sidebar-button">log out</button>
            </ul> 
        </div>
        </div>
    )
}
export default Sidebar;