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

export default function ContactSection() {
  return (
    <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12">
      {/* Contact Form */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          ></textarea>

          <button
            type="button"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

        {/* Address */}
        <div className="flex items-start gap-4 mb-5">
          <FaMapMarkerAlt className="text-2xl text-orange-600 mt-1" />
          <p className="text-gray-700">
            Anugrah Homes, Jattari,
            Aligarh Palwal Road,
            Uttar Pradesh 202137
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 mb-5">
          <FaEnvelope className="text-2xl text-orange-600" />
          <a
            href="mailto:info@anugrahhomes.com"
            className="text-orange-700 font-medium hover:underline"
          >
            info@anugrahhomes.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 mb-8">
          <FaPhoneAlt className="text-2xl text-orange-600" />
          <span className="text-gray-700 font-medium">+917678279151 , +919115253545</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://www.facebook.com/anugrahhomesjattari1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaFacebookF className="text-orange-600 text-lg" />
          </a>
          <a
            href="https://x.com/anugrahomes01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaTwitter className="text-orange-600 text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/anugrah-homes-jattari-2bba65383/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaLinkedinIn className="text-orange-600 text-lg" />
          </a>
          <a
            href="https://www.instagram.com/anugr_ahhomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaInstagram className="text-orange-600 text-lg" />
          </a>
          <a
            href="https://www.pinterest.com/anugrahomes01/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaPinterestP className="text-orange-600 text-lg" />
          </a>
          <a
            href="https://www.youtube.com/@AnugrahHomes-Jattar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow hover:bg-orange-100 transition"
          >
            <FaYoutube className="text-orange-600 text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
