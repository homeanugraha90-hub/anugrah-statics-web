"use client";
import React, { useRef, useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔹 Import all images statically
import img1 from "../../assets/develop-8.jpeg";
import img2 from "../../assets/garden-1.jpg";
import img3 from "../../assets/park-6.jpg";
import img4 from "../../assets/park-7.jpg";
import img6 from "../../assets/garden-1.jpg";
import img7 from "../../assets/park-11.jpeg";
import img8 from "../../assets/park-12.jpeg";
import img9 from "../../assets/trees-2.jpeg";
import img10 from "../../assets/road-1.png";

import vid1 from "../../assets/video-1.mp4"
import vid2 from "/Video-4.mp4"

export default function HomeActualImg() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageGalleryModal, setImageGalleryModal] = useState(false);
  const [videoGalleryModal, setVideoGalleryModal] = useState(false);
  
  // Track user interaction for each video
  const [videoInteractions, setVideoInteractions] = useState({});

  // 🔹 Static array of images
  const images = [
    img1, img2, img3, img4, img6, img7, img8, img9, img10,
  ];

  // 🔹 Sample video data (replace with your actual videos)
  const videos = [
    { id: 1, thumbnail: img1, videoUrl: vid1, title: "Site Tour 1" },
    { id: 2, thumbnail: img2, videoUrl: vid2, title: "Site Tour 2" },
    { id: 3, thumbnail: img3, videoUrl: vid1, title: "Site Tour 3" },
    { id: 4, thumbnail: img4, videoUrl: vid2, title: "Site Tour 4" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const displayedImages = images.slice(0, 3);
  const displayedVideos = videos.slice(0, 3);

  // Handle video play with proper timing logic
  const handleVideoPlay = (videoElement, videoId) => {
    if (!videoInteractions[videoId]) {
      // First time user clicks - start from beginning
      videoElement.currentTime = 0;
      setVideoInteractions(prev => ({
        ...prev,
        [videoId]: true
      }));
    }
    videoElement.play();
  };

  // Handle video loading - set initial time for autoplay
  const handleVideoLoadedMetadata = (videoElement, videoId) => {
    if (!videoInteractions[videoId]) {
      // For autoplay preview, start from 12 seconds
      videoElement.currentTime = 12;
    }
  };

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
          Anugrah Homes Actual Site is
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
        </h2>

        {/* Images Section */}
        <div className="mb-16">
          <div className="relative">
            {/* Images Label */}
            <h3 className="absolute -top-2 left-0 bg-orange-500 text-white px-4 py-2 rounded-tr-lg rounded-bl-lg font-semibold text-lg z-10">
              Images
            </h3>

            {/* Images Grid - 2 rows, 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8">
              {displayedImages.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-48 md:h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Image */}
                  <img
                    src={img}
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

            {/* More Button for Images */}
            {images.length > 3 && (
              <button
                onClick={() => setImageGalleryModal(true)}
                className="absolute -bottom-2 right-0 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-tl-lg rounded-br-lg font-semibold text-lg transition duration-300 shadow-lg z-10"
                data-aos="fade-in"
              >
                More
              </button>
            )}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <div className="relative">
            {/* Videos Label */}
            <h3 className="absolute -top-2 left-0 bg-blue-500 text-white px-4 py-2 rounded-tr-lg rounded-bl-lg font-semibold text-lg z-10">
              Videos
            </h3>

            {/* Videos Grid - 2 rows, 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8">
              {displayedVideos.map((video, i) => (
                <div
                  key={video.id}
                  className="relative w-full h-48 md:h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Actual Video */}
                  <video
                    src={video.videoUrl}
                    autoPlay
                    className="w-full h-full object-cover"
                    muted
                    loop
                    onLoadedMetadata={(e) => handleVideoLoadedMetadata(e.target, video.id)}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Play Button Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      const videoElement = e.currentTarget.previousElementSibling;
                      handleVideoPlay(videoElement, video.id);
                    }}
                  >
                    <div className="bg-white/90 hover:bg-white rounded-full p-3 group-hover:scale-110 transition duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  {/* Video Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-semibold">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* More Button for Videos */}
            {videos.length > 3 && (
              <button
                onClick={() => setVideoGalleryModal(true)}
                className="absolute -bottom-2 right-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-tl-lg rounded-br-lg font-semibold text-lg transition duration-300 shadow-lg z-10"
                data-aos="fade-in"
              >
                More
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {imageGalleryModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-hidden"
          onClick={() => setImageGalleryModal(false)}
        >
          <div className="h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-black/80 p-4 rounded-lg z-60">
              <h3 className="text-white text-2xl font-bold">All Images</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImageGalleryModal(false);
                }}
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto p-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-48 md:h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(img);
                  }}
                >
                  <img
                    src={img}
                    alt={`Site ${i + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold tracking-wide">
                      View Full
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery Modal */}
      {videoGalleryModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-hidden"
          onClick={() => setVideoGalleryModal(false)}
        >
          <div className="h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-black/80 p-4 rounded-lg z-60">
              <h3 className="text-white text-2xl font-bold">All Videos</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setVideoGalleryModal(false);
                }}
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto p-4">
              {videos.map((video, i) => (
                <div
                  key={video.id}
                  className="relative w-full h-48 md:h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(video);
                  }}
                >
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    onLoadedMetadata={(e) => handleVideoLoadedMetadata(e.target, `gallery-${video.id}`)}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      const videoElement = e.currentTarget.previousElementSibling;
                      handleVideoPlay(videoElement, `gallery-${video.id}`);
                    }}
                  >
                    <div className="bg-white/90 hover:bg-white rounded-full p-3 group-hover:scale-110 transition duration-300">
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-semibold">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full Site View"
              className="w-full h-auto rounded-lg shadow-2xl max-h-[90vh] object-contain"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-2xl max-h-[90vh]"
            >
              Your browser does not support the video tag.
            </video>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}