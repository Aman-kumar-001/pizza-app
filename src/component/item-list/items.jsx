import "../item-list/item.css";
import IMG from "../../assests/pngwing.com1.png";
import IMG1 from "../../assests/pngwing.com2.png";
import IMG2 from "../../assests/pngwing.com3.png";
import { useEffect,useState } from "react";

function Item() {


  const [users, setUsers]  = useState([]);
      
  const getdata = async () => {
       const response = await fetch('#');//https://jsonplaceholder.typicode.com/albumIs/1/photos
       setUsers( await response.json());
  }


   useEffect(() =>{
       getdata();
   },[]);
  return (
    <div className="item-box">
      <h3 className="H3">Fresh From Pizzon</h3>
      <h1 className="H1">Our Special Menu</h1>


      {
        users.map((curElem) => {
          return(
            <div>
                    <div className="item-container">
        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>
        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>
        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>
        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>

        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>
        <div className="item">
          <img src={curElem.url} className="item-list"></img>
          <h6>MEAT SALAD</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, minus
            ducimus voluptas ad id laborum.
          </p>
        </div>
      </div>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default Item;
