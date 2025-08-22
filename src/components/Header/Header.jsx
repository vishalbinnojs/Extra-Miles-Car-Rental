import "./Header.css";
import {Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-info">
          <FontAwesomeIcon icon={faClock} style={{ marginRight: "10px" }} />
          <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
        </div>
        <div className="social-links">
          <strong>On Social:</strong>
          <Link to="https://www.facebook.com/" >
          <FontAwesomeIcon className="social-icon" icon={faFacebookF} spin />
          </Link>
          <Link to="https://www.X.com/"><FontAwesomeIcon className="social-icon" icon={faTwitter}  spin/></Link>
         <Link to="https://www.linkedin.com/"> <FontAwesomeIcon className="social-icon" icon={faLinkedinIn}  spin/></Link>
        </div>
      </div>
     
    </>
  );
};

export default Header;
