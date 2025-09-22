"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheck,
  Building2,
  Trees,
  Waves,
  Dumbbell,
  Car,
  Wifi,
  Coffee,
  Utensils,
  Sun,
} from "lucide-react";

export default function LuxuriousSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  //  Static JSON Data
  const luxuriousSection = {
    content: {
      title: "Luxurious Amenities",
      describe1:
        "Jewar Airport, which is expected to be India’s biggest airport, is currently under construction and anticipated to be completed soon. It is expected to be a game-changer for the region by boosting the economy and generating numerous job opportunities. The development has already increased demand for plots in the surrounding areas.",
    },
  };

  //  Static Amenities
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
      label: "24X7 Security",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Building2 className="w-10 h-10 text-orange-500" />,
      label: "Commercial Center",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Trees className="w-10 h-10 text-green-600" />,
      label: "Parks",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Waves className="w-10 h-10 text-blue-500" />,
      label: "Water Bodies",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-purple-600" />,
      label: "Gym",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Car className="w-10 h-10 text-red-500" />,
      label: "Parking",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Wifi className="w-10 h-10 text-indigo-500" />,
      label: "Wi-Fi Zone",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Coffee className="w-10 h-10 text-amber-700" />,
      label: "Cafe",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Utensils className="w-10 h-10 text-pink-500" />,
      label: "Restaurant",
      hover: "group-hover:animate-bounce",
    },
    {
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      label: "Open Terrace",
      hover: "group-hover:animate-bounce",
    },
  ];

  return (
    <section
      id="luxury"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block mb-6"
          data-aos="fade-down"
        >
          {luxuriousSection.content.title}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          {luxuriousSection.content.describe1}
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
              data-aos="zoom-in"
              data-aos-delay={i * 120}
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-white to-gray-100 shadow-lg border border-gray-200 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ease-out">
                <div className={`${item.hover} transition-all duration-500`}>
                  {item.icon}
                </div>
              </div>
              <p className="mt-4 font-semibold text-gray-800 group-hover:text-orange-600 transition">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
