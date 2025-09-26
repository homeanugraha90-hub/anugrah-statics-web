import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP, FaAddressCard, FaEnvelope } from "react-icons/fa";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="bg-[#1d1e22] text-gray-300">
      <div className="max-w-7xl  mx-auto px-6  pt-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className=" md:w-60">
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Anugrah Homes</h2>
          <p className="text-base  md:text-sm leading-6">
           Your trusted real estate channel partner. We provide transparent and professional services to help you find your dream home.  ensuring a seamless and stress-free experience.

          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-base  md:text-sm">
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/why-jewar" className="hover:text-white transition-colors">Why Jewar</Link></li>
              <li><Link to="/amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><Link to="/price" className="hover:text-white transition-colors">Price</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Media</Link></li>
              <li><Link to="/site-visit" className="hover:text-white transition-colors">Site Visit</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-base  md:text-sm">
            <li className="flex flex-col sm:flex-row sm:items-start gap-1">
              <FaAddressCard className="w-4 h-4 text-gray-100 mt-1" />
              <p>
                Anugrah Homes, Jattari, <br />
                Aligarh Palwal Road, <br />
                Uttar Pradesh 202137
              </p>
            </li>
            <li className="flex items-center gap-2"><FaEnvelope className="w-4 h-4 text-gray-100" /> info@anugrahhomes.com</li>
            <li className="flex flex-col sm:flex-row sm:items-start gap-1"><Phone className="w-4 h-4 text-gray-100 mt-1" /> <p>
              +917678279151 <br/> +919115253545</p></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/anugrahhomesjattari1/" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="https://www.instagram.com/anugr_ahhomes/" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="https://x.com/anugrahomes01" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/anugrah-homes-jattari-2bba65383/" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@AnugrahHomes-Jattar" className="hover:text-white transition-colors"><FaYoutube /></a>
            <a href="https://www.pinterest.com/anugrahomes01/" className="hover:text-white transition-colors"><FaPinterestP /></a>
          </div>

          <div>
            <Subscribe />
          </div>
        </div>



      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-xs sm:text-sm text-gray-400 space-y-2">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Anugrah Homes</span>. All rights reserved.
        </p>
        <p>
          Disclaimer: This website belongs solely to Anugrah Homes and Maxpine Group.
        </p>
        <p>
          All images on this website are owned by Anugrah Homes. No one is allowed to use, copy, download, or distribute these images without explicit permission. Any unauthorized use is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}
