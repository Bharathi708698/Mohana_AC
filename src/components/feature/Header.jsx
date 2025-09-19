import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../base/Button";
import { Logo } from "../../utils/image_distributor";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "py-1" : "py-4"
      } transition-all duration-500 ease-in-out`}
    >
      <div
        className={`mx-auto bg-white/30 backdrop-blur-md backdrop-saturate-150 border border-white/20 shadow-lg flex items-center justify-between transition-all duration-500 ease-in-out px-4`}
        style={{
          maxWidth: isScrolled ? "768px" : "100%",
          borderRadius: isScrolled ? "9999px" : "9999px",
          paddingLeft: isScrolled ? "1rem" : "1.5rem",
          paddingRight: isScrolled ? "1rem" : "1.5rem",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img className="rounded-xl" src={Logo} />
          </div>
          <span
            className={`hidden md:inline font-bold text-gray-800 transition-opacity duration-500 ${
              isScrolled ? "opacity-0 w-0" : "opacity-100 w-auto text-xl"
            }`}
            style={{
              fontFamily: '"Pacifico", serif',
            }}
          >
            Mohana AC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                isScrolled ? "text-sm" : "text-base"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/" className="p-2">
            <i className="ri-home-line text-gray-700 text-lg"></i>
          </Link>
          <Link to="/about-us" className="p-2">
            <i className="ri-information-line text-gray-700 text-lg"></i>
          </Link>
          <Link to="/services" className="p-2">
            <i className="ri-customer-service-2-line text-gray-700 text-lg"></i>
          </Link>
          <Link to="/contact-us" className="p-2">
            <i className="ri-phone-line text-gray-700 text-lg"></i>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button
            size={
              isScrolled
                ? "sm"
                : screenWidth >= 768
                ? "xl" // only use xl on larger screens
                : "sm"
            }
            onClick={() => scrollToSection("contact")}
            className="transition-all duration-300"
          >
            {isScrolled ? (
              "Book"
            ) : (
              <>
                <span className="hidden sm:inline">Book Service</span>
                <span className="sm:hidden">Book</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
