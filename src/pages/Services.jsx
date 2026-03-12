import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DesignFlow from '../components/designflow/Designflow';

// ─── DATA ────────────────────────────────────────────────────────────────────

const serviceList = [
  {
    code: '01',
    title: 'Residential',
    desc: 'Bespoke private homes and housing developments, balancing beauty, comfort, and function.',
    tag: 'Private Homes & Developments',
    stat: '200+ Projects',
    path: '/projects',
  },
  {
    code: '02',
    title: 'Commercial Architecture',
    desc: 'Offices, malls and retail spaces, designed for productivity and long term commercial value.',
    tag: 'Corporate & Retail Spaces',
    stat: '80+ Landmarks',
    path: '/projects',
  },
  {
    code: '03',
    title: 'Institutional Architecture',
    desc: 'Educational, civic, and organizational buildings that serve communities effectively.',
    tag: 'Civic & Educational',
    stat: '50+ Institutions',
    path: '/projects',
  },
  {
    code: '04',
    title: 'Interior Design',
    desc: 'Carefully crafted interior spaces that enhance utility and user experience.',
    tag: 'Space Curation',
    stat: '300+ Interiors',
    path: '/projects',
  },
];

// ─── SERVICE ROW ─────────────────────────────────────────────────────────────

const ServiceRow = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Link to={service.path}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative border-b border-[#003152]/10 overflow-hidden cursor-pointer"
      >
        <motion.div
          className="absolute inset-0 bg-[#003152] z-0 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-[#C8A96E] origin-left z-20"
          style={{ width: '100%' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="relative z-10 grid grid-cols-12 items-center px-6 md:px-16 py-10 md:py-14 gap-4">
          <div className="col-span-1 hidden md:block">
            <motion.span
              animate={{ color: hovered ? 'rgba(255,255,255,0.25)' : '#D1D5DB' }}
              transition={{ duration: 0.3 }}
              className="text-xs font-bold tracking-[0.3em] font-barlow"
            >
              {service.code}
            </motion.span>
          </div>

          <div className="col-span-12 md:col-span-4">
            <motion.h3
              animate={{ color: hovered ? '#FFFFFF' : '#003152', x: hovered ? 8 : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-3xl md:text-5xl font-light tracking-tighter font-barlow leading-tight"
            >
              {service.title}
            </motion.h3>
          </div>

          <div className="col-span-12 md:col-span-4">
            <motion.p
              animate={{ color: hovered ? 'rgba(255,255,255,0.55)' : '#9CA3AF' }}
              transition={{ duration: 0.3 }}
              className="text-sm font-light leading-relaxed font-barlow max-w-xs"
            >
              {service.desc}
            </motion.p>
          </div>

          <div className="col-span-12 md:col-span-3 flex md:flex-col items-start md:items-end gap-3">
            <motion.span
              animate={{
                backgroundColor: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(0,49,82,0.05)',
                color: hovered ? 'rgba(255,255,255,0.7)' : '#003152',
                borderColor: hovered ? 'rgba(255,255,255,0.2)' : 'rgba(0,49,82,0.15)',
              }}
              transition={{ duration: 0.3 }}
              className="text-[9px] font-bold tracking-[0.35em] uppercase px-3 py-1.5 border font-barlow whitespace-nowrap"
            >
              {service.tag}
            </motion.span>

            <motion.span
              animate={{ color: hovered ? 'rgba(255,255,255,0.3)' : '#D1D5DB' }}
              transition={{ duration: 0.3 }}
              className="text-xs tracking-widest font-barlow hidden md:block"
            >
              {service.stat}
            </motion.span>
          </div>

          <motion.div
            className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <path d="M0 8H30M30 8L23 1M30 8L23 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const Services = () => {
  return (
    <div className="bg-white text-[#003152]">
      <Helmet>
        <title>Expertise | Rock Dezign</title>
      </Helmet>

      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col md:flex-row overflow-hidden border-b border-gray-100">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-20 bg-white z-10 pt-24 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block font-barlow text-gray-300">
              Studio Capabilities
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-8 font-barlow text-[#003152]">
              Our <br />
              <span className="italic font-serif">Expertise</span>
              <span className="text-gray-200">.</span>
            </h1>
            <p className="max-w-md text-gray-400 text-base font-light leading-relaxed font-barlow">
              Shaping spaces and environments through leadership and innovation.
            </p>
          </motion.div>
        </div>

        {/* Right Side: High-End Logo Containment */}
        <div className="hidden md:flex w-1/2 h-screen bg-[#f8f8f8] relative items-center justify-center overflow-hidden pt-24 px-12 pb-12">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://res.cloudinary.com/dwlgcj8ht/image/upload/v1773272464/Rock_Dezign_Vertical_Signature_x52q3n.png" 
            alt="Rock Dezign Signature" 
            // Change to object-contain to prevent elongation/cropping
            // Scale and white space (padding) used to center the brand mark perfectly
            className="w-full h-full object-contain"
          />
          
          <div className="absolute inset-0 bg-[#003152]/[0.03] pointer-events-none" />
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="bg-white border-t border-[#003152]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 md:px-16 py-10 border-b border-[#003152]/10 flex items-center justify-between"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gray-300 font-barlow">
              Our Services
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-300 font-barlow">
              04 Disciplines
            </span>
          </motion.div>

          {serviceList.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      <DesignFlow />

      {/* 4. CTA SECTION */}
      <section className="py-40 bg-[#003152] text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tighter mb-10 font-barlow">
            Ready to start a <br />
            <span className="italic font-serif">commission?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block border border-white/30 text-white px-12 py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#003152] transition-all font-barlow"
          >
            Private Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;