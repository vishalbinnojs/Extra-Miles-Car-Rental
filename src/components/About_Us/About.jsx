import  {  useRef, useEffect } from "react";
import {
  FaGlobe,
  FaBars,
  FaUserPlus,
  FaSearch,
  FaCreditCard,
  FaCar,
   FaLinkedinIn, 
   FaBehance
} from "react-icons/fa";
import {CgFacebook} from "react-icons/cg";
import "./about.css";
import aboutLambo  from "../../assets/images/about-lambo.png";
import aboutMap from "../../assets/images/about-map.png";
import Member1 from "../../assets/images/team-image-1.png"
import Member2 from "../../assets/images/team-image-2.png"
import Member3 from "../../assets/images/team-image-3.png"
import Member4 from "../../assets/images/team-image-4.png"

import bgOne from "../../assets/images/video-bg-1.png";

import Video from "./Video_Section/Video"


import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const featureCardData = [
  {
    id: 1,
    title: "International Tours",
    desc: "Our team of travel professional brings a wealth of knowledge and expertise to the table.",
  },
  {
    id: 2,
    title: "Multiple Options to Choose",
    desc: "Planning trip should be an exciting adventure, not stressful ordeal. Let us handle the logistics.",
  },
];

// Data(step by step working)
const steps = [
  {
    number: "1",
    icon: <FaUserPlus className="step-icon" />,
    title: "Sign up Account",
    description: "Create your account in just a few simple steps",
  },
  {
    number: "2",
    icon: <FaSearch className="step-icon" />,
    title: "Search your Vehicle",
    description: "Browse our wide selection of vehicles",
  },
  {
    number: "3",
    icon: <FaCreditCard className="step-icon" />,
    title: "Pay the Car Rent",
    description: "Secure payment with multiple options",
  },
  {
    number: "4",
    icon: <FaCar className="step-icon" />,
    title: "Take Car to Road",
    description: "Pick up your car and enjoy the ride",
  },
];

// Auto scroll brands
const brands = [
  { name: "Rounden", logo: "©" },
  { name: "Starblow", logo: "米" },
  { name: "Earthlow", logo: "¥" },
  { name: "Cuberton", logo: "CS" },
  { name: "Droneed", logo: "©" },
  { name: "Nietzsche", logo: "31" },
];


// Team member card data
   const teamMembers = [
  {
    name: "Alex Leeman",
    role: "Director",
    img: `${Member1}`,
    socials: ["facebook", "linkedin", "behance"],
  },
  {
    name: "Diago Johnson",
    role: "Sales Manager",
    img: `${Member2}`,
    socials: ["facebook", "linkedin", "behance"],
  },
  {
    name: "Sophia Lauren",
    role: "Co-Founder",
    img: `${Member3}`,
    socials: ["facebook", "linkedin", "behance"],
  },
  {
    name: "William Henry",
    role: "Marketing",
    img: `${Member4}`,
    socials: ["facebook", "linkedin", "behance"],
  },
];


// Testimonials card data
const testimonials = [
  {
    name: "Jonathan Blue",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Seamless Booking and Pickup! I rented car from Carola, and the process was incredibly smooth. The online booking system is user-friendly, and the pickup was quick and efficient.",
    rating: 5,
  },
  {
    name: "Sarah Green",
    role: "Team Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing service! The booking was super easy, and the car was in excellent condition. Highly recommended.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Really impressed by the quick service. The process was transparent, and everything worked flawlessly.",
    rating: 4,
  },
];
// About Component
const About = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    
    scroll.innerHTML += scroll.innerHTML;

    let scrollPosition = 0;
    const speed = 1; 

    function autoScroll() {
      scrollPosition += speed;
      if (scrollPosition >= scroll.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scroll.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(autoScroll);
    }

    const animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="about-hero">
        <div className="text-wrapper">

        <h1>ABOUT <br /><em>EXTRA MILES</em></h1>
        <p>From short trips to long drives –  Rent smarter, <br />Drive better & Go extra miles.</p>
      <button className="signup-btn">
  Signup
  <span className="circle">
    <span className="arrow">➜</span>
  </span>
</button>
        </div>
      </div>
      {/* **************  Brand Section************* */}
      <section className="brands-section">
        <div className="container">
          <div className="section-image">
            <img src={aboutLambo} alt="lambo" />
          </div>

          <div className="section-heading">
            <div className="section-title">
              <h4>BRANDS</h4>
              <h2>Planning A Trip Should Be Very Exciting Adventure</h2>
            </div>
            <div className="brands-features">
              {featureCardData.map((item, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-content">
                    {index === 0 ? (
                      <FaGlobe className="icon" />
                    ) : (
                      <FaBars className="icon" />
                    )}
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/********** * How It Works Section **********/}
      <section className="how-it-works">
        <div className="container">
          <h4>POPULAR CARS</h4>

          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon-container">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brand- Logos */}
      <div className="brand-logos-section">
        <h2 className="section-title">Our Partners</h2>
        <div className="logos-container" ref={containerRef}>
          <div className="logos-scroll" ref={scrollRef}>
            {brands.map((brand, index) => (
              <div key={index} className="brand-logo">
                <span className="brand-symbol">{brand.logo}</span>
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* video section */}

      
        <Video bgImage = {`${bgOne}`}/>
      




      {/* Team Section */}

    <section className="team-section">
      <div className="team-header">
        <h4 className="tag">OUR TEAM</h4>
        <h2>The Amazing Team Behind Our Company</h2>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="socials">
              {member.socials.map((s, i) => (
                <a href="#" key={i} className={s}>
                  {s === "facebook" && <CgFacebook className="team-icon"/>}
                  {s === "linkedin" && <FaLinkedinIn className="team-icon" />}
                  {s === "behance" && <FaBehance className="team-icon" />}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

{/* ******************Testimonial section********** */}
     <section className="testimonial-section">
  <div className="testimonial-header">
    <h4>TESTIMONIALS</h4>
    <h2>Love From Clients</h2>
  </div>

  <Swiper
    modules={[ Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={2}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    }}
    className="my-swiper"
  >
    {testimonials.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="testimonial-card">
          <div className="testimonial-card-header">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.role}</p>
            </div>
          </div>
          <p className="review">“{item.review}”</p>
          <div className="testimonial-stars">
            {Array(item.rating)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  
{/************ Service Areas********* */}

      <section className="service-areas">
        <div className="services-title">
          <h4>OUR SERVICE AREAS</h4>
          <h2>32 Locations In The World</h2>
        </div>
        <img src={aboutMap} alt="locations map" />
      </section>
    </>
  );
};

export default About;
