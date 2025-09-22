import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Define different nav links based on page
  const navConfig = {
    "/": ["Home", "About", "Why Jewar", "Media", "Price", "Contact Us"],
    "/about": ["Home", "About", "Why Jewar", "Media", "Price", "Contact Us"],
    "/why-jewar": ["Home","Amenities", "Why Jewar", "Faq"],
    "/contact": ["Home", "Contact Us", "Privacy Policy"],
    "/media": ["Home", "Media", "Contact Us"],
    "/price": ["Home", "Price", "Contact Us"],
  };

  const allLinks = {
    Home: { path: "/" },
    About: { path: "/about" },
    "Why Jewar": { path: "/why-jewar" },
    Amenities: { path: "/amenities" },
    Faq: { path: "/faq" },
    Media: { path: "/media" },
    Price: { path: "/price" },
    "Contact Us": { path: "/contact" },
    "Privacy Policy": { path: "/privacy-policy" },
  };

  // Pick links based on current path
  const activeLinks =
    navConfig[location.pathname] || ["Home", "About", "Contact Us"];

  // Handle scroll effect
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY <= 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-white" : "bg-white shadow-md"}`}
    >
      <div className="w-screen md:px-16 px-10 py-2 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Quarter Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {activeLinks.map((name, index) => {
            const link = allLinks[name];
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`text-xl font-stretch-extra-expanded transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {name}
              </Link>
            );
          })}

          {/* Add Listing Button */}
          <button
            onClick={() => navigate("/site-visit")}
            className="ml-4 bg-orange-500 text-white font-medium 
            px-7 py-3 rounded-sm hover:bg-orange-600 transition"
          >
            Site Visit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 flex-shrink-0"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-t transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {activeLinks.map((name, index) => {
            const link = allLinks[name];
            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-gray-800 font-stretch-extra-expanded text-lg hover:text-orange-500 transition"
              >
                {name}
              </Link>
            );
          })}

          <button
            onClick={() => navigate("/site-visit")}
            className="w-full bg-orange-500 text-white font-medium px-5 py-3 rounded-sm hover:bg-orange-600 transition"
          >
            Site Visit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
