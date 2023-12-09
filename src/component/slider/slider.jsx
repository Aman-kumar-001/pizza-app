import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import "../slider/slider.css";
import IMG1 from "../../assests/pngwing.com1.png";
import IMG2 from "../../assests/pngwing.com2.png";
import IMG3 from "../../assests/pngwing.com3.png";
function Slider(){

    const[ slider , setSlider] = useState(0);

    const prevslider= () => {
        setSlider(slider === 0 ? 2 : (prev) => prev - 1)
        console.log("prev");
    }

    const nextslider = () => {
        setSlider(slider === 2 ? 0 : (prev) => prev + 1)
        console.log("next");
    }
     
    return (
        <div className="slider">
            <div className="container">
                <div className="arrow1" onClick={prevslider}>
                    <FaArrowLeft  className="Arr"/>
               </div> 
               <div className="image" >
               <img src={IMG1} alt="" />
               {/* <img src={IMG2} alt="" /> */}
               {/* <img src={IMG3} alt="" /> */}
                </div> 
               <div className="arrow2" onClick={nextslider}>
                 <FaArrowRight className="Arr"/>
                 </div>
            </div>
        </div>
    );
}

export default Slider;

