import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiArrowRight, FiCheckCircle, FiX } from 'react-icons/fi';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { SiFiverr } from 'react-icons/si';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Secure Communication to Server
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
    }, 2000);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="bg-white relative overflow-x-hidden">
      <Helmet>
        <title>Inquiry & Consultation | Rock Dezign</title>
      </Helmet>

      {/* --- REFINED WIDE TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-10 right-5 md:right-10 z-[100] w-[90vw] md:w-[450px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex items-center gap-5">
              <div className="bg-green-50 p-2 rounded-full text-green-600">
                <FiCheckCircle size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#003152] uppercase tracking-[0.2em]">MESSAGE Received</h3>
                <p className="text-sm text-gray-500 mt-1 font-light italic">We will respond to your vision shortly.</p>
              </div>
              <button 
                onClick={() => setShowToast(false)} 
                className="text-gray-300 hover:text-[#003152] transition-colors p-1"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {/* Elegant Depleting Progress Bar */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-[3px] bg-[#003152]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative mt-8 min-h-[80vh] flex flex-col md:flex-row border-b border-gray-100">
        <div className="w-full md:w-1/2 bg-[#003152] flex flex-col justify-center px-8 md:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/50 text-xs font-bold tracking-[0.5em] uppercase mb-6 block">
              Contact
            </span>
            <h1 className="text-5xl font-barlow md:text-8xl font-light text-white tracking-tighter leading-none mb-8">
              Let's build <br /> <span className="italic font-serif font-light">the future.</span>
            </h1>
            <p className="text-white/70 font-barlow text-lg md:text-xl font-light max-w-md leading-relaxed">
              Whether you are looking to commission a new landmark or seeking a private consultation, our partners are ready to assist.
            </p>
          </motion.div>
        </div>

        {/* 2. THE CONSULTATION FORM */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light text-[#003152] uppercase tracking-widest mb-10">
              Book a Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full outline-none text-sm placeholder:text-gray-200" />
                </div>
                <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full outline-none text-sm placeholder:text-gray-200" />
                </div>
              </div>
              <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Project Type</label>
                <select className="w-full outline-none text-sm bg-transparent">
                  <option>Residential Commission</option>
                  <option>Commercial Development</option>
                  <option>Interior Design</option>
                  <option>Consultation Only</option>
                </select>
              </div>
              <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Message</label>
                <textarea required rows="3" placeholder="Tell us about your vision..." className="w-full outline-none text-sm placeholder:text-gray-200 resize-none"></textarea>
              </div>
              
              <button 
                disabled={loading}
                className="group flex items-center gap-4 bg-[#003152] text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#00243d] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    Processing <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>...</motion.span>
                  </span>
                ) : (
                  <>Send Inquiry <FiArrowRight className="group-hover:translate-x-2 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. GLOBAL DETAILS SECTION */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 border-b pb-4">Headquarters</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                Ikeja, <br />
                Lagos, Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 border-b pb-4">Direct Lines</h4>
            <p className="text-xl font-light text-[#003152] mb-2 tracking-tight">(+234) 814 269 9879</p>
            <p className="text-xl font-light text-[#003152] tracking-tight">info@rockdezign.com</p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-gray-400 border-b pb-4">
                Connect
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <a href="https://www.instagram.com/rockdezign" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-[#003152] hover:opacity-60 transition">
                    <FaInstagram size={18} /> Instagram
                </a>
                <a href="https://www.linkedin.com/company/rock-dezign" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-[#003152] hover:opacity-60 transition">
                    <CiLinkedin size={20} /> LinkedIn
                </a>
                <a href="https://www.behance.net/RockDezign" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-[#003152] hover:opacity-60 transition">
                    <FaBehance size={18} /> Behance
                </a>
                <a href="https://www.fiverr.com/rock_dezign" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-medium text-[#003152] hover:opacity-60 transition">
                    <SiFiverr size={18} /> Fiverr
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;