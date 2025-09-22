import React from "react";
import { CheckCircle } from "lucide-react"; // success icon

const ThankYouPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-lg w-full p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Connecting!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We have received your details. One of our real estate experts will
          reach out to you shortly with the best property options.
        </p>

        {/* Next Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Back to Home
          </a>
          <a
            href="/media"
            className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
          >
            Explore Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
