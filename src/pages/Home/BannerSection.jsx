import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/park-1.jpg";
import img2 from "../../assets/garden-3.jpg";
import img3 from "../../assets/park-13.jpg";
import img4 from "../../assets/const-3.jpg";
import img5 from "../../assets/park-15.png";

export default function BannerSection() {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nav = useNavigate();

  // Auto-slide every 3s
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full bg-gray-50 pt-20 md:pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-12 md:py-20">

        {/* Image Slider FIRST on mobile */}
        <div className="order-1 md:order-2 relative w-full h-72 sm:h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <div
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="relative w-full h-full flex-shrink-0">
                {/* Background Blur */}
                <img
                  src={img}
                  alt={`bg-${i}`}
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
                />
                {/* Main Image */}
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="relative w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-12 h-10 rounded-sm overflow-hidden border-2 transition ${
                  currentIndex === i ? "border-orange-500" : "border-white"
                }`}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Content SECOND on mobile */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-snug">
            Discover Your Dream <br /> Buying Destination
          </h1>

          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            At Anugrah Homes, buying a home isn’t just a deal — it’s the start of your dream journey. 
            From plots to villas, we bring you closer with expert guidance and trusted solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-sm shadow hover:bg-orange-600 transition"
            >
              OUR SERVICES
            </a>
            <button
              onClick={() => nav("/about")}
              className="bg-white border border-gray-300 font-semibold px-6 py-3 rounded-sm shadow hover:bg-gray-100 transition"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
