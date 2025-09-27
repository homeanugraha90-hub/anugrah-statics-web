import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const navConfig = {
    "/": ["Home", "About", "Why Jewar", "Amenities", "Media", "Price", "Contact Us"],
    "/about": ["Home", "About", "Why Jewar", "Media", "Price", "Contact Us"],
    "/why-jewar": ["Home", "Why Jewar", "Faq"],
    "/amenities": ["Home", "Amenities", "Contact Us"],
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

  const activeLinks = navConfig[location.pathname] || ["Home", "About", "Contact Us"];

  useEffect(() => {
    let ticking = false;
    let timeoutId;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setAtTop(currentScrollY <= 10);
          
          // Clear previous timeout
          if (timeoutId) clearTimeout(timeoutId);
          
          // Only hide navbar if scrolling down significantly
          if (currentScrollY > lastScrollY + 10 && currentScrollY > 100) {
            setIsHidden(true);
          } 
          // Show navbar if scrolling up or near top
          else if (currentScrollY < lastScrollY - 5 || currentScrollY < 100) {
            setIsHidden(false);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${atTop ? "bg-white" : "bg-white shadow-md"}`}
    >
      {/* Rest of your navbar code remains the same */}
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-3">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo-2.png"
            alt="Quarter Logo"
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {activeLinks.map((name, index) => {
            const link = allLinks[name];
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`text-base lg:text-lg xl:text-xl font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`}
              >
                {name}
              </Link>
            );
          })}

          <button
            onClick={() => navigate("/site-visit")}
            className="ml-2 lg:ml-4 bg-orange-500 text-white font-medium 
              px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded hover:bg-orange-600 transition text-sm lg:text-base"
          >
            Site Visit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-white border-t transition-all duration-300 ease-in-out ${
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
                className="block text-gray-800 font-medium text-lg hover:text-orange-500 transition"
              >
                {name}
              </Link>
            );
          })}

          <button
            onClick={() => navigate("/site-visit")}
            className="w-full bg-orange-500 text-white font-medium px-5 py-3 rounded hover:bg-orange-600 transition"
          >
            Site Visit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;