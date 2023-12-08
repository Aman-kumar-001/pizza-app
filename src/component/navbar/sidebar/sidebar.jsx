import { AiOutlineClose } from "react-icons/ai";
import '../sidebar/sidebar.css';

const Sidebar = ({open , onclose}) => {
    if(!open) return null;
    return(
        <div className="sidebar">
        <div className="sidebarHead">
            <p>My Site</p>
           <AiOutlineClose  onClick={onclose}/>
        </div>
        </div>
    )
}
export default Sidebar;