import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "A professional and responsible place. Excellent for trusting a project and making it come true.",
    name: "JGH Construction",
    role: "Project Lead",
    company: "South Carolina"
  },
  {
    quote: "Thank you Peter for your responsiveness and grace when it came to me changing my mind!",
    name: "ND_Red",
    role: "Client",
    company: "Queensland"
  },
  {
    quote: "This was our third project completed with Peter — he is always able to nail down every requested detail and is wonderful at quick communication.",
    name: "Halatch",
    role: "Repeat Client",
    company: "Tennessee"
  },
  {
    quote: "I have worked with Peter twice now on 2 very different buildings and each time he recognized my peculiar design ideas and needs. He was quick to respond politely with changes and helped me visually understand the drawings where I lacked technical knowledge.",
    name: "Dariwuz",
    role: "Property Owner",
    company: "Mississippi"
  },
  {
    quote: "Peter is always open to direction and helped us revise a complex development of six multi-story duplex units. I appreciate the fast turn around times and patience when we needed extra review time. I highly recommend Peter and his team.",
    name: "Norm Johnson",
    role: "Developer",
    company: "Washington"
  },
  {
    quote: "Very impressive how this process was quick and smooth, Peter did exactly what we expected and on top of that very great communication. Now we’re ready to put the house up.",
    name: "Fabrizosa",
    role: "Homeowner",
    company: "South Carolina"
  },
  {
    quote: "Great work, especially on revisions.",
    name: "Jeremy Mingura",
    role: "Principal",
    company: "Idaho"
  },
  {
    quote: "Very complex house from rough design to detailed MEP. Took a few revisions but quickly fixed. Extremely happy with the end result and was well worth the cost.",
    name: "Seriedl",
    role: "Client",
    company: "Georgia"
  },
  {
    quote: "I’m so impressed with the house plans! Rock Dezign did an incredible job bringing my vision to life with creativity, precision, and attention to detail. Professional and truly cared about making sure everything was just right.",
    name: "Tlangford",
    role: "Visionary",
    company: "Washington"
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
    }, 6000); // Increased slightly for longer testimonials

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
            onMouseEnter={() => setIsPaused(true)}
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
                <blockquote
                  className={`font-light text-[#003152] leading-[1.15] tracking-tight italic font-serif mb-12 transition-all duration-300
                    ${testimonials[index].quote.length > 250
                      ? "text-xl md:text-2xl"
                      : testimonials[index].quote.length > 150
                      ? "text-2xl md:text-3xl"
                      : "text-3xl md:text-5xl"
                    }`}
                >
                  {testimonials[index].quote}
                </blockquote>
                
                <div className="pt-10 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#003152] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-lg">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="text-xl pt-0 md:pt-2 font-light text-[#003152] tracking-tight">
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