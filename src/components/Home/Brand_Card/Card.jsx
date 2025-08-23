import React from "react";
import "./Card.css";

const Card = ({ brands,carTypes }) => {
  return (
    <>
      {brands && brands.map((brand, index) => (
        <div key={index} className="home-brand-card">
          <img src={brand.logo} alt={brand.name} className="logo-img car-img" />
          <p>{brand.name}</p>
        </div>
      ))}
      {carTypes && carTypes.map((item, index) => (
        <div key={index} className="home-brand-card">
          <img src={item.img} alt={item.carType} className="logo-img " />
          <p>{item.carType}</p>
        </div>
      ))}
    </>
  );
};
export default Card;
