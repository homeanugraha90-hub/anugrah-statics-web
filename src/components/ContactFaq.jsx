// File: ContactFaq.tsx
import img1 from "../assets/Gate.png"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I start the home buying process?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "What costs are involved in buying a home?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "How long does it take to buy a home?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "Can I buy a home without a real estate agent?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
  {
    question: "Do I need to sell my current home before buying a new one?",
    answer: "Our approach combines personalized strategies, data-driven insights, and dedicated support to help you reach your financial goals. Each step is crafted to maximize growth, reduce risk, and build lasting financial confidence.",
  },
];

const ContactFaq = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const nav = useNavigate();
 
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-12 md:py-20 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section - Fixed Height Container */}
        <div className="flex flex-col">
          <div 
            className="bg-blue-600 text-white rounded-xl overflow-hidden flex-1 min-h-[300px] md:min-h-[400px] flex flex-col justify-between"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="p-6 md:p-8  bg-opacity-40 rounded-xl h-full flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get in Touch with Us</h2>
              <p className="mb-6 text-gray-200 text-sm md:text-base">
                Reach out today for expert real estate advice, personalized support, and a dedicated team ready to guide you every step of the way.
              </p>
              <button 
                onClick={() => nav("/contact")} 
                className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-gray-100 transition duration-300 w-fit"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - FAQ */}
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-400 mb-2">FAQs</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
              Your Home Guide
            </h2>
          </div>
          
          <div className="space-y-4 flex-1">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center text-sm md:text-base lg:text-lg font-semibold py-2 hover:text-blue-600 transition-colors"
                >
                  <span className="text-left pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-blue-600 text-lg">
                    {activeIndex === index ? '▾' : '▸'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {activeIndex === index && faq.answer && (
                    <p className="pt-2 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;