import { AiOutlineClose } from "react-icons/ai";
import '../sidebar/sidebar.css';

const Sidebar = ({open , onclose}) => {
    if(!open) return null;
    return(
        <div className="sidebar">
        <div className="sidebarHead">
           
           <AiOutlineClose  onClick={onclose}/>
          
        </div>
        <div className="sidecontent">
            <ul>
                <li><a href="#">SignIN/LogIN</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Contact</a></li>
                {/* <li><a href="#"></a></li> */}
                
                <button>log out</button>
            </ul>
        </div>
        </div>
    )
}
export default Sidebar;