import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delievered', value: '150', suffix: '+' },
  { label: 'Square Footage', value: '300', suffix: 'k' },
  { label: 'Satisfied Clients', value: '80', suffix: '+' },
  { label: 'Countries Served', value: '07', suffix: '+' },
];

const StatsSection = () => {
  return (
    <section className="py-32 bg-[#003152] text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.2, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className="flex flex-col border-l border-white/10 pl-8 group"
            >
              {/* Metric Value */}
              <div className="flex items-baseline mb-4">
                <motion.span 
                  className="text-6xl md:text-8xl font-light tracking-tighter italic font-serif group-hover:text-blue-200 transition-colors duration-500"
                >
                  {stat.value}
                </motion.span>
                <span className="text-3xl md:text-4xl font-light text-blue-300/50 ml-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Label with Animated Line */}
              <div className="relative">
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '40px' }}
                  transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
                  className="h-[1px] bg-blue-300/30 mt-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;