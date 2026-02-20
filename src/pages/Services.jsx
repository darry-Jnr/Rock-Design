import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Designflow from '../components/designflow/Designflow';

// Standardize the data for high-end appeal
const serviceList = [
  {
    code: '01',
    title: 'Residential Architecture',
    desc: 'Bespoke living environments designed with a focus on seamless indoor-outdoor flow and structural integrity.',
    image: '/src/assets/images/servicesImg/residential-img.webp',
  },
  {
    code: '02',
    title: 'Commercial Landmarks',
    desc: 'Defining the corporate skyline through innovative spatial planning and sustainable high-performance design.',
    image: '/src/assets/images/servicesImg/dev-img.webp',
  },
  {
    code: '03',
    title: 'Interior Curation',
    desc: 'The art of internal space. We select rare materials and bespoke furniture to create immersive atmospheres.',
    image: '/src/assets/images/servicesImg/interior-img.webp',
  },
  {
    code: '04',
    title: 'Advanced Visualization',
    desc: 'Hyper-realistic digital twins and cinematic walkthroughs that allow you to walk through your project before a single brick is laid.',
    image: '/src/assets/images/servicesImg/anime-Img.webp',
  },
];

const Services = () => {
  return (
    <div className="bg-white text-[#003152]">
      <Helmet>
        <title>Expertise | Rock Dezign</title>
      </Helmet>

    {/* 1. IMMERSIVE SPLIT HERO (Full 100vh) */}
    <section className="relative h-screen flex flex-col md:flex-row overflow-hidden border-b border-gray-100">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-20 bg-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[#003152]/40 text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block">
              Studio Capabilities
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-8">
              Our <br /> 
              <span className="italic font-serif text-[#003152]">Expertise</span>
              <span className="text-gray-200">.</span>
            </h1>
            <p className="max-w-md text-gray-400 text-lg font-light leading-relaxed">
              Synthesizing artistic vision with technical precision to create 
              spaces that define modern living.
            </p>
          </motion.div>
        </div>

        {/* Right: Immersive Image */}
        <div className="hidden md:block w-1/2 h-full bg-[#003152] relative overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={serviceList[0].image} 
            className="w-full h-full object-cover opacity-80 "
            alt="Architecture Showcase"
          />
          {/* Overlay Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent w-32" />
        </div>
      </section>
      
      {/* 2. SERVICES LIST - ACCORDION/LIST STYLE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative border-b border-gray-100 px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 hover:bg-gray-50 transition-colors"
            >
              {/* Numbering */}
              <span className="text-sm font-bold tracking-widest text-gray-300 group-hover:text-[#003152] transition-colors">
                {service.code}
              </span>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-light tracking-tighter mb-4">
                  {service.title}
                </h3>
                <p className="max-w-md text-gray-500 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Service Image - Revealed on Hover for Desktop */}
              <div className="w-full md:w-1/3 h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
              </div>

              {/* Action */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 hidden md:block transition-opacity">
                 <span className="text-[10px] font-bold tracking-widest uppercase border-b border-[#003152] pb-1">
                   Inquire
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE DESIGN FLOW (Keep your component but ensure it's styled minimally) */}
      <Designflow />

      {/* 4. HIGH-END CTA */}
      <section className="py-40 bg-[#003152] text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-light text-white tracking-tighter mb-10">
            Ready to start a <br /> <span className="italic font-serif">commission?</span>
          </h2>
          <a
            href="/contact"
            className="inline-block border border-white/30 text-white px-12 py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-[#003152] transition-all"
          >
            Private Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;