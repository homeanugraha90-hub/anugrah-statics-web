import React from "react";
import heroImg from "../assets/gate-1.png"; // Hero section image
import {
  ShieldCheck,
  TreePine,
  Droplets,
  Dumbbell,
  Store,
  Hospital,
  Laptop,
  Building2,
  Waves,
  Baby,
  Footprints,
} from "lucide-react";

// Import amenity images (replace with your actual image paths)
import secImg from "../assets/security.jpg";
import parkImg from "../assets/park-15.png";
import waterImg from "../assets/waterbodys.jpg";
import gymImg from "../assets/gym.webp";
import shopImg from "../assets/commercial.webp";
import medicalImg from "../assets/medical.jpg";
import techImg from "../assets/security.jpg";
import clubImg from "../assets/clobhouse.jpg";
import poolImg from "../assets/pool.jpg";
import kidsImg from "../assets/kidPlay.png";
import trackImg from "../assets/walking.jpg";

const amenities = [
  {
    title: "24x7 Security",
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    desc: "Round-the-clock security ensuring complete peace of mind for all residents.",
    img: secImg,
  },
  {
    title: "Parks",
    icon: <TreePine className="w-10 h-10 text-green-600" />,
    desc: "Beautifully landscaped green parks for relaxation and recreation.",
    img: parkImg,
  },
  {
    title: "Water Bodies",
    icon: <Droplets className="w-10 h-10 text-blue-500" />,
    desc: "Serene water features adding charm and a calming atmosphere.",
    img: waterImg,
  },
  {
    title: "Gym",
    icon: <Dumbbell className="w-10 h-10 text-red-500" />,
    desc: "State-of-the-art fitness center for a healthy and active lifestyle.",
    img: gymImg,
  },
  {
    title: "Commercial Center",
    icon: <Store className="w-10 h-10 text-purple-500" />,
    desc: "Shops and commercial spaces for all your daily needs within the community.",
    img: shopImg,
  },
  {
    title: "Medical Care",
    icon: <Hospital className="w-10 h-10 text-pink-500" />,
    desc: "24x7 on-call doctor, emergency services, and first-aid facilities.",
    img: medicalImg,
  },
  {
    title: "Technology Assistance",
    icon: <Laptop className="w-10 h-10 text-cyan-500" />,
    desc: "Smart home integration and technical support at your doorstep.",
    img: techImg,
  },
  {
    title: "Clubhouse",
    icon: <Building2 className="w-10 h-10 text-orange-500" />,
    desc: "Spacious clubhouse for community events, indoor games, and social gatherings.",
    img: clubImg,
  },
  {
    title: "Swimming Pool",
    icon: <Waves className="w-10 h-10 text-blue-400" />,
    desc: "Luxury leisure pool for relaxation and recreation.",
    img: poolImg,
  },
  {
    title: "Kids Play Zone",
    icon: <Baby className="w-10 h-10 text-lime-500" />,
    desc: "Safe and fun play area designed specially for children.",
    img: kidsImg,
  },
  {
    title: "Walking / Jogging Track",
    icon: <Footprints className="w-10 h-10 text-gray-600" />,
    desc: "Dedicated tracks for morning walks and evening jogs.",
    img: trackImg,
  },
];

const Amenities = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center md:h-[400px] lg:h-[500px] h-[300px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold">Luxurious Amenities</h1>
          <p className="mt-4 text-sm md:text-lg max-w-3xl mx-auto">
            Experience unmatched comfort, convenience, and lifestyle benefits in one place.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700">
            Jewar Airport, which is expected to be India’s biggest airport, is currently under
            construction and anticipated to be completed soon. This massive infrastructure project
            will transform the region by boosting the economy and generating numerous job
            opportunities. The development has already increased demand for plots in the surrounding
            areas.
          </p>
        </div>

        {/* Amenities Grid */}
       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
  {amenities.map((amenity, index) => (
    <div
      key={index}
      className="relative group bg-white border rounded-xl shadow p-6 flex flex-col items-center justify-center text-center transition overflow-hidden"
    >
      {/* Default Content */}
      <div className="z-10 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        {/* Centered Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
          {amenity.icon}
        </div>
        <h3 className="text-xl font-semibold">{amenity.title}</h3>
        <p className="mt-2 text-gray-600">{amenity.desc}</p>
      </div>

      {/* Hover Image */}
      <img
        src={amenity.img}
        alt={amenity.title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white px-4">
        <h3 className="text-lg md:text-xl font-semibold">{amenity.title}</h3>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Live Where Luxury Meets Comfort</h2>
        <p className="mb-6">
          Book your plot today and enjoy world-class amenities with Anugrah Homes.
        </p>
        <a
          href="/contact"
          className="bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Amenities;
