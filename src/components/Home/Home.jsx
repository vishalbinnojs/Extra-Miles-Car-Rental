import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
//swiper Effect css
import "swiper/css";
import "swiper/css/effect-fade";


import car1 from "../../assets/images/home-hero-car1.png";
import car2 from "../../assets/images/home-hero-car2.png";
import car3 from "../../assets/images/home-hero-car3.png";

import Audi from "../../assets/images/home-audi.png";
import Bmw from "../../assets/images/home-bmw.png";
import Mercedez from "../../assets/images/home-mercedes-benz.png";
import Porsche from "../../assets/images/home-porsche.png";
import Tesla from "../../assets/images/home-tesla-motors.png";
import Volkswagen from "../../assets/images/home-volkswagen.png";

import Truck from "../../assets/images/home-truck.png";
import LSedan from "../../assets/images/home-luxury-sedan.png";
import Sedan from "../../assets/images/home-sedan.png";
import SCar from "../../assets/images/home-sports-car.png";
import Hatchback from "../../assets/images/home-hatchback.png";
import SUV from "../../assets/images/home-suv.png";

import Card from "./Brand_Card/Card";
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
  //Brands logo data
  const brands = [
    { name: "Audi", logo: `${Audi}` },
    { name: "BMW", logo: `${Bmw}`  },
    { name: "Mercedes Benz", logo: `${Mercedez}` },
    { name: "Tesla Motors",logo: `${Porsche}`  },
    { name: "Volkswagen", logo: `${Tesla}`  },
    { name: "Porsche", logo: `${Volkswagen}`  },
  ];

  const carTypes = [
    {img:`${Truck}`,
      carType:"Truck"
    },
    {img:`${LSedan}`,
      carType:"Luxury Sedan"
    },
    {img:`${Sedan}`,
      carType:"Sedan"
    },
    {img:`${SCar}`,
      carType:"Sports Car"
    },
    {img:`${Hatchback}`,
      carType:"Hatchback"
    },
    {img:`${SUV}`,
      carType:"SUV"
    },
  ]
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
       
{/* Brand logo Section */}
      <section className="home-brands-section">
      
      <div className="home-brands-header">
        <div>
          <h4 className="home-brands-tag">BRANDS</h4>
          <h2 className="home-brands-title">Explore Premium Car Brand</h2>
        </div>
         <button className="home-brands-btn">Show all Brands</button>
      </div>
    <div className="home-brands-grid">
       <Card brands={brands}/>
      </div>
  </section>

  {/* Car Types Section */}
  <section className="home-brands-section background">
      
      <div className="home-brands-header">
        <div style={{width:"100%"}}>
          <h4 className="home-brands-tag background-white">CAR TYPES</h4>
          <h2 className="home-brands-title">Explore Car Types</h2>
        </div>
      </div>
    <div className="home-brands-grid">
       <Card carTypes={carTypes}/>
      </div>
  </section>
    </>
  );
};

export default Home;
