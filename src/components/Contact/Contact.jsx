import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import "./Contact.css";
const Contact = () => {
   const contacts = [
    {
      icon: <MapPin size={28} color="#fff" />,
      title: "Our Location",
      details: ["1901 Thornridge Cir. Shiloh, Hawaii 81063"],
    },
    {
      icon: <Mail size={28} color="#fff" />,
      title: "Email Address",
      details: ["contact@extramiles.com", "support@extramiles.com"],
    },
    {
      icon: <Phone size={28} color="#fff" />,
      title: "Phone Number",
      details: ["Emergency Cases", "+(2003) 000-0001 (24/7)"],
    },
  ];

    const hours = [
    { day: "Monday - Friday", time: "8:00 am – 6:00 pm" },
    { day: "Saturday", time: "9:00 am – 2:00 pm" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <>
{/* **************** Contact Hero ************ */}
    <section className="contact-hero">
      <div className="text-wrapper">

      <h1>POST YOUR QUERY</h1>
      <form className="comment-form">
      <div className="form-group">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your email" required />
      </div>

      <textarea placeholder="Type message" required></textarea>

      <div className="checkbox">
        <input type="checkbox" id="saveInfo" />
        <label htmlFor="saveInfo">
          Save my name, email, and website in this browser for future use.
        </label>
      </div>

      <button className="post-btn"type="submit">Post Comment</button>
    </form>
      </div>
    </section>
{/* *****************  Contact Card Section ***************** */}
     <section className="contact-section">
      <div className="section-wrapper">

      <h4 className="section-subtitle">Contact Details</h4>
      <h2 className="section-title">Contact Informations</h2>

      <div className="contact-grid">
        {contacts.map((item, index) => (
          <div className="contact-card" key={index}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            {item.details.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      </div>
    </section>

    {/* Business Hours Section */}
 
    <section className="section-hours">
      <div className="section-heading">
      <h4>AVAILABILITY</h4>

      </div>
      <div className="business-hours">
      <h2 className="bh-title">Business Hours</h2>
      <ul className="bh-list">
        {hours.map((item, index) => (
          <li key={index} className="bh-item">
            <span className="bh-day">{item.day}</span>
            <span className="bh-time">{item.time}</span>
          </li>
        ))}
      </ul>
        </div>
    </section>

{/*************  Map section ******************/}
    <section className="map-container">
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29055.482608652957!2d-73.84154539915795!3d40.69994131433247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e72880ceaf3%3A0x5f9bdf282a54d261!2sThe%20Shops%20at%20Atlas%20Park!5e0!3m2!1sen!2sin!4v1755676361701!5m2!1sen!2sin" width="100%" height="100%" style={{border:"none",borderRadius:"8px"}} loading="lazy" ></iframe>
    </section>
    </>
  )
};

export default Contact;
