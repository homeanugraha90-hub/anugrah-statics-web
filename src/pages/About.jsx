"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Target } from "lucide-react";

// Local images
import imgGate from "../assets/gate-1.png";
import imgDSC1 from "../assets/allMember.jpg";
import imgPark7 from "../assets/park-7.jpg";
import imgPark1 from "../assets/park-1.jpg";

// Stats for animation
const stats = [
  { value: 112, label: 'Awards Received' },
  { value: 85, label: 'Satisfied Clients' },
  { value: 66, label: 'Monthly Traffic' },
  { value: 143, label: 'Properties Sold' },
];

// Intersection Observer Hook
function useInView(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref]);
  return isIntersecting;
}

// Static About Data (converted from your backend JSON)
const aboutData = [
  {
    sectionName: "AboutSection",
    Images: [imgGate],
    heading: "First about section",
    description: ""
  },
  {
    sectionName: "SecondSection",
    Images: [imgDSC1],
    heading: "Your Reliable Partner In Real Estate Success",
    description: ""
  },
  {
    sectionName: "ThirdSection",
    Images: [imgDSC1],
    heading: "Your Reliable Partner In Real Estate Success",
    description: JSON.stringify({
      title1: "Our Mission",
      title2: "Our Vision",
      content1: `To simplify the real estate journey by connecting people with the right properties through trust, transparency, and technology.

We are committed to delivering personalized experiences, whether you’re buying, selling, or renting. We embrace new technologies and market trends to deliver smarter, faster, and more efficient property solutions.`,
      content2: `To become the most trusted real estate partner by redefining how people discover, evaluate, and engage with properties.

We envision a future where every individual can find their ideal home or investment with confidence, supported by innovation, integrity, and a deep understanding of market needs.`
    })
  },
  {
    sectionName: "FourthSection",
    Images: [imgPark7, imgGate, imgPark1],
    heading: "Homebuying Steps",
    description: ""
  }
];

const milestones = [
  { title: "Humble Beginnings", description: "We started as a small, local agency with a clear mission: helping people find homes with honesty and care." },
  { title: "A Trusted Name", description: "Gained recognition for reliable service and built long-term relationships with clients and partners." },
  { title: "Embracing Innovation", description: "Adopted new technologies to streamline the property search and improve customer experience." },
  { title: "Over 1,000 Homes Sold", description: "Reached a major milestone with over a thousand successful property transactions completed." },
  { title: "Moving Forward Together", description: "Continuing to grow with a dedicated team, modern tools, and a renewed vision for the future." },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);
  const [counts, setCounts] = useState(stats.map(() => 0));

  const firstSection = aboutData.find(item => item.sectionName === "AboutSection");
  const secondSection = aboutData.find(item => item.sectionName === "SecondSection");
  const thirdSection = aboutData.find(item => item.sectionName === "ThirdSection");
  const fourthSection = aboutData.find(item => item.sectionName === "FourthSection");

  const parsedDescription = thirdSection?.description ? JSON.parse(thirdSection.description) : {};

  const steps = [
    { title: 'Step 1: Discover Your Dream Home', description: 'Browse through a curated selection of properties tailored to your lifestyle and budget.', image: fourthSection.Images[0] },
    { title: 'Step 2: Schedule A Viewing', description: 'Book a tour at your convenience and explore the space in person or virtually.', image: fourthSection.Images[1] },
    { title: 'Step 3: Seal The Deal', description: 'Get expert guidance to finalize paperwork and move into your new home with confidence.', image: fourthSection.Images[2] },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500;
        const incrementTime = 30;
        const stepsCount = Math.ceil(duration / incrementTime);
        const increment = end / stepsCount;

        const counter = setInterval(() => {
          start += increment;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.floor(start), end);
            return newCounts;
          });
          if (start >= end) clearInterval(counter);
        }, incrementTime);
      });
    } else {
      setCounts(stats.map(() => 0));
    }
  }, [isInView]);

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-cover  bg-center md:h-[400px] lg:h-[500px] h-[300px] flex items-center pt-15  justify-center text-white" style={{ backgroundImage: `url(${firstSection.Images[0]})` }}>
        <div className="relative z-10 text-center text-white px-4 h-full w-full flex flex-col items-center justify-center bg-black/50">
          <h1 className="text-2xl md:text-5xl font-bold ">About Us</h1>
          <p className="text-sm md:text-base"><span className="text-gray-300">Home</span> &gt; About Us</p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-black flex flex-col items-center py-10">
        <h1 className="text-xl text-gray-500 font-medium mb-4">About</h1>
        <h2 className="text-center text-2xl md:text-3xl font-medium md:w-[60vh] text-black/80 px-6 py-4 rounded">{secondSection.heading}</h2>
      </div>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Fixed Background Image with smooth scroll */}
        <div
          className="h-[60vh] bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${imgDSC1})` }}
        >

        </div>
        <div className="grid grid-cols-1  pt-4 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4"><Crown className="w-6 h-6 text-black mr-2" /><h2 className="text-xl font-bold">{parsedDescription.title1}</h2></div>
            <p className="text-gray-600">{parsedDescription.content1}</p>
          </div>
          <div>
            <div className="flex items-center mb-4"><Target className="w-6 h-6 text-black mr-2" /><h2 className="text-xl font-bold">{parsedDescription.title2}</h2></div>
            <p className="text-gray-600">{parsedDescription.content2}</p>
          </div>
        </div>
      </section>

  
      {/* Milestones Section */}
      <section className="bg-[#f9f9f9] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Section Header */}
          <h4 className="text-sm uppercase text-gray-400 font-semibold tracking-wide mb-2">
            Our History
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Milestones That Define Us
          </h2>

          {/* Timeline Line for desktop */}
          <div className="hidden lg:block  relative top-4 left-0 w-full h-1 bg-gray-200 z-0"></div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10 lg:grid-cols-5">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center  text-center group "
              >
                {/* Timeline Circle */}
                <div className="w-8 h-8 hidden lg:block  md:w-6 md:h-6 bg-[#33ef4f] border-4 border-white rounded-full shadow-lg mb-4 md:mb-2 relative z-20 transition-transform duration-500 group-hover:scale-110"></div>

                {/* Card with visible border and fixed height */}
                <div className="relative  overflow-hidden  w-full  max-w-[300px] p-4 flex flex-col justify-center h-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                  <h4 className=" text-sm md:text-lg font-bold uppercase text-orange-500 mb-0 md:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600  text-sm md::text-base leading-snug">
                    {item.description}
                  </p>

                  {/* Hover Animated Left Border */}
                  <span className="absolute left-0 top-0 h-0 w-1 bg-orange-500 transition-all duration-500 group-hover:h-full"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>




      {/* Homebuying Steps */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-sm uppercase text-gray-400 font-semibold tracking-wide">Our Process</h4>
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold md:font-light mb-8">Homebuying Steps</h2>
            {steps.map((step, idx) => (
              <div key={idx} onMouseEnter={() => setActiveIndex(idx)} className="group cursor-pointer mb-6">
                <div className="border-l-4 pl-4 transition-all duration-300 ease-in-out group-hover:border-[#7a982c] border-gray-200">
                  <h3 className="text-2xl font-sans mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-md">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[activeIndex].image}
                src={steps[activeIndex].image}
                alt="Home Step"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
