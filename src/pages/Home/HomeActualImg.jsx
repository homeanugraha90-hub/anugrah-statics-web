"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔹 Import all images statically
import img1 from "../../assets/develop-8.jpeg";
import img2 from "../../assets/garden-1.jpg";
import img3 from "../../assets/park-6.jpg";
import img4 from "../../assets/park-7.jpg";
import img5 from "../../assets/trees-1.jpeg";
import img6 from "../../assets/garden-1.jpg";
import img7 from "../../assets/park-11.jpeg";
import img8 from "../../assets/park-12.jpeg";
import img9 from "../../assets/trees-2.jpeg";
import img10 from "../../assets/road-1.png";

export default function HomeActualImg() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔹 Static array of images
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="site-pictures"
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 relative inline-block"
          data-aos="fade-down"
        >
          Anugrah Homes Actual Site Pictures
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              data-aos="zoom-in"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image */}
              <img
                src={img} // ✅ static image
                alt={`Site ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold tracking-wide">
                  View Full
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside
          >
            <img
              src={selectedImage}
              alt="Full Site View"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
