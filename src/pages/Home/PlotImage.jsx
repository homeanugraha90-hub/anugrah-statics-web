import { useState } from "react";
import { X } from "lucide-react";
import img1 from "../../assets/plots-sizes.jpg"

export default function PlotSizeSection({ plotSizeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            {plotSizeSection?.content?.title || "Our Plot Sizes"}
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore the different plot sizes designed to match your dream home
          </p>
        </div>

        {/* Image Showcase */}
        <div className="relative group">
          <div
            className="overflow-hidden relative flex items-center justify-center rounded-2xl shadow-2xl border border-gray-200 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={img1}
              alt="Anugrah Homes Plot Sizes"
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[80vh] object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-base sm:text-lg md:text-xl font-semibold">
                View Full
              </span>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-11/12 sm:w-4/5 md:w-2/3 bg-white shadow-xl rounded-xl p-4 sm:p-6 transition-all duration-700 hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Spacious & Well-Planned
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Each plot is thoughtfully designed to maximize space and ensure a
              comfortable lifestyle with modern infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <img
              src={img1}
              alt="Anugrah Homes Plot Sizes Large"
              className="w-full h-auto max-h-[90vh] rounded-xl shadow-2xl object-contain"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4  bg-black/50 hover:bg-black/70 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
