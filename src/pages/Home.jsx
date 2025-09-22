import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Heart, Briefcase, User, Globe, Building, Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
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
    const nav = useNavigate();
    const [sections, setSections] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // API data sections
    const firstSection = sections.find((s) => s.sectionName === "first-home");
    const introSection = sections.find((s) => s.sectionName === "IntroSection-2");
    const residentialSection = sections.find((s) => s.sectionName === "ResidentialSection");
    const projectSection = sections.find((s) => s.sectionName === "ProjectSection");
    const videoSection = sections.find((s) => s.sectionName === "VideoSection");
    const investSection = sections.find((s) => s.sectionName === "InvestSection-2");
    const luxuriousSection = sections.find((s) => s.sectionName === "LuxuriousSection");
    const articlesSection = sections.find((s) => s.sectionName === "ArticalsSection");
    const homeActual = sections.find((s) => s.sectionName === "HomeActual");
    const plotSizeSection = sections.find((s) => s.sectionName === "PlotSizeSection");
    const nucsaSection = sections.find((s) => s.sectionName === "NucsaSection");
    const homeContactSection = sections.find((s) => s.sectionName === "HomeContactSection");

    // Features list
    const features = [
        { icon: <Heart className="text-orange-600 w-8 h-8 mb-2" />, text: projectSection?.content.features.discribe1 },
        { icon: <Briefcase className="text-orange-600 w-8 h-8 mb-2" />, text: projectSection?.content.features.discribe2 },
        { icon: <User className="text-orange-600 w-8 h-8 mb-2" />, text: projectSection?.content.features.discribe3 },
        { icon: <Globe className="text-orange-600 w-8 h-8 mb-2" />, text: projectSection?.content.features.discribe4 },
    ];




  

    // Fetch data
    useEffect(() => {
        axios
            .get("https://anugrah-main-backend.onrender.com/api/home")
            .then((res) => setSections(res.data))
            .catch((err) => console.error("Error fetching home data", err));
    }, []);

    // Slideshow auto
    useEffect(() => {
        if (!firstSection?.images?.length) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1 === firstSection.images.length ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [firstSection?.images]);

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
            <HomeActualImg homeActual={homeActual} />


            {/* Plot size section 10 */}
            



            <PlotImage  />


            {/* Plot Nucsa Section 11 */}

            <PlotNucsa  />






            {/* <Contact /> */}
            <ContactHome />






        </div>
    );
}
