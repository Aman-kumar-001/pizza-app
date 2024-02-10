import defaults from "nodemon/lib/config/defaults";
import "../footer/footer.css";

function footer() {
  return (
    <div className="footer-box">
      <div className="first">
        <h2 id="footer-h2">Pizzon</h2>
        <p>
          20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria,
          United Kingdom
        </p>
        <p>PHONE – +91 123 456 789 0, +91 123 456 789 0</p>
        <p>EMAIL – Info@gmail.com</p>
      </div>
      <div className="second">
        <ul>
          <li> Mon – Tues : // 6.00 am – 10.00 pm</li>
          <li>Wednes – Thurs : // 6.00 am – 10.00 pm</li>
          <li> Launch : // Everyday</li>
          <li>Sunday : // Closed</li>
        </ul>
      </div>
      <div className="third">
        <p>USEFUL LINKS</p>
        <ul>
            <li>Privacy Policy</li>
            <li>Order Tracking</li>
            <li> Warranty and Services</li>
            <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default footer;

//OPENING HOURS
//
//
//
//
// 
// 
// 
//
// 
// Contact
// My account
