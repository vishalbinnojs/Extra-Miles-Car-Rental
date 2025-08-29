import React from "react";
import "./CarCard.css";
import { FaStar, FaDoorOpen, FaUser, FaSuitcase } from "react-icons/fa";



const CarCard = ({ image, title, rating, description, doors, suitcase, passengers }) => {
  return (
    <>
     <div className="featured-car-card">
       <div className="img-container">
        <img src={image} alt={title} className="featured-car-image" />

       </div>


      <div className="featured-car-content">
       <div className="featured-title-wrapper">
         <h3 className="featured-car-title">{title}</h3>
        <span className="featured-car-rating"><FaStar color="var(--primaryColor)"/> <em>{rating}</em></span>
       </div>
        <p className="featured-car-description">{description}</p>

        <hr />

        <div className="featured-car-details">
          <p><FaDoorOpen size={25} color="var(--primaryColor)"/> Doors: {doors}</p>
          <p><FaSuitcase size={20} color="var(--primaryColor)"/> Suitcase: {suitcase}</p>
          <p><FaUser size={20} color="var(--primaryColor)"/>Passengers: {passengers}</p>
        </div>
      </div>
    </div> 
    </>
  );
};

export default CarCard;
