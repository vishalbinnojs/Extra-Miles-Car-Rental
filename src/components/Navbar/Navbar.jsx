import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import carLogo from "../../assets/images/nav-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const navLinkRef = useRef(null);
  // console.log(navLinkRef.current);

  const toggleMenu = (e) => {
    // console.log('Toggle clicked - before stopPropagation');
    e.stopPropagation();
    // console.log('Setting isOpen to:', !isOpen);
    setIsOpen(!isOpen);
  };
  // console.log(isOpen);

  const handleSearchClick = (event) => {
    event.stopPropagation();
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navLinkRef.current && !navLinkRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
   

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-inner">
          <div className="logo">
            <img src={carLogo} alt="brand-logo" />
          </div>

          <div className="hamburger-menu">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              id="menu-toggle"
              onClick={toggleMenu}
            />
          </div>
          <div ref={navLinkRef} className={`links ${isOpen ? "show" : ""}`}>
            <div className="close-icon">
              <FontAwesomeIcon
                className="X-mark"
                icon={faXmark}
                size="lg"
                onClick={toggleMenu}
              />
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "links-a active" : "links-a"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "links-a active" : "links-a"
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/privacy_policy"
              className={({ isActive }) =>
                isActive ? "links-a active" : "links-a"
              }
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "links-a active" : "links-a"
              }
            >
              Contact
            </NavLink>
            <div className="address-box">
              <h2>Contact Info</h2>
              <p>Chicago 12, Melborne City, USA</p>
              <ul>
                <li>+88 01682648101</li>
                <li>info@example.com</li>
              </ul>
            </div>
            <div className="social-links">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="brand-link"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" color="#fff" />
              </Link>
              <Link to="https://x.com/" target="_blank" className="brand-link">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="#fff" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="brand-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" />
              </Link>
              <Link
                to="https://www.pinterest.com/"
                target="_blank"
                className="brand-link"
              >
                <FontAwesomeIcon icon={faPinterestP} size="lg" color="#fff" />
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                className="brand-link"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" color="#fff" />
              </Link>
            </div>
          </div>
          <div className="search-box">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="glass-icon"
              size="xl"
              onClick={handleSearchClick}
            />
            <Link to="/faqs" className="faq-btn">fAQs</Link>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="modal-container"
          onClick={() => setOpenModal(!openModal)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="logo-box">
              <img src={carLogo} alt="brand-logo" />
              <div className="close-icon">
                <FontAwesomeIcon
                  className="X-mark"
                  icon={faXmark}
                  size="lg"
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </div>
            <div className="query-box">
              <input
                type="text"
                name=""
                id=""
                placeholder="Type Your Keyword"
                className="query-ip"
              />
              <FontAwesomeIcon
                className="arrow-icon"
                icon={faArrowRight}
                size="lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
