import "./Home.css";
import { Link } from "react-router-dom";
import { FaCar, FaPhone } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
//swiper Effect css
import "swiper/css/free-mode";
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
import CarCard from "./Car_Card/CarCard";

import bgTwo from "../../assets/images/video-bg-2.jpg";
import Video from "../About_Us/Video_Section/Video";

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
    { carType: "Audi", img: `${Audi}` },
    { carType: "BMW", img: `${Bmw}` },
    { carType: "Mercedes Benz", img: `${Mercedez}` },
    { carType: "Tesla Motors", img: `${Porsche}` },
    { carType: "Volkswagen", img: `${Tesla}` },
    { carType: "Porsche", img: `${Volkswagen}` },
  ];
  // Brand car Type Data
  const carTypes = [
    { img: `${Truck}`, carType: "Truck" },
    { img: `${LSedan}`, carType: "Luxury Sedan" },
    { img: `${Sedan}`, carType: "Sedan" },
    { img: `${SCar}`, carType: "Sports Car" },
    { img: `${Hatchback}`, carType: "Hatchback" },
    { img: `${SUV}`, carType: "SUV" },
  ];
  // Swiper car Data
  const swiperCars = [
    { img: `/assets/images/swiper-car1.png` },
    { img: "/assets/images/swiper-car2.png" },
    { img: "/assets/images/swiper-car3.png" },
    { img: "/assets/images/swiper-car4.png" },
    { img: "/assets/images/swiper-car5.png" },
    { img: `/assets/images/swiper-car1.png` },
    { img: "/assets/images/swiper-car2.png" },
    { img: "/assets/images/swiper-car3.png" },
    { img: "/assets/images/swiper-car4.png" },
    { img: "/assets/images/swiper-car5.png" },
  ];

  // Featured Car Card Data
  const featuredCars = [
    {
      image: "/assets/images/featured-car-1.jpg",
      title: "BMW 740L Series",
      rating: 4.8,
      description:
        "Three-row SUV with a modern design, upscale interior, and safety features",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
    {
      image: "/assets/images/featured-car-2.jpg",
      title: "BMW M5 Competition",
      rating: 4.9,
      description:
        "Iconic muscle car with the classic, powerful engines, and agile handling",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
    {
      image: "/assets/images/featured-car-3.jpg",
      title: "Mitsubishi Portan",
      rating: 4.5,
      description:
        "Compact yet spacious, the Mitsubishi Portan is perfect for city and family trips",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
    {
      image: "/assets/images/featured-car-1.jpg",
      title: "BMW 740L Series",
      rating: 4.8,
      description:
        "Three-row SUV with a modern design, upscale interior, and safety features",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
    {
      image: "/assets/images/featured-car-2.jpg",
      title: "BMW M5 Competition",
      rating: 4.9,
      description:
        "Iconic muscle car with the classic, powerful engines, and agile handling",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
    {
      image: "/assets/images/featured-car-3.jpg",
      title: "Mitsubishi Portan",
      rating: 4.5,
      description:
        "Compact yet spacious, the Mitsubishi Portan is perfect for city and family trips",
      doors: "2 Doors",
      suitcase: "1 Large, 2 Small",
      passengers: "06",
    },
  ];

  // Latest News Data

  const newsData = [
    {
      img: "/assets/images/blog-image-01.jpg",
      tag: "TRAVEL BLOG",
      date: "20 March, 2024",
      text: "10 European ski destinations you should visit this winter",
    },
    {
      img: "/assets/images/blog-image-02.jpg",
      tag: "COVID TRAVEL",
      date: "20 March, 2024",
      text: "Booking travel during Corona: Find who are giving service",
    },
    {
      img: "/assets/images/blog-image-03.jpg",
      tag: "EUROPE",
      date: "20 March, 2024",
      text: "Change your place and get the fresh air from the nature",
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
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
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

      {/* Brand img Section */}
      <section className="home-brands-section">
        <div className="home-brands-header">
          <div>
            <h4 className="home-brands-tag">BRANDS</h4>
            <h2 className="home-brands-title">Explore Premium Car Brand</h2>
          </div>
          <button className="home-brands-btn">Show all Brands</button>
        </div>
        <div className="home-brands-grid">
          <Card brands={brands} />
        </div>
      </section>

      {/* Car Types Section */}
      <section className="home-brands-section background">
        <div className="home-brands-header">
          <div style={{ width: "100%" }}>
            <h4 className="home-brands-tag background-white">CAR TYPES</h4>
            <h2 className="home-brands-title">Explore Car Types</h2>
          </div>
        </div>
        <div className="home-brands-grid">
          <Card brands={carTypes} />
        </div>
      </section>
      {/* *********************** Feature Section ************* */}
      <section className="home-feature-section home-brands-section">
        <div className="home-feature-left ">
          <h4 className="home-brands-tag ">WE ARE THE BEST</h4>
          <h2 className="home-brands-title ">
            Explore The World With Your <br />
            Own Way Of Driving
          </h2>
        </div>

        <div className="home-feature-right ">
          <div className="home-feature-card">
            <div className="home-feature-icon">
              <FaCar color="var(--primaryColor)" />
            </div>
            <h3>Free Pick Up & Drop</h3>
            <p>
              Your convenience matter. Complimentary pick-up and drop-off
              service for any your vehicle, a stress-free experience.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="home-feature-icon">
              <FaPhone color="var(--primaryColor)" />
            </div>
            <h3>24/7 Road Assistant</h3>
            <p>
              No matter the time or place, and our 24/7 roadside assistance
              ensures you're never stranded. Drive confidently with support.
            </p>
          </div>
        </div>
      </section>
      {/******************  Car Swiper Section *****************/}
      <section className="swiper-section ">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={0}
          breakpoints={{
            1180: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
        >
          {swiperCars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="car-card">
                <img src={car.img} alt="" className="swiper-lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/****************** Featured Car Section *********************/}

      <section className="featured-car-section home-brands-section">
        <div className="featured-wrapper">
          <h4 className="home-brands-tag background-white">FEATURED CARS</h4>
          <h2 className="home-brands-title">Featured Cars</h2>
        </div>
        <div className="featured-container">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={5000}
            loop={true}
            lazy={true}
            className="car-swiper"
          >
            {featuredCars.map((car, index) => (
              <SwiperSlide key={index}>
                <CarCard key={index} {...car} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/******************* Video Section ************** */}

      <Video bgImage={bgTwo} />

      {/* News Section */}

      <section className="news-section home-brands-section">
        <div className="news-wrapper featured-wrapper">
          <h4 className="news-tag home-brands-tag">FEATURED CARS</h4>
          <h2 className=" news-title home-brands-title">Featured Cars</h2>
        </div>
        <div className="news-grid">
          {newsData.map((news, index) => (
            <div className="news-card" key={index}>
              <div className="news-img-container">
                <img src={news.img} alt="destination" />
              </div>
              <div className="tag-date-container">
                <span className="news-tag">{news.tag}</span>
                <span className="news-date">
                  <MdDateRange color="#111" size={30} />
                  {news.date}
                </span>
              </div>
              <Link to="#" className="news-link">
                {news.text}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
