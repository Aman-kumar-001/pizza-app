import "../hover-state/hover.css";
import ICE from "../../assests/ice cream.png";
import CHEESE from "../../assests/cheese pizza.png";
import Burger from "../../assests/burger.png";

function Hover() {
  return (
    <div className="Hover-box">
      <div className="text">
        <h3 className="H3">Fresh from pizzon </h3>
        <h1>OUR SPECIALITY</h1>
      </div>
      <div className="items">
        <div className="Hover1">
          <img src={ICE} className="imgtag" ></img>
          <h2>Desert</h2>
        </div>
        <div className="Hover2" >
          <img src={CHEESE} className="imgtag"></img>
          <h2>Cheese Pizza</h2>
        </div>
        <div className="Hover3" >
          <img src={Burger} className="imgtag" ></img>
          <h2>Burger</h2>
        </div>
      </div>
      <div className="but">
     <a href="#"> <button id="butt">View More</button></a>
      </div>
      
    </div>
  );
}

export default Hover;
