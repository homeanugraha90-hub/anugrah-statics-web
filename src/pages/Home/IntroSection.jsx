import { useState } from "react";
import img1 from "../../assets/park-12.jpeg";
import img2 from "../../assets/park-9.jpeg";
import { Home, User, Box } from "lucide-react";

export default function IntroSection() {
  const [hovered, setHovered] = useState(false);

  // Static data
  const staticData = {
    content: {
      subtitle: "About Us",
      tittle: "Anugrah Homes",
      tittle2: "Plots on Yamuna Expressway",
      content1:
        "Anugrah Homes focuses on letting you detach from the world and reconnect with your spirit by creating a setting rich in peace and tranquility, surrounded by nature, while still offering all the amenities of luxury living.",
      content2:
        "Anugrah Homes is the natural manifestation of a modern yet fashionably confident plot in the countryside",
      content3:
        "We create customized adventures and discoveries for our visitors through bespoke cultural, culinary, wellness, architecture, lifestyle, and personalized service experiences.",
    },
    images: [img1, img2],
  };

  return (
    <section
      id="about"
      className="relative bg-white py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - Overlapping Images */}
        <div
          className="relative flex justify-center md:justify-start group cursor-pointer 
          w-full max-w-[500px] h-[40vh] sm:h-[60vh] md:h-[70vh] mx-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* First Image */}
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl
            transform-gpu transition-all duration-[2000ms] ease-in-out [will-change:transform]
            ${hovered ? "z-10 translate-y-10 opacity-0" : "z-20 translate-y-0 opacity-100"}`}
          >
            <img
              src={img1}
              alt="Anugrah Homes - Residential Plots"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl border-4 border-white
            transform-gpu transition-all duration-[2000ms] ease-in-out [will-change:transform]
            ${hovered ? "z-20 translate-y-0 opacity-100" : "z-10 -translate-y-10 opacity-0"}`}
          >
            <img
              src={img2}
              alt="Anugrah Homes - Park View"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm sm:text-base">
            {staticData.content.subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
            {staticData.content.tittle}{" "}
            <span className="text-orange-500">{staticData.content.tittle2}</span>
          </h2>

          {/* Features List */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <Home className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                ),
                title: "Premium Residential Plots",
                desc: staticData.content.content1,
              },
              {
                icon: (
                  <User className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                ),
                title: "Modern Countryside Living",
                desc: staticData.content.content2,
              },
              {
                icon: (
                  <Box className="text-orange-500 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                ),
                title: "Bespoke Experiences",
                desc: staticData.content.content3,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex items-start gap-3 sm:gap-4 p-4 rounded-lg shadow-sm hover:shadow-md transition group"
              >
                {/* Animated Left Border */}
                <span className="absolute left-0 top-0 w-1 h-0 bg-orange-500 transition-all duration-500 group-hover:h-full"></span>

                {item.icon}
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">
                    {item.title}
                  </h3>
                  {/* Limit text to 2 lines */}
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
