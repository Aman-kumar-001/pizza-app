import "../contact-us/contact.css";

function contact() {
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
      
        <input type="text" placeholder="Enter the Name"></input>
        <input type="email" placeholder="email ID"></input>
        <input type="date" />

        <button className="bookNow">Book Now</button>


        </div>
      </div>
    </div>
  );
}

export default contact;
