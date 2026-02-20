import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { id: '01', title: 'Consultation', desc: 'Understanding your vision and spatial needs through immersive dialogue.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240278/consultation_g6vcag.webp" },
    { id: '02', title: 'Concept', desc: 'Translating abstract ideas into structured technical sketches and forms.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/concept_fqutoi.webp" },
    { id: '03', title: 'Development', desc: 'Refining every detail, from structural integrity to material selection.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/design_wzzifz.webp" },
    { id: '04', title: 'Construction', desc: 'Precision engineering and site management to ensure excellence.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240275/construction_esikqm.webp" },
    { id: '05', title: 'The Reveal', desc: 'The final handover of your bespoke, future-ready environment.', img: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240281/final_h3whnw.webp" },
];

const DesignFlow = () => {
    return (
        <section className="py-40 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-20">
                
                {/* Header Section */}
                <div className="mb-32">
                    <span className="text-[#003152] text-[10px] font-bold tracking-[0.8em] uppercase block mb-6 font-barlow">
                        Methodology
                    </span>
                    <h2 className="text-6xl md:text-8xl font-light text-[#003152] tracking-tighter leading-[0.85] font-barlow">
                        The Design <br /> 
                        <span className="italic font-serif text-gray-300">Sequence.</span>
                    </h2>
                </div>

                {/* Flow Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-100 border-t border-b border-gray-100">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative bg-[#fcfcfc] pt-16 pb-24 px-4 md:px-8 hover:bg-white transition-colors duration-500"
                        >
                            {/* Technical Step Indicator */}
                            <div className="flex items-center gap-4 mb-12">
                                <span className="text-[10px] font-bold font-barlow text-[#003152] tracking-widest">
                                    {step.id}
                                </span>
                                <div className="h-[1px] w-8 bg-gray-200 group-hover:w-12 group-hover:bg-[#003152] transition-all duration-700" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-light text-[#003152] tracking-tighter mb-6 uppercase font-barlow group-hover:translate-x-2 transition-transform duration-500">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light mb-12 min-h-[60px] font-barlow">
                                    {step.desc}
                                </p>

                                {/* ARCHITECTURAL IMAGE: 3:4 Aspect Ratio with 2px radius */}
                                <div className="relative w-full aspect-[3/4] overflow-hidden shadow-sm">
                                    <motion.img 
                                        src={step.img} 
                                        alt={step.title} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[1.5s] ease-out"
                                    />
                                    
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-[#003152]/5 opacity-100 group-hover:opacity-0 transition-opacity duration-1000" />
                                </div>
                            </div>

                            {/* Top Progress Line Accent */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent overflow-hidden">
                                <div className="w-full h-full bg-[#003152] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignFlow;