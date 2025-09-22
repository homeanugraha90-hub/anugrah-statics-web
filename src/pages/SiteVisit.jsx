import React, { useRef, useState } from "react";
import siteVisitImg from "../assets/gate-1.png";
import emailjs from "@emailjs/browser";

const SiteVisit = () => {
  const form = useRef(null);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Convert YYYY-MM-DD -> DD/MM/YYYY
  const formatDateToIndian = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // ✅ Convert HH:MM -> h:mm AM/PM
  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return "";
    let [hours, minutes] = timeString.split(":");
    hours = parseInt(hours, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      setError(
        "Please consent to storing your submitted information as per the DPDPA."
      );
      return;
    }
    setError("");
    setLoading(true);

    // ✅ Format input values
    const formattedDate = formatDateToIndian(formData.date);
    const formattedTime = formatTimeTo12Hour(formData.time);

    // ✅ Current system date/time in Indian format
    const currentDate = new Date();
    const userdate = currentDate.toLocaleDateString("en-IN"); // DD/MM/YYYY
    const usertime = currentDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const emailData = {
      from_name: "Anugrah Homes",
      web_name: "Anugrah Homes",
      message: `
        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Visit Date: ${formattedDate}
        Visit Time: ${formattedTime}
        Message: ${formData.message}
        Submitted On: ${userdate} at ${usertime}
      `,
    };

    emailjs
      .send(
        "service_d7iarfv", // Your EmailJS Service ID
        "template_zzgorrr", // Your EmailJS Template ID
        emailData,
        "cD8XBmJIzmsXY6T3j" // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Your site visit request has been sent successfully!");
          form.current?.reset();
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: "",
          });
          setConsent(false);
          setTimeout(() => setSuccess(""), 4000);
        },
        (error) => {
          setLoading(false);
          setError("Failed to send request. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative md:h-[400px] lg:h-[500px] h-[300px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${siteVisitImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold">
            Schedule Your Site Visit
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text:sm md:text-lg">
            Experience the location, explore the amenities, and see your dream
            plot in person.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section id="site-visit-form" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Book Your Site Visit
          </h2>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-xl p-8"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 w-full"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests?"
              rows="4"
              className="border rounded-lg px-4 py-3 w-full md:col-span-2"
            ></textarea>

            {/* Consent Checkbox */}
            <div className="md:col-span-2 flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-6 h-6 accent-blue-600 cursor-pointer rounded"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I consent to having this website store my submitted information
                as per the{" "}
                <strong>
                  Digital Personal Data Protection Act, 2023 (DPDPA)
                </strong>
                .
              </label>
            </div>

            {/* Messages */}
            {error && (
              <p className="md:col-span-2 text-red-500 text-sm">{error}</p>
            )}
            {success && (
              <p className="md:col-span-2 text-green-600 text-sm">{success}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg md:col-span-2 hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Schedule Visit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SiteVisit;
