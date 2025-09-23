import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
const testimonials = [
  {
    name: "Aarav Sharma",
    position: "Software Engineer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian face
    rating: 5,
    feedback:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation.",
  },
  {
    name: "Rohit Verma",
    position: "Businessman",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian guy
    rating: 5,
    feedback:
      "Professional, reliable, and efficient. They guided me through every step and made the entire process stress-free.",
  },
  {
    name: "Priya Nair",
    position: "Teacher",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian woman
    rating: 5,
    feedback:
      "They offered outstanding service and tailored solutions that helped our business grow. Highly recommended!",
  },
  {
    name: "Karan Mehta",
    position: "Doctor",
    image: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=400", // Indian professional
    rating: 5,
    feedback:
      "Amazing experience from start to finish. The team was always responsive and highly knowledgeable.",
  },
];



export default function CardSlider() {
  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-white py-16 relative overflow-hidden">
      <div className="w-full  mx-auto px-6 md:px-20 text-center relative z-10">
        <p className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Our Testimonials
        </p>
        <h2 className="md:text-4xl text-2xl font-bold mt-2 mb-12 text-gray-900">
          What People Say
        </h2>
<div className=" py-10">


        <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={40}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2 },
  }}
  className="  py-20" // ✅ pagination ke liye neeche space
>
  {testimonials.map((t, index) => (
    <SwiperSlide key={index}>
      <div className="relative bg-white/80 backdrop-blur-lg border border-orange-100 p-8 my-10 rounded-2xl shadow-lg h-full flex flex-col justify-between hover:shadow-xl transition">
        {/* Quote icon */}
        <Quote className="absolute top-4 left-4 w-8 h-8 text-orange-200" />

        {/* Stars */}
        <div className="flex mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <span
              key={i}
              className="text-[#f08a25] text-lg md:text-xl mr-1"
            >
              ★
            </span>
          ))}
        </div>

        {/* Feedback */}
        <p className="text-gray-700 text-sm md:text-base italic mb-6 leading-relaxed text-left">
          “{t.feedback}”
        </p>

        {/* Author */}
        <div className="flex items-center mt-4">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-orange-200"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">{t.name}</p>
            <p className="text-sm text-gray-500">{t.position}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</div>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #f08a25;
          width: 46px;
          height: 46px;
          top: 45%;
        }
        .swiper-button-prev {
          left: -55px;
        }
        .swiper-button-next {
          right: -55px;
        }
        .swiper-pagination {
          bottom:  -0px !important;
          margin-top: 25px;
          
        }
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f08a25;
        }
      `}</style>
    </section>
  );
}
