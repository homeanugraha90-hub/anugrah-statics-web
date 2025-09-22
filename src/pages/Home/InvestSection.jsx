"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import img1 from "../../assets/garden-2.jpg"
import img2 from "../../assets/const-5.jpg"
import img3 from "../../assets/air.jpg"
import "aos/dist/aos.css";

export default function InvestSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  //  Static JSON data (directly from your given JSON)
  const investSection = {
    content: {
      title: "Anugrah Homes",
      description1:
        "The Anugrah Homes provides the best opportunity to invest in Residential Plots Land with all luxurious amenities & modern facilities.",
      description2:
        "Anugrah Homes focuses on letting you detach from the world and reconnect with your spirit by creating a setting rich in peace and tranquility, surrounded by nature, while still offering all the amenities of luxury living.",
      description3:
        "Anugrah Homes is the natural manifestation of a modern yet fashionably confident plot in the countryside. We create customized adventures and discoveries for our visitors through bespoke cultural, culinary, wellness, architecture, lifestyle, and personalized service experiences.",
    },
    images: [
      img1,
      img2,
      img3,
    ],
  };

  //  Static cards data
  const cards = [
    {
      img: investSection.images[0],
      date: "5 Dec 2019",
      category: "Real Estate",
      title:
        investSection.content.description1 ||
        "Making Distribut Product Team Work More With Monday",
    },
    {
      img: investSection.images[1],
      date: "5 Dec 2019",
      category: "Real Estate",
      title:
        investSection.content.description2 ||
        "Monthly Web Development Upto Cost Of JavaScript Ethics",
    },
    {
      img: investSection.images[2],
      date: "5 Dec 2019",
      category: "Real Estate",
      title:
        investSection.content.description3 ||
        "User Experience Psychology And Performance Smashing",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl font-bold relative inline-block mb-12"
          data-aos="fade-down"
        >
          {investSection.content.title}
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-xs uppercase text-gray-500 mb-2">
                  By Admin • {card.date} •{" "}
                  <span className="text-orange-600">{card.category}</span>
                </p>
                <h3 className="text-lg font-semibold leading-snug text-gray-900 hover:text-orange-600 transition">
                  {card.title.length > 65
                    ? card.title.substring(0, 65) + "..."
                    : card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
