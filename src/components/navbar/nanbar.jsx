import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaPinterestP, FaInstagram, FaYoutube, FaChevronRight } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa6";
import logo from "../../assets/images/faviconn.png";
import logotext from "../../assets/images/logoblack.png";

// Centralized data for the search overlay
const searchData = {
  categories: [
    { name: "All", count: 20 },
    { name: "Projects", count: 50 },
    { name: "News", count: 20 },
    { name: "Video", count: 240 },
    { name: "People", count: 50 },
    
  ],
  recommendedSearches: [
    { title: "Urban Architecture Concepts" },
    { title: "Sustainable Office Designs" },
    { title: "Industrial Equipment Innovations" },
    { title: "Smart Home Automation Systems" },
    { title: "Corporate Branding Strategies" },
    { title: "AI-driven Product Development" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={logo} className="h-10 w-auto" alt="Logo" />
            </Link>
            <img
              src={logotext}
              alt="logo-text"
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled ? "filter-none" : "filter invert"
              }`}
            />
            
          </div>

          {/* Right side: Search + Menu */}
          <div className="flex items-center space-x-4">
            <FiSearch
              onClick={() => setSearchOpen(true)}
              className={`text-2xl cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            />
            <button onClick={() => setMenuOpen(true)}>
              <HiMenu
                className={`w-7 h-7 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Overlay Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 h-full w-full bg-white z-50 flex flex-col justify-between shadow-lg md:w-1/2 md:right-0 md:left-auto"
          >
            {/* Header inside overlay */}
            <div className="flex justify-end items-center px-6 py-4 space-x-4">
              <FiSearch
                onClick={() => {
                  setSearchOpen(true);
                  setMenuOpen(false); // Close the menu when opening the search overlay
                }}
                className="text-2xl cursor-pointer text-gray-800"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black transition"
              >
                <HiX className="w-6 h-6 text-gray-800 hover:text-white" />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-col space-y-8 px-10 mt-6 mb-10 text-3xl font-barlow">
              <span className="text-sm font-semibold tracking-wider text-gray-400">
                MENU
              </span>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Expertise
              </Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>

            {/* Sidebar Footer */}
            <div className="px-10 py-6 border-t border-gray-200">
              <div className="flex space-x-4 mb-4 text-gray-600">
                <a href="#" className="hover:text-black">
                  <FaPinterestP size={18} />
                </a>
                <a href="#" className="hover:text-black">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="hover:text-black">
                  <CiLinkedin size={20} />
                </a>
                <a href="#" className="hover:text-black">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="hover:text-black">
                  <SlSocialFacebook size={18} />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Rock Design Studio
                </p>
                <button
                  onClick={scrollToTop}
                  className="p-2 rounded-full border border-gray-300 hover:bg-black transition"
                >
                  <FaArrowUp
                    className="text-gray-700 hover:text-white"
                    size={14}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Overlay - Conditional Rendering */}
        {searchOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col p-4 md:p-8 font-sans md:left-1/2 md:w-1/2 md:h-full md:shadow-lg">
            {/* Top bar with logo and close icon */}
            <div className="flex justify-between items-center mb-8">
             <Link to="/">
               <img src={logotext} className="h-10 w-auto" alt="Logo" />
             </Link>
              <button onClick={() => setSearchOpen(false)} className="p-2">
                <HiX className="text-gray-800 text-3xl" />
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center mb-6 border-b border-gray-400 pb-2">
              <input
                type="text"
                placeholder="Type here to search"
                className="w-full text-2xl md:text-3xl text-gray-800 focus:outline-none placeholder-gray-400"
              />
            </div>

            {/* Categories and counts */}
            <div className="flex flex-wrap text-sm md:text-base font-medium text-gray-600 mb-6 gap-2">
              {searchData.categories.map((category, index) => (
                <span
                  key={index}
                  className={`${category.name === "All" ? "text-black" : "hover:text-black cursor-pointer"}`}
                >
                  {category.name}{" "}
                  <span className="text-red-500">{category.count}</span>
                </span>
              ))}
            </div>

            {/* Recommended searches */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg md:text-xl text-gray-800 mb-2">Recommended searches</h3>
              {searchData.recommendedSearches.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                >
                  <FaChevronRight className="mr-2 text-red-500 text-sm" />
                  <span className="text-sm md:text-base">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;