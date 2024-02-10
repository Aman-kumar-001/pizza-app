import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import "../cheffs-section/cheffs.css";
function Employes() {
  const sliderItems = [
    {
      key:"1",
      img: "https://i.imgur.com/4xb0tQT.jpg"
    },
    {
      key:'2',
      img: "https://i.imgur.com/f0yOd9g.jpg"
    },
    {
      key:'3',
      img: "https://i.imgur.com/AF0T9P7.jpg"
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
    <div id="slider">
        <h2 id="h2">Meet our Expert</h2>
        <h2 id="h1">Our Best Chefs</h2>
      <div id ="container">
        <div  id="arrow1" onClick={prevslider}>
          <FaArrowLeft id="Arr" />
        </div>
        <div
           id="wrappers"
          style={{ transform: `translateX(-${slider * 100}%)` }}
        >
          {sliderItems.map((item) => (
            <div  id="slide">
              <div id="img-container">
              <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div  id="arrow2" onClick={nextslider}>
          <FaArrowRight id="Arr" />
        </div>
      </div>
    </div>
  );
}

export default Employes;
