import React from "react";
import "./Card.css";

const Card = ({ brands}) => {
  return (
    <>
      {brands.map((brand, index) => (
        <div key={index} className="home-brand-card">
          <img src={brand.img} alt={brand.carType} className="logo-img car-img" />
          <p>{brand.carType}</p>
        </div>
      ))}
     
    </>
  );
};
export default Card;
