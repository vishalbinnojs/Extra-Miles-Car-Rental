import {Link} from 'react-router-dom';
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import footerLogo from "../../assets/images/footer-logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
        <img src={footerLogo} alt="brand-logo" />
          <div className="footer-address">
            <p>0001 Phase, Hill Station Road, Mountain Hill, UK</p>
            <p>Email: support@extramiles.com</p>
            <p>Phone: 0001 0002 0003</p>
          </div>
        </div>

        <nav className="footer-resources">
          <h3 className="footer-section-title">Resources</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>

          <div className="footer-resources">
            <h3 className="footer-section-title">Community</h3>
            <ul className="footer-links">
              <li><Link to="#">Newsletter</Link></li>
              <li><Link to="#">Reviews</Link></li>
              <li><Link to="#">Testimonials</Link></li>
              <li><Link to="#">Social Group</Link></li>
              <li><Link to="#">Helpdesk</Link></li>
            </ul>
          </div>

        <div className="footer-social">
          <h3 className="footer-section-title">Follow Us On:</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://pinterest.com" aria-label="Pinterest"><FaPinterest /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Extra Miles, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;