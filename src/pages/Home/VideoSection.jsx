"use client";
import { useState } from "react";
import vid from "../../assets/video-1.mp4";
import { X } from "lucide-react";
import { Cross } from "lucide-react";
export default function VideoSection({ videoSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video (only inside this section) */}
      <video
        src={vid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          {videoSection?.content?.title || "Watch Our Story"}
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-sm md:text-md mx-auto mb-2 drop-shadow-md">
          {videoSection?.content?.discribe1}
        </p>
        <p className="text-sm md:text-md max-w-2xl mx-auto mb-8 drop-shadow-md">
          {videoSection?.content?.discribe2}
        </p>

        {/* Thumbnail with Play Button */}
        <div className="relative aspect-video rounded-2xl  overflow-hidden mx-auto max-w-3xl">
          
          <button
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full  hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-red-500"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* 🔹 Video Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2 aspect-video bg-black rounded-xl shadow-lg">
            <video
              src={vid}
              controls
              autoPlay
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 right-0 pl-3 bg-white text-gray-800 w-10 h-10 
               rounded-full shadow-md hover:bg-red-500 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
