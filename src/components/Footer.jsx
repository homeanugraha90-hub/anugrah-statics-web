import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaPinterestP,FaAddressCard,FaEnvelope } from "react-icons/fa";
import { Phone, PhoneCall } from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1d1e22] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Anugrah Homes</h2>
          <p className="text-sm leading-6">
            Your trusted real estate channel partner. We provide transparent
            and professional services to help you find your dream home.
          </p>
        </div>

        {/* Quick Links */}
     <div className="flex flex-col">
      <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-[#c54910]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#c54910]">About Us</Link></li>
          <li><Link to="/why-jewar" className="hover:text-[#c54910]">Why Jewar</Link></li>
          <li><Link to="/amenities" className="hover:text-[#c54910]">Amenities</Link></li>
          <li><Link to="/media" className="hover:text-[#c54910]">Media</Link></li>
        </ul>

        <ul className="space-y-2">
          <li><Link to="/price" className="hover:text-[#c54910]">Price</Link></li>
          <li><Link to="/faq" className="hover:text-[#c54910]">FAQ</Link></li>
          <li><Link to="/contact" className="hover:text-[#c54910]">Contact</Link></li>
          <li><Link to="/site-visit" className="hover:text-[#c54910]">Site Visit</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-[#c54910]">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>


        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-md">
            <li className="flex  justify-center "><FaAddressCard className="inline-block mr-1   mt-1"/> <p className="inline-block "> 
              123 Main Street, Jattari, Uttar Pradesh, India
              </p> 
              </li>
            <li><Phone className="inline-block mr-1 w-4 h-4" /> +917678279151 </li>
            <li><FaEnvelope className="inline-block mr-1" /> info@anugrahhomes.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/anugrahhomesjattari1/" className="hover:text-[#c54910]"><FaFacebookF /></a>
            <a href="https://www.instagram.com/anugr_ahhomes/" className="hover:text-[#c54910]"><FaInstagram /></a>
            <a href="https://x.com/anugrahomes01" className="hover:text-[#c54910]"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/anugrah-homes-jattari-2bba65383/" className="hover:text-[#c54910]"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@AnugrahHomes-Jattar" className="hover:text-[#c54910]"><FaYoutube /></a>
            <a href="https://www.pinterest.com/anugrahomes01/" className="hover:text-[#c54910]"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Anugrah Homes</span>. All rights reserved.
        </p>
        <p className="mt-2 max-w-4xl mx-auto text-[11px]">
          Disclaimer: This website belongs solely to Anugrah Homes and Maxpine Group.
        </p>
        <p className="mt-2 max-w-4xl mx-auto text-[11px]">
            All images on this website are owned by Anugrah Homes. No one is allowed to use, copy, download, or distribute these images without explicit permission. Any unauthorized use is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}
