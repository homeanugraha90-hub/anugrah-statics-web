import React from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // If already on sitevisit page, try to scroll directly
    if (location.pathname === "/site-visit") {
      const el = document.getElementById("site-visit-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      // fallback small delay
      setTimeout(() => {
        document.getElementById("site-visit-form")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    } else {
      // Navigate to /site-visit with hash — SiteVisit will catch the hash and scroll
      navigate("/site-visit#site-visit-form");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Schedule Site Visit"
      className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50"
    >
      <CalendarDays className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
