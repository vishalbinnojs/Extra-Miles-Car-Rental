import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./Faqs.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id:1,
      question: "What is about rental car deals?",
      answer: "The prices were reasonable, and the staff was friendly and accommodating. Definitely my go-to car rental company. Outstanding Customer Service!",
    },
    {
      question: "In which areas do you operate?",
      answer:
        "We primarily operate in Mountain Hill, UK, and the surrounding areas. Our services cover nearby towns and neighborhoods, ensuring convenient car rentals for both local residents and visitors. If you’re located outside this region, feel free to contact us, and we’ll be happy to assist with availability or special arrangements.",
    },
    {
      question: "Do you rent to international visitors?",
      answer: "Yes, we rent cars to international visitors with valid documents.",
    },
    {
      question: "If I rent a vehicle can I choose the chauffeur?",
      answer: "Yes, you can request a chauffeur while booking your car.",
    },
    {
      question: "How old do you have to be to rent a car?",
      answer: "You must be at least 21 years old with a valid driving license.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log(index)
  };
  return (
    <>
    <div className="faq-hero">
        <div className="text-wrapper">
        <h1>FAQs</h1>
        </div>
    </div>
     
      {/* ************** FaQs Section ******************* */}
    <section className="faq-section">
      <h4 className="faq-subtitle">FAQs</h4>
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>Q. {item.question}</span>
            <div className="btn-box" style={{minWidth:"20px",minHeight:"20px"}}>
                {activeIndex === index ? (
                <Minus size={20} style={{backgroundColor:"#000", color:"#fff", borderRadius:"50%"}}/>
              ) : (
                <Plus size={20} style={{backgroundColor:"var(--primaryBgColor)", color:"#fff", borderRadius:"50%"}} />
              )}
            </div>
            </button>
            {activeIndex === index && (
              <div className={`faq-answer`}>
                <p>{item.answer}</p>
              </div>
              
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Faqs;

