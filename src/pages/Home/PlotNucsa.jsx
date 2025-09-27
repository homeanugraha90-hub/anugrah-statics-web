"use client";
import React, { useState } from "react";
import price24 from "../../assets/Price-List-=2024.jpg";
import price25 from "../../assets/price-2025.jpg";
import layout from "../../assets/Layout-img-2.jpg";
import location from "../../assets/location.png";
import { X } from "lucide-react";

export default function PlotNucsa({ nucsaSection }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Original cards
  const cards = [
   {
      title: "Price List (All Years)",
      imgs: [
        { img: price24, year: "2024-2025" },
        { img: price25, year: "2025" },
      ],
      alt: "Price List All Years",
      isMulti: true,
    },
    {
      title: nucsaSection?.content?.title2,
      img: layout,
      alt: "Layout",
    },
    {
      title: nucsaSection?.content?.title3,
      img: location,
      alt: "Location",
    },
    // New Price Card with two images
    
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Explore Anugrah Homes
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From detailed layouts to pricing and location – everything you need
            at a glance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>

                {/* Single image card */}
                {!card.isMulti && (
                  <div
                    className="relative overflow-hidden rounded-xl"
                    onClick={() => setSelectedImage(card.img)}
                  >
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold tracking-wide">
                        View Full
                      </p>
                    </div>
                  </div>
                )}

                {/* Multi-image card */}
                {card.isMulti && (
                  <div className="grid grid-cols-2 gap-4">
                    {card.imgs.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl cursor-pointer"
                        onClick={() => setSelectedImage(item.img)}
                      >
                        <img
                          src={item.img}
                          alt={`${card.alt} ${idx + 1}`}
                          className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        {item.year && (
                          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
                            {item.year}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                          <p className="text-white text-lg font-semibold tracking-wide">
                            View Full
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/90 hover:bg-black text-white rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
