import React, { useState, useEffect, useCallback } from "react";
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

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const index = Math.abs(page % testimonials.length);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // AUTOMATIC SLIDING LOGIC
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds is the industry standard for readability

    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  return (
    <section className="bg-[#fcfcfc] py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Background Decorative Quote */}
        <div className="absolute -top-16 -left-10 text-[250px] font-serif text-gray-100/60 leading-none select-none z-0">
          “
        </div>

        <div className="relative z-10 grid md:grid-cols-12 items-center gap-16 md:gap-24">
          
          {/* 1. Header Column */}
          <div className="md:col-span-4">
            <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-6 font-barlow">
              Testimonials
            </span>
            <h2 className="text-5xl md:text-7xl font-light text-[#003152] tracking-tighter leading-[0.9] mb-12">
              Client <br /><span className="italic font-serif text-gray-400">Voices.</span>
            </h2>
            
            <div className="flex gap-4">
              <button 
                onClick={() => paginate(-1)}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#003152] hover:bg-[#003152] hover:text-white transition-all duration-500 group"
              >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#003152] hover:bg-[#003152] hover:text-white transition-all duration-500 group"
              >
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 2. Content Column */}
          <div 
            className="md:col-span-8 min-h-[450px] flex flex-col justify-center relative cursor-default"
            onMouseEnter={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="w-full"
              >
                <blockquote className="text-3xl md:text-5xl font-light text-[#003152] leading-[1.15] tracking-tight italic font-serif mb-12">
                  {testimonials[index].quote}
                </blockquote>
                
                <div className="pt-10 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#003152] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-lg">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-light text-[#003152] tracking-tight">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 font-barlow font-bold">
                      {testimonials[index].role} <span className="mx-2 text-gray-200">|</span> {testimonials[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Progress Indicator */}
            <div className="absolute bottom-0 right-0 flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 transition-all duration-500 ${index === i ? "w-8 bg-[#003152]" : "w-2 bg-gray-200"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carousel;