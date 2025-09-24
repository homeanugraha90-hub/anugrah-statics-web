"use client";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Heart, Briefcase, User, Globe, Map, Building } from "lucide-react";
import { useState } from "react";

export default function ProjectSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const featureData = [
    {
      icon: <Heart className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Proximity to Airport",
      text: "The site is only 10 minutes from the upcoming Noida International Airport, Jewar."
    },
    {
      icon: <Briefcase className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Defence and Metro Access",
      text: "Located near the upcoming Defence Corridor and Metro network."
    },
    {
      icon: <User className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Growth Hubs",
      text: "Close to upcoming Film City, Toy City, Patanjali Food Park, Textile Park, and Logistics Park."
    },
    {
      icon: <Globe className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Excellent Connectivity",
      text: "Well-connected to Delhi, Ghaziabad, and Greater Noida."
    },
    {
      icon: <Map className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Nearby Landmarks",
      text: "Close to Schools/Colleges, Hospitals, ICC Cricket Stadium, Formula One Track, and Night Safari Park."
    },
    {
      icon: <Building className="text-orange-600 w-8 h-8 mb-2" />,
      title: "Prime Location",
      text: "Close to Schools, Colleges, Hospitals, ICC Stadium, Formula 1 Track & more."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <p className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-orange-100 text-orange-500 font-medium">
        Our Services
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">
        Our Main Focus
      </h2>

      <div className="relative">
        <Swiper
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Pagination, Autoplay]}
          className="w-full pb-12"
        >
          {featureData.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div 
                  className={`bg-white flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border-b-4 border-orange-400 transform ${
                    isActive 
                      ? 'scale-110 h-80 sm:h-96 shadow-2xl bg-gradient-to-br from-white to-orange-50 border-orange-500' 
                      : 'scale-95 h-72 sm:h-80 opacity-80'
                  }`}
                >
                  {/* Icon with splash background */}
                  <div className={`flex items-center justify-center mb-4 relative transition-all duration-500 ${
                    isActive ? 'w-24 h-24' : 'w-20 h-20'
                  }`}>
                    <div className={`absolute inset-0 bg-orange-100 rounded-full opacity-70 blur-md transition-all duration-500 ${
                      isActive ? 'bg-orange-200 scale-110' : ''
                    }`}></div>
                    <div className={`relative text-orange-500 transition-all duration-500 ${
                      isActive ? 'text-5xl text-orange-600' : 'text-4xl'
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-2 transition-all duration-500 ${
                    isActive 
                      ? 'text-xl md:text-2xl text-orange-700' 
                      : 'text-lg md:text-xl'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-500 mb-4 flex-grow transition-all duration-500 ${
                    isActive 
                      ? 'text-base md:text-lg text-gray-600' 
                      : 'text-sm md:text-base'
                  }`}>
                    {item.text}
                  </p>

                  {/* CTA */}
                  <a
                    href="#"
                    className={`font-medium hover:underline mt-auto transition-all duration-500 ${
                      isActive 
                        ? 'text-orange-600 text-lg font-semibold transform hover:scale-105' 
                        : 'text-orange-500'
                    }`}
                  >
                    Find A Home →
                  </a>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/site-visit")}
        className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition text-sm sm:text-base md:text-lg"
      >
        Schedule Your Visit
      </button>
    </section>
  );
}