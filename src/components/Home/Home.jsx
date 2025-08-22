import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
//swiper Effect css
import "swiper/css";
import "swiper/css/effect-fade";


import "./Home.css";
import car1 from "../../assets/images/home-hero-car1.png";
import car2 from "../../assets/images/home-hero-car2.png";
import car3 from "../../assets/images/home-hero-car3.png";
const Home = () => {
  
  const carouselItems = [
    {
      tag: "CAR RENTAL",
      title: `Find Affrdable Dream\nCars\n For Rental`,
      text: `Fulfill your automotive fantasies without breaking the bank.\n&\nCheck our affordable car rentals for an opulent yet economical ride.`,
      img: `${car1}`,
    },
    {
      tag: "CAR RENTAL",
      title: `Find Affrdable Dream\nCars\n For Rental`,
      text: `Fulfill your automotive fantasies without breaking the bank.\n&\nCheck our affordable car rentals for an opulent yet economical ride.`,
      img: `${car2}`,
    },
    {
      tag: "CAR RENTAL",
      title: `Find Affrdable Dream\nCars\n For Rental`,
      text: `Fulfill your automotive fantasies without breaking the bank.\n&\nCheck our affordable car rentals for an opulent yet economical ride.`,
      img: `${car3}`,
    },
  ];

  return (
    <>
      <div className="home-hero">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            
          }}
          speed={2000}
          loop={true}
          className="home-swiper"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              
                <div className="slide-container">
                  <div className="text-container ">
                    <h5>{item.tag}</h5>
                    <h1 style={{ whiteSpace: "pre-line" }}>{item.title}</h1>
                    <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                    <button className="in-touch-btn">Get In Touch</button>
                  </div>
                  <div className="image-container">
                    <div className="white-shadow">
                      <img src={item.img} alt="car-brand" />
                        
                    </div>
                  </div>
                </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       
    </>
  );
};

export default Home;
