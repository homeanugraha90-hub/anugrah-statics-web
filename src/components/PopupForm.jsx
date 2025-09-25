import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// --- CONFIG: replace with your EmailJS values ---
const EMAILJS_SERVICE_ID = "service_d7iarfv";
const EMAILJS_TEMPLATE_ID = "template_zzgorrr";
const EMAILJS_PUBLIC_KEY = "cD8XBmJIzmsXY6T3j";

export default function ModernPopupForm() {
  const [visible, setVisible] = useState(true); // For demo
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  // Show popup only once
  useEffect(() => {
    const shown = localStorage.getItem("popupFormShown");
    if (!shown) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const close = (remember = true) => {
    setVisible(false);
    if (remember) localStorage.setItem("popupFormShown", "1");
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) return "Full name is required";
        if (!formData.email.trim()) return "Email is required";

        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
          return "Invalid email format";
        if (!formData.propertyType.trim()) return "Please select a property type";
        return "";
      case 2:
        if (formData.phone.trim() === "") {
          return "Fill the phone number";
        } else if (formData.phone.length < 10) {
          return "Enter all digits of phone number";
        }
        return "";



      default:
        return "";
    }
  };

  const nextStep = () => {
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const onSubmit = async () => {
    setError("");

    const finalError = validateStep(1) || validateStep(2);
    if (finalError) return setError(finalError);

    setLoading(true);

    const date = new Date();
    const userdate = date.toLocaleDateString();
    const usertime = date.toLocaleTimeString();

    const emailData = {
      from_name: "Anugrah Homes",
      web_name: "Anugrah Homes",
      message: `
        Name: ${formData.name} ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Property Type: ${formData.propertyType}
        Date: ${userdate}
        Time: ${usertime}
      `,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setDone(true);
      localStorage.setItem("popupFormShown", "1");
      setTimeout(() => setDone(false), 4000);
      setTimeout(() => setVisible(false), 2000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setLoading(false);
      setError("Failed to send message. Please try again later.");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 animate-fadeIn overflow-y-auto">
      {/* Enhanced Backdrop with Blur */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm"
        onClick={() => close(true)}
      />

      {/* Modern Popup Container - Fully Responsive */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto transform transition-all duration-300 scale-100 hover:scale-[1.01] sm:hover:scale-[1.02] my-4 max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 text-white relative overflow-hidden flex-shrink-0">
          {/* Decorative Elements - Hidden on mobile for cleaner look */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 sm:-translate-y-16 sm:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full translate-y-6 -translate-x-6 sm:translate-y-10 sm:-translate-x-10"></div>

          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 z-10"
            onClick={() => close(true)}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Anugrah Homes</h2>
            <p className="text-white/90 text-xs sm:text-sm">Find your dream property with us</p>
          </div>
        </div>



        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {done ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-sm sm:text-base text-gray-600">We've received your inquiry and will contact you soon.</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-3 sm:space-y-4 animate-slideIn">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Personal Information</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name *</label>
                        <input
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 py-2.5 sm:px-4 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number *</label>
                        <input
                          type="tel"

                          value={formData.phone}
                          onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, "");
                            if (val.length > 13) val = val.slice(0, 13);
                            updateField("phone", val);
                          }}
                          className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 py-2.5 sm:px-4 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 py-2.5 sm:px-4 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>


                    {/* Property Type */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Property Type</label>
                      <select
                        value={formData.propertyType}
                        required
                        onChange={(e) => updateField("propertyType", e.target.value)}
                        className="w-full rounded-lg sm:rounded-xl border border-gray-300 px-3 py-2.5 sm:px-4 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="plot">Plot</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>

                  </div>
                )}


                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-3">
                    <p className="text-xs sm:text-sm text-red-600">{error}</p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-3 sm:pt-4">


                  

                  {step < 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Next
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onSubmit}
                      disabled={loading}
                      className="flex items-center px-5 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>


                          Submit
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Skip Option */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => close(true)}
                    className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}