import React from "react";
import img from "../assets/gate-1.png"
export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gray-50 py-16  ">
      <div className="relative bg-cover bg-center md:h-[400px] lg:h-[500px] h-[300px] flex items-center justify-center text-white" style={{ backgroundImage: `url(${img})` }}>
        <div className="relative z-10 text-center text-white px-4 h-full w-full flex flex-col items-center justify-center bg-black/50">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm md:text-base"><span className="text-gray-300">Home</span> &gt; Privacy Policy</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-base md:text-lg mb-8 text-center">
          At <span className="font-semibold text-orange-600">Anugrah Homes</span>,
          we value your trust. This Privacy Policy explains how we handle your
          personal data and safeguard your privacy.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect your personal details like <strong>Name</strong>,
            <strong> Mobile Number</strong>, <strong>Email</strong>, <strong>City</strong>,
            and <strong>Query</strong>. This information is only used to provide
            updates, respond to your queries, and offer services you request.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">
            Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or share your personal information with any
            third-party companies. Your data is used only for communication and
            service-related purposes.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">
            Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This website is not an official website of the developer. It belongs
            to an authorized channel partner and is intended solely for
            informational purposes.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-3">
            Webmaster Notice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All images, graphics, and content are believed to be from the public
            domain. If you own any material and wish it to be removed, please
            contact us. We will promptly remove it from our website.
          </p>
        </div>

        {/* Last Updated */}
        <p className="text-gray-500 text-sm text-center mt-10">
          Last Updated: January 2025
        </p>
      </div>
    </section>
  );
}
