import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiArrowRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Inquiry & Consultation | Rock Dezign</title>
      </Helmet>

      {/* 1. HERO SECTION - BLACK & WHITE SPLIT LOOK */}
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

        {/* 2. THE CONSULTATION FORM - LUXURY STYLE */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light text-[#003152] uppercase tracking-widest mb-10">
              Book a Consultation
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full outline-none text-sm placeholder:text-gray-200" />
                </div>
                <div className="border-b border-gray-200 py-2 focus-within:border-[#003152] transition">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full outline-none text-sm placeholder:text-gray-200" />
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
                <textarea rows="3" placeholder="Tell us about your vision..." className="w-full outline-none text-sm placeholder:text-gray-200 resize-none"></textarea>
              </div>
              
              <button className="group flex items-center gap-4 bg-[#003152] text-white px-10 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">
                Send Inquiry <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
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
            <p className="text-xl font-light text-[#003152] leading-relaxed">
              221b Architecture Street, <br />
              Victoria Island, Lagos, Nigeria
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 border-b pb-4">Direct Lines</h4>
            <p className="text-xl font-light text-[#003152] mb-2">(+234) 814 269 9879</p>
            <p className="text-xl font-light text-[#003152]">info@rockdezign.com</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 border-b pb-4">Social</h4>
            <div className="flex gap-6">
              {['Instagram', 'LinkedIn', 'Behance'].map((item) => (
                <a key={item} href="#" className="text-sm font-bold tracking-widest text-[#003152] hover:opacity-50 transition uppercase">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;