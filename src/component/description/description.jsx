import "../description/description.css";
import { GiFullPizza } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa6";
import { MdOutlineFoodBank } from "react-icons/md";

function Description() {
  return (
    <div className="des-box">
      <div className="first">
        <MdOutlineFoodBank className="icon" />
        <h2>ORDER YOUR FOOD</h2>
        <p>
          Satisfy your cravings with just a few clicks! Order your favorite
          cuisine from a diverse menu, customized to your taste, and enjoy swift
          delivery or convenient pickup options. Indulge in a delightful dining
          experience, right at your fingertips.
        </p>
      </div>
      <div className="Second">
        <FaTruckMoving className="icon" />
        <h2>DELIVERY OR PICK UP</h2>
        <p>
          Choose your preferred way to enjoy your meal! Opt for hassle-free
          delivery to your doorstep or quick and convenient pick-up, ensuring
          your culinary cravings are satisfied just the way you like.
        </p>
      </div>
      <div className="Third">
        <GiFullPizza className="icon" />
        <h2> DELICIOUS RECIPES </h2>
        <p>
         Discover a world of flavors with our delicious
          recipes! From gourmet delights to quick and easy meals, explore a
          diverse range of culinary creations that will tantalize your taste
          buds and inspire your inner chef.
        </p>
      </div>
    </div>
  );
}

export default Description;
