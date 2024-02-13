import { useState } from "react";
import "../contact-us/contact.css";

function Contact() {

  const [form , setform] = useState({});

const  handleform = (e) => {
  setform({
    ...form,
    [e.target.name]: e.target.value
  })
}

const handlesubmit = async (e) =>{
  e.preventDefault();
const response = await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-type' : 'application/json'
    }
  })
  const data = await response.json();
console.log(data)
alert( "your booking has done");
}




  return (
  
    <div className="contactBox">
      <div className="contactleft">
       
        <h3 className="H3tag">Fresh From Pizzon</h3>
        <h1 className="H1tag">Book Online</h1>
        <p className="ptag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis
          id, dolor culpa beatae fugit fugiat facilis consequatur, mollitia
          doloribus itaque quas obcaecati nemo cum. Vel unde provident sint
          repudiandae.
        </p>

        <button className="number-button">Call:-790382829</button>
      </div>
      <div className="contactRight">
       
    
    <div className="input-box">
    <h3 className="h3tag-book">Book a Table</h3>
      <form onSubmit={handlesubmit}>
        <input type="text" name="username" placeholder="Enter the Name" onChange={handleform}></input>
        <input type="email" name="email" placeholder="email ID" onChange={handleform}></input>
        <input type="time" name="time" onChange={handleform}></input>
        <input type="date" name="date" onChange={handleform}></input>

        <button className="bookNow" type="submit">Book Now</button>
        </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
