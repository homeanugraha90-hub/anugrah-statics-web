"use client";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Heart, Briefcase, User, Globe, Map, Building } from "lucide-react";

export default function ProjectSection() {
  const navigate = useNavigate();

  
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
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-center">
      {/* Section Title */}
      <p className="inline-block px-4 py-1 mb-3 text-sm rounded-full bg-orange-100 text-orange-500 font-medium">
        { "Our Services"}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-900">
        { "Our Main Focus"}
      </h2>

     
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {featureData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white h-72 sm:h-80 flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-orange-400">
              {/* Icon with splash background */}
              <div className="w-20 h-20 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-orange-100 rounded-full opacity-70 blur-md"></div>
                <div className="relative text-orange-500 text-4xl">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base mb-4">
                {item.text}
              </p>

              {/* CTA */}
              <a
                href="#"
                className="text-orange-500 font-medium hover:underline"
              >
                Find A Home →
              </a>
            </div>
          </SwiperSlide>
        ))}

        {/* Extra custom card */}
        <SwiperSlide>
          <div className="bg-white h-72 sm:h-80 flex flex-col justify-between items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-orange-400">
            <div className="w-20 h-20 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 bg-orange-100 rounded-full opacity-70 blur-md"></div>
              <Building className="relative text-orange-500 w-10 h-10" />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
              Prime Location
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4">
              Close to Schools, Colleges, Hospitals, ICC Stadium, Formula 1 Track & more.
            </p>
            <a href="#" className="text-orange-500 font-medium hover:underline">
              Find A Home →
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/site-visit")}
        className="mt-12 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition text-sm sm:text-base md:text-lg"
      >
        Schedule Your Visit
      </button>
    </section>
  );
}
