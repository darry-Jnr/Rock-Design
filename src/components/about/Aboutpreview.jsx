import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import aboutImage from '../../assets/images/aboutpreview.webp';

const AboutPreview = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    
                    {/* 1. THE VISUAL: ASYMMETRIC FRAME */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-5/12 relative"
                    >
                        {/* Decorative background block to add depth */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-50 -z-10" />
                        
                        <div className="overflow-hidden shadow-2xl">
                            <img 
                                src="https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240254/panthers-4_ccoxej.webp" 
                                alt="Studio Philosophy" 
                                className="w-full h-[500px] object-cover hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                        </div>

                       
                    </motion.div>

                    {/* 2. THE NARRATIVE: EDITORIAL TEXT */}
                    <div className="w-full md:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-6">
                                The Studio Philosophy
                            </span>
                            
                            <h2 className="text-4xl md:text-6xl font-light text-[#003152] tracking-tighter leading-tight mb-8">
                                Deep Listening. <br />
                                <span className="italic font-serif text-gray-400">Innovative Design.</span>
                            </h2>

                            <div className="space-y-6 max-w-xl">
                                <p className="text-xl md:text-2xl font-barlow font-light text-[#003152] leading-relaxed">
                                    We are a team of professional designers based in Nigeria, delivering sustainable, world-class solutions through a process of rigorous inquiry.
                                </p>

                                <p className="text-gray-500 text-sm font-barlow md:text-base leading-loose font-light">
                                    Every project at Rock Dezign is a dialogue. We translate social and behavioral needs into structural masterpieces that serve people today and remain relevant for generations. Our designs aren’t just structures—they are enduring solutions.
                                </p>
                            </div>

                            {/* Minimalist Link */}
                            <div className="mt-12">
                                <Link
                                    to="/about"
                                    className="group inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-[#003152] uppercase transition-all"
                                >
                                    <span>Discover our Story</span>
                                    <div className="w-12 h-[1px] bg-[#003152] group-hover:w-20 transition-all duration-500" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;