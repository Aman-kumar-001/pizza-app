import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import "../slider/slider.css";
function Slider() {
  const sliderItems = [
    {
      key:"1",
      img: "https://i.imgur.com/XWWRMjY.png"
    },
    {
      key:'2',
      img: "https://i.imgur.com/UYOyrA3.png"
    },
    {
      key:'3',
      img: "https://i.imgur.com/hN3q1kn.png"
    }
  ];

  const [slider, setSlider] = useState(0);
  const slideWidth = 100 / sliderItems.length;


  const prevslider = () => {
    setSlider(slider === 0 ? sliderItems.length-1 : (prev) => prev - 1);
    console.log("prev");
  };

  const nextslider = () => {
    setSlider(slider === sliderItems.length-1 ? 0 : (prev) => prev + 1);
    console.log("next");
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="arrow1" onClick={prevslider}>
          <FaArrowLeft className="Arr" />
        </div>
        <div
          className="wrappers"
          style={{ transform: `translateX(-${slider * 100}%)` }}
        >
          {sliderItems.map((item) => (
            <div className="slide">
              <div className="img-container">
              <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="arrow2" onClick={nextslider}>
          <FaArrowRight className="Arr" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
