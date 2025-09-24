import React from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Film,
  Building,
  School,
  Hospital,
  Car,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Local images
import imgGate from "../assets/gate-1.png";
import imgGail from "../assets/gailimg-1.jpeg";
import imgAbout4 from "../assets/park-15.png";

const features = [
  {
    icon: <Plane className="w-12 h-12 text-orange-500" />,
    title: "Close to Jewar Airport",
    description: "Only minutes away from Noida International Airport (Jewar).",
    animationType: "plane"
  },
  {
    icon: <Film className="w-12 h-12 text-orange-500" />,
    title: "Near Film City Noida",
    description: "Upcoming Film City development adds cultural & economic value.",
    animationType: "film"
  },
  {
    icon: <Car className="w-12 h-12 text-orange-500" />,
    title: "Well Connected",
    description: "Easy access via Yamuna Expressway & upcoming Metro links.",
    animationType: "car"
  },
  {
    icon: <Building className="w-12 h-12 text-orange-500" />,
    title: "Smart City Growth",
    description: "Jewar is poised to be a hub of commercial and residential growth.",
    animationType: "building"
  },
  {
    icon: <School className="w-12 h-12 text-orange-500" />,
    title: "Nearby Schools",
    description: "Close to reputed schools & universities for quality education.",
    animationType: "school"
  },
  {
    icon: <Hospital className="w-12 h-12 text-orange-500" />,
    title: "Healthcare Facilities",
    description: "Hospitals and medical centers within easy reach.",
    animationType: "hospital"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
    title: "High Capital Appreciation",
    description: "Your investment grows with booming real estate demand.",
    animationType: "check"
  },
  {
    icon: <Building className="w-12 h-12 text-orange-500" />,
    title: "Nearby Markets & Malls",
    description: "Access to local markets and shopping destinations for convenience.",
    animationType: "building"
  },
  {
    icon: <Film className="w-12 h-12 text-orange-500" />,
    title: "Entertainment Zones",
    description: "Proximity to cinemas, recreational centers, and leisure activities.",
    animationType: "film"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
    title: "Green Spaces & Parks",
    description: "Beautiful landscaped parks and green areas for a healthy lifestyle.",
    animationType: "check"
  },
  {
    icon: <Car className="w-12 h-12 text-orange-500" />,
    title: "Safety & Security",
    description: "Well-planned community with 24/7 security and surveillance.",
    animationType: "car"
  },
];

const WhyJewar = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center md:h-[450px] pt-20 lg:h-[550px] h-[300px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${imgGate})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Why Choose Jewar?</h1>
          <p className="mt-2 text-sm md:text-lg max-w-3xl mx-auto">
            Prime Investment Destination – Anugrah Homes Project near Jewar International Airport & Film City Noida.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={imgGail} alt="Residential Plots" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Anugrah Homes</h2>
          <p className="text-gray-700 mb-4">
            Anugrah Homes provides the best opportunity to invest in residential plots with world-class amenities & modern facilities.
          </p>
          <p className="text-gray-700 mb-4">
            Located in the heart of Jewar, our project offers peaceful surroundings while being close to major infrastructure developments.
          </p>
          <p className="text-gray-700">
            We focus on delivering a lifestyle that blends tranquility, luxury, and long-term investment growth.
          </p>
        </div>
      </section>

      {/* Features Section with Epic Card Animations */}
      <section className="bg-gray-50 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="md:text-3xl text-2xl font-bold mb-10">
            Key Benefits of Anugrah Homes
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="group p-8 bg-white rounded-2xl shadow-xl text-center cursor-pointer overflow-hidden relative transform-gpu"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* AIRPLANE ANIMATION */}
                {feature.animationType === 'plane' && (
                  <>
                    {/* Orange Dark Sky Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-100 to-orange-200 opacity-0 group-hover:opacity-90 transition-opacity duration-700"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      style={{ zIndex: 0 }}
                    />

                    {/* Sunset Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-orange-600/30 to-yellow-500/20 opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                      style={{ zIndex: 1 }}
                    />

                    {/* Flying Clouds */}
                    <motion.div
                      className="absolute top-4 left-0 w-8 h-4 bg-white/80 rounded-full opacity-0 group-hover:opacity-90 shadow-lg"
                      animate={{
                        x: [-50, 350],
                        y: [0, -10, 5, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ zIndex: 2 }}
                    />

                    <motion.div
                      className="absolute top-8 right-0 w-6 h-3 bg-white/70 rounded-full opacity-0 group-hover:opacity-80 shadow-md"
                      animate={{
                        x: [350, -50],
                        y: [0, 5, -8, 3, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                      }}
                      style={{ zIndex: 2 }}
                    />

                    {/* Flight Trail */}
                    <motion.div
                      className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/90 to-transparent opacity-0 group-hover:opacity-90 shadow-lg"
                      animate={{
                        x: [-100, 100],
                        scaleX: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ zIndex: 2 }}
                    />

                    {/* Stars/Lights */}
                    {[...Array(8)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-80"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 40 + 5}%`,
                          zIndex: 1
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3
                        }}
                      />
                    ))}
                  </>
                )}

                {/* CAR ANIMATION */}
                {feature.animationType === 'car' && (
                  <>
                    {/* Road Background */}
                    <motion.div
                      className="absolute   inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(to bottom, rgba(255,220,150,0.6), rgba(255,190,80,0.5), rgba(255,165,0,0.4))",
                      }}
                    />

                    {/* Moving Road Line */}
                    <motion.div
                      className="absolute  top-20  left-0 w-full h-1 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, rgba(255,180,70,1), rgba(255,140,0,0.9))",
                        boxShadow: "0px 0px 12px rgba(255,165,0,0.8)",
                      }}
                      animate={{
                        x: [-120, 120],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Road Markers */}
                    {[...Array(5)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute  top-20 w-10 h-1 opacity-0 group-hover:opacity-90 rounded"
                        style={{
                          left: `${idx * 25}%`,
                          background: "linear-gradient(90deg, rgba(255,220,120,1), rgba(255,170,60,0.9))",
                        }}
                        animate={{
                          x: [-50, 400],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: idx * 0.3,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* BUILDING ANIMATION */}
                {feature.animationType === 'building' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-orange-200 via-orange-100 to-blue-100 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                    />

                    {/* Building Blocks Growing */}
                    {[...Array(6)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute bottom-4 bg-gray-600 opacity-0 group-hover:opacity-80"
                        style={{
                          left: `${10 + idx * 15}%`,
                          width: "12px",
                          height: "8px"
                        }}
                        animate={{
                          scaleY: [0, 1, 0.8, 1.2, 1],
                          y: [20, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: idx * 0.2
                        }}
                      />
                    ))}
                  </>
                )}

                {/* FILM ANIMATION */}
                {feature.animationType === 'film' && (
                  <>
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255,220,180,0.7) 0%, rgba(255,240,200,0.3) 60%, transparent 100%)",
                      }}
                    />

                    {/* Film Strip */}
                    <motion.div
                      className="absolute left-0 top-0 w-full h-6 opacity-0 group-hover:opacity-70"
                      style={{
                        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,180,80,0.7) 10px, rgba(255,200,120,0.7) 16px)",
                      }}
                      animate={{
                        backgroundPositionX: [0, -50],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Spotlight */}
                    <motion.div
                      className="absolute top-1/3 left-1/3 w-28 h-28 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        background: "radial-gradient(circle, rgba(255,210,120,0.9) 0%, rgba(255,220,160,0.5) 50%, transparent 80%)",
                        filter: "blur(10px)",
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                    />
                  </>
                )}

                {/* SCHOOL ANIMATION */}
                {feature.animationType === 'school' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-100 to-orange-100 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                    />

                    {/* School Bell */}
                    <motion.div
                      className="absolute top-4 right-4 w-4 h-4 border-2 border-orange-600 rounded-full opacity-0 group-hover:opacity-80"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -15, 15, -10, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />

                    {/* Flying Books */}
                    {[...Array(4)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-3 h-4 bg-blue-500 opacity-0 group-hover:opacity-70"
                        style={{
                          left: `${20 + idx * 20}%`,
                          top: `${30 + idx * 10}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.3
                        }}
                      />
                    ))}
                  </>
                )}

                {/* HOSPITAL ANIMATION */}
                {feature.animationType === 'hospital' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-blue-50 opacity-0 group-hover:opacity-95 transition-opacity duration-500"
                    />

                    {/* Heartbeat Line */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-1 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, transparent 20%, #10b981 20%, #10b981 25%, transparent 25%, transparent 30%, #10b981 30%, #10b981 35%, transparent 35%, transparent 100%)"
                      }}
                      animate={{
                        backgroundPositionX: [0, 400]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Medical Cross */}
                    <motion.div
                      className="absolute top-8 left-8 w-6 h-6 opacity-0 group-hover:opacity-80"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <div className="w-full h-1 bg-red-500 absolute top-1/2 transform -translate-y-1/2"></div>
                      <div className="h-full w-1 bg-red-500 absolute left-1/2 transform -translate-x-1/2"></div>
                    </motion.div>
                  </>
                )}

                {/* CHECK ANIMATION */}
                {feature.animationType === 'check' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-200 via-emerald-100 to-teal-100 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                    />

                    {/* Success Confetti */}
                    {[...Array(12)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-80"
                        style={{
                          backgroundColor: ['#10b981', '#059669', '#34d399', '#6ee7b7'][idx % 4],
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 60 + 20}%`
                        }}
                        animate={{
                          y: [0, -30, 40],
                          x: [0, Math.random() * 40 - 20],
                          rotate: [0, 360],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.1
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon - Static (No Animation) */}
                <div className="flex justify-center  relative z-20 h-16">
                  <div className="relative">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl pt-6 font-bold mb-3 relative z-20 group-hover:text-black transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm relative z-20 group-hover:text-gray-800 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.2), rgba(255,215,0,0.1))",
                    filter: "blur(1px)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Peaceful Yet Luxurious Living
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience a lifestyle where <span className="font-semibold text-gray-800">nature meets modern living</span>.
            Our community ensures a serene environment enriched with premium amenities.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From lush green surroundings to <span className="font-semibold text-gray-800">advanced infrastructure</span>,
            Anugrah Homes sets a new benchmark for countryside living with comfort and elegance.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link to="/amenities">
              <button className="mt-4 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 ">
                Explore More
              </button>
            </Link>
          </div>


        </div>

        <div className="relative group">
          <img
            src={imgAbout4}
            alt="Nature and Lifestyle"
            className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-400/20 to-orange-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Plot Today!</h2>
        <p className="mb-6 text-lg">Limited Plots Available – Invest in the Future Near Jewar Airport.</p>
        <a
          href="/contact"
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e57f37] transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default WhyJewar;