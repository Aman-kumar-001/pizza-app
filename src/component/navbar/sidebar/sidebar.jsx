import { AiOutlineClose } from "react-icons/ai";
import '../sidebar/sidebar.css';

const Sidebar = ({open , onclose}) => {
    if(!open) return null;
    return(
        <div className="sidebar">
        <div className="sidebarHead">
           
           <AiOutlineClose  onClick={onclose}/>
           <p>My Site</p>
        </div>
        <div className="sidecontent">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Balance</a></li>
               
            </ul>
        </div>
        </div>
    )
}
export default Sidebar;