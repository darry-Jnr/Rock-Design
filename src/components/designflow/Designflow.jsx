import React, { useState } from 'react';
import { motion } from 'framer-motion';


const steps = [
    { id: '01', title: 'Consultation', desc: 'Understanding your vision and spatial needs.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240278/consultation_g6vcag.webp" },
    { id: '02', title: 'Concept', desc: 'Translating ideas into technical sketches.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/concept_fqutoi.webp" },
    { id: '03', title: 'Development', desc: 'Refining details and material selection.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/design_wzzifz.webp" },
    { id: '04', title: 'Construction', desc: 'Precision engineering and management.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240275/construction_esikqm.webp" },
    { id: '05', title: 'The Reveal', desc: 'Handover of your bespoke environment.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/final_h3whnw.webp" },
];

const DesignFlow = () => {
    return (
        <section className="py-32 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-20">
                
                {/* Header */}
                <div className="mb-24">
                    <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-4">Methodology</span>
                    <h2 className="text-5xl md:text-7xl font-light text-[#003152] tracking-tighter leading-none">
                        The Design <span className="italic font-serif text-gray-400">Sequence.</span>
                    </h2>
                </div>

                {/* Flow Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-gray-100">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative pt-12 pb-20 md:border-r border-gray-100 last:border-r-0 md:px-8 first:pl-0"
                        >
                            {/* Step Number */}
                            <span className="text-[60px] font-serif italic text-gray-50 absolute top-4 left-0 -z-10 group-hover:text-gray-100 transition-colors duration-500">
                                {step.id}
                            </span>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#003152] tracking-tight mb-4 uppercase">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light mb-8 max-w-[200px]">
                                    {step.desc}
                                </p>

                                {/* Interactive Image Reveal */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden group-hover:grayscale-0 transition-all duration-1000">
                                    <img 
                                        src={step.img} 
                                        alt={step.title} 
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-[#003152]/10 mix-blend-multiply  group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            {/* Technical Progress Line (Mobile hidden) */}
                            <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
                                <div className="w-full h-full bg-[#003152] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignFlow;