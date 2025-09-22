import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

/**
 * Responsive Chatbot:
 * - mobile & tablet (lg:hidden): full-width bottom bar with two halves: Call / Whatsapp
 * - desktop & larger (hidden lg:block): small floating bot toggle, expands to a small panel
 */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+919115253545";
  const whatsappLink = "https://wa.me/+919115253545";

  return (
    <>
      {/* ------------------------
          Mobile & Tablet: Full bottom bar
          visible on screens < lg (lg:hidden)
         ------------------------ */}
      <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden">
        <div className="flex w-full max-w-[1400px] mx-auto">
          {/* Call button - left half */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex-1 flex items-center justify-center gap-3 py-4 font-semibold text-white bg-sky-700 hover:bg-sky-800 transition"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">Call Us</span>
          </a>

          {/* WhatsApp button - right half */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-4 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition"
            aria-label="Message on WhatsApp"
          >
            {/* small inline svg whatsapp icon (reliable) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.9 11.9 0 0012 .5 11.89 11.89 0 001.5 12c0 2.1.55 4.08 1.6 5.85L.5 23.5l5.94-2.03A11.91 11.91 0 0012 23.5c6.58 0 11.98-5.35 11.98-11.98 0-3.2-1.25-6.2-3.46-8.04zM12 21.5c-1.05 0-2.08-.2-3-.58l-.22-.09L5 20l1.29-3.85-.1-.23A9.07 9.07 0 013 12 9 9 0 0112 3a9.05 9.05 0 016.42 2.66A8.94 8.94 0 0121 12c0 4.97-4.03 9-9 9z" />
              <path d="M17.3 14.2c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.23-.65.08-1.02-.5-2.04-1.83-2.81-3.16-.22-.38.22-.35.64-1.16.07-.17.04-.31-.02-.46-.07-.15-.68-1.63-.94-2.24-.25-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.31-.28.24-1.05 1.03-1.05 2.5s1.08 2.9 1.22 3.1c.14.2 2.1 3.2 5.1 4.48 3 1.28 3 0.85 3.55-0.8.55-1.66.55-2.92.38-3.2-.17-.28-.5-.4-.8-.55z" />
            </svg>
            <span className="text-lg">Whatsapp</span>
          </a>
        </div>
      </div>

      {/* ------------------------
          Desktop & Large: Floating bot and panel
          visible on screens >= lg
         ------------------------ */}
      <div className="hidden lg:block">
  <div className="fixed z-50 left-6 bottom-6">
    {/* Toggle button (when panel closed) */}
    {!isOpen && (
      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    )}

    {/* Panel */}
    <div
      className={`absolute bottom-14 left-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300
      ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
      style={{ willChange: "transform, opacity" }}
      role="dialog"
      aria-modal="false"
    >
      {/* Header */}
      <div className="bg-orange-600 text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle size={18} />
          <h4 className="font-semibold">Chat With Us</h4>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded hover:bg-orange-700/20 transition"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-700">
          Choose how you’d like to connect with us:
        </p>

        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-sky-50 transition"
          aria-label="Call us"
        >
          <Phone className="text-orange-600" size={18} />
          <span className="font-medium text-gray-800">Call Us Now</span>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-emerald-50 transition"
          aria-label="Message on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.9 11.9 0 0012 .5 11.89 11.89 0 001.5 12c0 2.1.55 4.08 1.6 5.85L.5 23.5l5.94-2.03A11.91 11.91 0 0012 23.5c6.58 0 11.98-5.35 11.98-11.98 0-3.2-1.25-6.2-3.46-8.04zM12 21.5c-1.05 0-2.08-.2-3-.58l-.22-.09L5 20l1.29-3.85-.1-.23A9.07 9.07 0 013 12 9 9 0 0112 3a9.05 9.05 0 016.42 2.66A8.94 8.94 0 0121 12c0 4.97-4.03 9-9 9z" />
            <path d="M17.3 14.2c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.23-.65.08-1.02-.5-2.04-1.83-2.81-3.16-.22-.38.22-.35.64-1.16.07-.17.04-.31-.02-.46-.07-.15-.68-1.63-.94-2.24-.25-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.31-.28.24-1.05 1.03-1.05 2.5s1.08 2.9 1.22 3.1c.14.2 2.1 3.2 5.1 4.48 3 1.28 3 0.85 3.55-0.8.55-1.66.55-2.92.38-3.2-.17-.28-.5-.4-.8-.55z" />
          </svg>
          <span className="font-medium text-gray-800">Message on WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
