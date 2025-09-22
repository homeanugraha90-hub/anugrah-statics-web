"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { X } from "lucide-react";

import img1 from "../../assets/artical-1.jpg";
import img2 from "../../assets/artical-2.jpg";
import img3 from "../../assets/artical-3.png";
import img4 from "../../assets/artical-4.png";
import img5 from "../../assets/artical-5.png";
import img6 from "../../assets/artical-6.png";
import img7 from "../../assets/artical-7.png";
import img8 from "../../assets/artical-8.png";

export default function ArticlesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const articlesSection = {
    id: "689c714b86f7be093f2673a7",
    sectionName: "ArticalsSection",
    __v: 0,
    designType: "just images",
    images: [img1, img2, img3, img4, img5, img6, img7, img8],
    videos: [],
  };

  const images = articlesSection?.images || [];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    if (images.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev + 3 >= images.length ? 0 : prev + 3
        );
        setFade(true);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <section id="media" className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 relative inline-block"
          data-aos="fade-down"
        >
          NEWS & MEDIA
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-opacity duration-[2000ms] ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              data-aos="fade-up"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}  // ✅ fix here
                alt={`News ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold tracking-wide">
                  Click to View
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
