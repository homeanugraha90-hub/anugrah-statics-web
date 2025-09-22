import React, { useEffect, useState, useRef } from "react";

export default function FistSection({ firstSection }) {
  const images = firstSection?.images ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 4s
  useEffect(() => {
    if (images.length === 0) return;

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    timeoutRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [images.length]);

  // Handle empty images in render
  if (images.length === 0) {
    return <div className="w-screen h-screen flex items-center justify-center text-white">No Images</div>;
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={`https://anugrah-main-backend.onrender.com/upload/${img}`}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
