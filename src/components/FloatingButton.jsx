import React from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/site-visit") {
      const el = document.getElementById("site-visit-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      setTimeout(() => {
        document.getElementById("site-visit-form")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    } else {
      navigate("/site-visit#site-visit-form");
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Schedule Site Visit"
      className="group fixed right-4 top-1/2 transform -translate-y-1/2 
                 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 
                 flex items-center justify-center"
    >
      <CalendarDays className="w-6 h-6" />

      {/* Tooltip Label */}
      <span
        className="absolute right-full mr-3 whitespace-nowrap 
                   bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-medium 
                   px-4 py-1.5 rounded-md shadow-md 
                   opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-500 ease-out"
      >
        Schedule Site Visit
      </span>
    </button>
  );
};

export default FloatingButton;
