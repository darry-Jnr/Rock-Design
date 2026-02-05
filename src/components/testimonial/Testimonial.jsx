import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "Rock Dezign completely transformed our office space. Their team brought creativity and precision to every detail.",
    name: "Amaka Johnson",
    role: "Principal Architect",
    company: "Lagos Design Collective",
  },
  {
    quote: "They delivered our dream home exactly as envisioned. Professional, punctual, and highly skilled team.",
    name: "Chuka Eze",
    role: "Director",
    company: "Eze Properties",
  },
  {
    quote: "Amazing attention to detail and superb execution. They understood our vision perfectly and brought it to life!",
    name: "Sarah Opoku",
    role: "Founding Partner",
    company: "Opoku Designs",
  }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#fcfcfc] py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Decorative Background Quote */}
        <div className="absolute -top-10 -left-10 text-[200px] font-serif text-gray-100 leading-none select-none">
          “
        </div>

        <div className="relative z-10 grid md:grid-cols-12 items-center gap-12">
          
          {/* 1. Header Column */}
          <div className="md:col-span-4">
            <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-4">
              Voices
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-[#003152] tracking-tighter leading-none mb-8">
              Client <br /><span className="italic font-serif">Perspectives.</span>
            </h2>
            
            {/* Custom Navigation */}
            <div className="flex gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#003152] hover:bg-[#003152] hover:text-white transition-all duration-500"
              >
                <FiArrowLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#003152] hover:bg-[#003152] hover:text-white transition-all duration-500"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* 2. Content Column */}
          <div className="md:col-span-8 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-4xl font-light text-[#003152] leading-tight tracking-tight italic font-serif">
                  "{testimonials[index].quote}"
                </p>
                
                <div className="pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-medium text-[#003152]">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">
                    {testimonials[index].role} — {testimonials[index].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carousel;