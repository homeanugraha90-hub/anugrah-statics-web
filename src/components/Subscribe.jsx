// Subscribe.js
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
      // Integrate EmailJS or backend API here
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-[#1d1e22]     max-w-[50vh] pt-6 min-w-[20vh]   mx-auto rounded-lg text-gray-300 shadow-lg">
      <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 text-left md:text-left">
        Subscribe
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 ">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded bg-white border border-gray-600 text-black w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#e95115] text-white px-5 py-2 rounded hover:bg-orange-500 transition text-center sm:text-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
