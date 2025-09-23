import React, { useEffect } from "react";
import { CheckCircle, Heart, Briefcase, User, Globe, Building, Ban } from "lucide-react";

import axios from "axios";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
} from "react-icons/fa";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroSection from "./Home/IntroSection";
import ResidentialSection from "./Home/ResidentialSection";
import ProjectSection from "./Home/ProjectSection";
import InvestSection from "./Home/InvestSection";
import LuxuriousSection from "./Home/LuxuriosSection";
import ArticalsSection from "./Home/ArticalsSection";
import BannerSection from "./Home/BannerSection";
import VideoSection from "./Home/VideoSection";
import HomeActualImg from "./Home/HomeActualImg";
import PlotNucsa from "./Home/PlotNucsa";
import PlotImage from "./Home/PlotImage";
import ContactHome from "./Home/ContactHome";

export default function Home() {
    
   




  

    // Fetch data
    useEffect(() => {
        axios
            .get("https://anugrah-main-backend.onrender.com/api/home")
            .then((res) => setSections(res.data))
            .catch((err) => console.error("Error fetching home data", err));
    }, []);

    // Slideshow auto
    
    return (
        <div className="font-sans text-gray-800 ">
            {/* Navbar */}
            <Navbar />



            <BannerSection  />

            {/* Intro Section */}
            <IntroSection  />

            {/* Residential */}
            <div id="services">

            <ResidentialSection    />
            </div>
            {/* Project Features */}
            <ProjectSection />

            {/* Video */}
            <VideoSection />





            {/* Invest Section in Jewar 6*/}
            <InvestSection  />


            {/* Luxurious Section 7*/}
            <LuxuriousSection />

            {/* Articals Section News  8*/}

            <ArticalsSection  />


            {/* Anugrah home actual image section 9 */}
            <HomeActualImg  />


            {/* Plot size section 10 */}
            



            <PlotImage  />


            {/* Plot Nucsa Section 11 */}

            <PlotNucsa  />






            {/* <Contact /> */}
            <ContactHome />






        </div>
    );
}
