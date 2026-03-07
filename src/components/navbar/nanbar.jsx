import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import logo from "../../assets/images/faviconn.png";
import logotext from "../../assets/images/logoblack.png";

// ─── SEARCHABLE DATA ──────────────────────────────────────────────────────────
// Add your real projects here as they grow

const searchData = [
  // Pages
  { type: 'Page', title: 'The Studio', desc: 'About Rock Dezign', path: '/about' },
  { type: 'Page', title: 'Expertise', desc: 'Our services and capabilities', path: '/services' },
  { type: 'Page', title: 'Projects', desc: 'Browse all projects', path: '/projects' },
  { type: 'Page', title: 'Contact', desc: 'Get in touch with us', path: '/contact' },

  // Services
  { type: 'Service', title: 'Residential', desc: 'Private homes and housing developments', path: '/services' },
  { type: 'Service', title: 'Commercial Architecture', desc: 'Offices, malls and retail spaces', path: '/services' },
  { type: 'Service', title: 'Institutional Architecture', desc: 'Educational, civic and organizational buildings', path: '/services' },
  { type: 'Service', title: 'Interior Design', desc: 'Carefully crafted interior spaces', path: '/services' },
  { type: 'Service', title: '3D Visualization', desc: 'High quality renders and animations', path: '/services' },
  { type: 'Service', title: 'Renovation & Remodelling', desc: 'Transforming existing spaces', path: '/services' },

  // Projects — add real ones here
  { type: 'Project', title: 'Montessori School', desc: 'Educational · Lagos', path: '/projects' },
  { type: 'Project', title: 'Porto Rico Residence', desc: 'Residential · Lagos', path: '/projects' },
];

const TYPE_COLORS = {
  Page:    'bg-[#003152]/8 text-[#003152]',
  Service: 'bg-gray-100 text-gray-500',
  Project: 'bg-gray-100 text-gray-500',
};

// ─── NAV LINKS ────────────────────────────────────────────────────────────────

const navLinks = [
  { name: "The Studio", path: "/about" },
  { name: "Expertise",  path: "/services" },
  { name: "Projects",   path: "/projects" },
  { name: "Inquire",    path: "/contact" },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [query,      setQuery]      = useState('');
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isLightPage = ['/projects', '/services', '/contact'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQuery('');
  }, [location.pathname]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!searchOpen) setQuery('');
  }, [searchOpen]);

  // Keyboard: ESC closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); setSearchOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isDarkNav = scrolled || isLightPage;

  // Filter results
  const results = query.trim().length > 0
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleResultClick = (path) => {
    navigate(path);
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 ${
        isDarkNav
          ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              className="h-8 w-auto transition-transform duration-500 group-hover:scale-110"
              alt="Logo"
            />
            <img
              src={logotext}
              alt="logo-text"
              className={`h-6 w-auto hidden md:block transition-all duration-500 ${
                isDarkNav
                  ? 'brightness-0 opacity-100'
                  : 'invert brightness-0 invert opacity-100 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]'
              }`}
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setSearchOpen(true)}
              className={`text-xl transition-colors duration-300 hover:opacity-50 ${
                isDarkNav ? 'text-[#003152]' : 'text-white'
              }`}
            >
              <FiSearch />
            </button>

            <button onClick={() => setMenuOpen(true)} className="group flex items-center gap-3">
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-300 ${
                isDarkNav ? 'text-[#003152]' : 'text-white'
              }`}>
                Menu
              </span>
              <HiMenuAlt4 className={`text-3xl ${isDarkNav ? 'text-[#003152]' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── OVERLAY BACKDROP ── */}
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

      {/* ── SIDE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] lg:w-[40%] z-[200] bg-white text-[#003152] shadow-2xl flex flex-col p-10 md:p-16"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-300 font-barlow">
                Navigation
              </span>
              <button onClick={() => setMenuOpen(false)} className="group flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-barlow">Close</span>
                <HiX className="text-3xl group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-5xl md:text-6xl font-light tracking-tighter hover:italic hover:translate-x-4 transition-all duration-500 block py-4 border-b border-gray-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-300 uppercase mb-4 font-barlow">Connect</p>
                <div className="flex flex-col gap-2 text-sm font-medium font-barlow">
                  <a href="https://www.instagram.com/rockdezign" target="_blank" rel="noreferrer" className="hover:text-[#003152]/50 transition">Instagram</a>
                  <a href="https://www.linkedin.com/company/rock-dezign" target="_blank" rel="noreferrer" className="hover:text-[#003152]/50 transition">LinkedIn</a>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-300 uppercase mb-4 font-barlow">Studio</p>
                <p className="text-sm font-light text-gray-500 leading-relaxed font-barlow">
                  No. 11, Muri Busari Close,<br />Ikeja, Lagos, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SEARCH PANEL ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full md:w-[50%] lg:w-[40%] z-[200] bg-[#fcfcfc] shadow-2xl flex flex-col p-10 md:p-16 overflow-y-auto"
          >
            {/* Close */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-300 font-barlow">
                Search
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="group flex items-center gap-3"
              >
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase font-barlow text-[#003152]">Close</span>
                <HiX className="text-3xl text-[#003152] group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-10">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full text-3xl md:text-4xl font-light tracking-tighter border-b-2 border-gray-200 pb-4 bg-transparent outline-none focus:border-[#003152] transition-colors font-barlow text-[#003152] placeholder-gray-200"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-0 bottom-4 text-gray-300 hover:text-[#003152] transition"
                >
                  <HiX size={20} />
                </button>
              )}
            </div>

            {/* ── RESULTS ── */}
            <AnimatePresence mode="wait">
              {query.trim().length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {results.length > 0 ? (
                    <>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-6 font-barlow">
                        {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                      </p>
                      <div className="flex flex-col gap-2">
                        {results.map((item, i) => (
                          <motion.button
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => handleResultClick(item.path)}
                            className="group flex items-start gap-4 p-4 hover:bg-white rounded-sm transition-all duration-300 text-left w-full border border-transparent hover:border-gray-100"
                          >
                            {/* Type badge */}
                            <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm font-barlow flex-shrink-0 mt-0.5 ${TYPE_COLORS[item.type]}`}>
                              {item.type}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-light text-[#003152] font-barlow group-hover:italic transition-all truncate">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-400 font-barlow mt-0.5 truncate">
                                {item.desc}
                              </p>
                            </div>
                            {/* Arrow */}
                            <motion.div
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                            >
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path d="M0 5H14M14 5L10 1M14 5L10 9" stroke="#003152" strokeWidth="1" strokeLinecap="round"/>
                              </svg>
                            </motion.div>
                          </motion.button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-16"
                    >
                      <p className="text-gray-300 text-sm font-barlow font-light mb-2">
                        No results for "{query}"
                      </p>
                      <p className="text-gray-200 text-xs font-barlow">
                        Try searching for a service or project name
                      </p>
                    </motion.div>
                  )}
                </motion.div>

              ) : (
                // ── DEFAULT STATE: Quick links ──
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-8 font-barlow">
                    Quick Links
                  </p>
                  <div className="flex flex-col gap-1">
                    {searchData.filter(i => i.type === 'Page').map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleResultClick(item.path)}
                        className="group flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 hover:translate-x-2 transition-transform text-left w-full"
                      >
                        <div className="w-5 h-[1px] bg-gray-200 group-hover:w-8 group-hover:bg-[#003152] transition-all duration-300" />
                        <span className="text-xl font-light text-[#003152] font-barlow tracking-tight group-hover:italic transition-all">
                          {item.title}
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-300 mt-12 mb-6 font-barlow">
                    Our Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {searchData.filter(i => i.type === 'Service').map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleResultClick(item.path)}
                        className="text-[11px] font-barlow font-bold tracking-wider uppercase px-3 py-2 border border-[#003152]/10 text-[#003152]/50 hover:border-[#003152] hover:text-[#003152] transition-all duration-300"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;