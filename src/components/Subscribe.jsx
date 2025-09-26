// Subscribe.js
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
      // Here you can integrate EmailJS or your backend API to save the email
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-[#1d1e22]  pt-8 md:w-80 rounded-lg text-gray-300">
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">Subscribe</h3>
      {/* <p className="text-sm sm:text-base mb-4">
        Get the latest updates about plots, offers, and news directly in your inbox.
      </p> */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded bg-white border border-gray-600 text-black w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#e95115] text-white px-4 py-2 rounded hover:bg-orange-500 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
