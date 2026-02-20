import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import logo from "../../assets/images/faviconn.png";
import logotext from "../../assets/images/logoblack.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isLightPage = ['/projects', '/services', '/contact'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkNav = scrolled || isLightPage;

  const navLinks = [
    { name: "The Studio", path: "/about" },
    { name: "Expertise", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Inquire", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 ${
          isDarkNav 
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              className="h-8 w-auto transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]" 
              alt="Logo" 
            />
            <img 
              src={logotext} 
              alt="logo-text" 
              className={`h-6 w-auto hidden md:block transition-all duration-500 ${
                isDarkNav 
                  ? "brightness-0 opacity-100" 
                  : "invert brightness-0 invert opacity-100 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]" 
              }`} 
            />
          </Link>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => setSearchOpen(true)}
              className={`text-xl transition-colors duration-300 ${isDarkNav ? "text-[#003152]" : "text-white"} hover:opacity-50`}
            >
              <FiSearch />
            </button>

            <button onClick={() => setMenuOpen(true)} className="group flex items-center gap-3">
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-300 ${isDarkNav ? "text-[#003152]" : "text-white"}`}>
                Menu
              </span>
              <HiMenuAlt4 className={`text-3xl ${isDarkNav ? "text-[#003152]" : "text-white"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY BACKGROUND */}
      <AnimatePresence>
        {(menuOpen || searchOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setMenuOpen(false); setSearchOpen(false); }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* FULL-HEIGHT SIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] lg:w-[40%] z-[200] bg-white text-[#003152] shadow-2xl flex flex-col p-10 md:p-16"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-300 font-barlow">Navigation</span>
              <button onClick={() => setMenuOpen(false)} className="group flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-barlow">Close</span>
                <HiX className="text-3xl group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* This flex-grow ensures the footer stays at the very bottom */}
            <div className="flex-grow flex flex-col justify-center">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl md:text-6xl font-light tracking-tighter hover:italic hover:translate-x-4 transition-all duration-500 block py-4 border-b border-gray-50 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer anchored at the bottom */}
            <div className="mt-auto pt-10 border-gray-100 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-300 uppercase mb-4 font-barlow">Connect</p>
                <div className="flex flex-col gap-2 text-sm font-medium font-barlow">
                  <a href="#" className="hover:text-blue-600 transition">Instagram</a>
                  <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>

                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-300 uppercase mb-4 font-barlow">Studio</p>
                <p className="text-sm font-light text-gray-500 leading-relaxed font-barlow">
                  Victoria Island, <br /> Lagos, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] lg:w-[40%] z-[200] bg-[#fcfcfc] shadow-2xl flex flex-col p-10 md:p-16"
          >
            <div className="flex justify-end mb-20">
              <button onClick={() => setSearchOpen(false)} className="text-3xl hover:rotate-90 transition-transform duration-500 text-[#003152]">
                <HiX />
              </button>
            </div>
            <div className="w-full">
              <input 
                autoFocus
                type="text" 
                placeholder="Search archive..." 
                className="w-full text-4xl font-light tracking-tighter border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-[#003152] transition-colors font-barlow text-[#003152]"
              />
              <div className="mt-16">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-8 font-barlow">Quick Links</h4>
                <ul className="space-y-6 text-xl font-light font-barlow">
                  {['Residential', 'Commercial', 'Visualization'].map((item) => (
                    <li key={item} className="group cursor-pointer flex items-center gap-4 hover:translate-x-2 transition-transform text-[#003152]">
                      <div className="w-6 h-[1px] bg-gray-200 group-hover:w-10 group-hover:bg-[#003152] transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;