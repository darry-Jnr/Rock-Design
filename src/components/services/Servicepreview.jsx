import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ✅ Images
import residentialImg from '../../assets/images/residential-img.webp';
import commercialImg from '../../assets/images/commercial-img.webp';
import interiorImg from '../../assets/images/interior-img.webp';

const services = [
    {
        id: '01',
        title: 'Residential',
        desc: 'Bespoke living environments designed for the modern era.',
        bg: residentialImg,
    },
    {
        id: '02',
        title: 'Commercial',
        desc: 'Defining the corporate landscape through strategic architecture.',
        bg: commercialImg,
    },
    {
        id: '03',
        title: 'Interiors',
        desc: 'Curated internal atmospheres reflecting precision and beauty.',
        bg: interiorImg,
    },
];

const ServicePreview = () => {
    return (
        <section className="py-32 bg-white">
            {/* Header: Editorial Style */}
            <div className="max-w-7xl mx-auto mb-20 px-6 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-xl">
                    <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-4">Disciplines</span>
                    <h2 className="text-5xl md:text-7xl font-light text-[#003152] tracking-tighter leading-[0.85]">
                        Our <span className="italic font-serif">Services.</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest leading-relaxed">
                    Merging technical precision with visionary design to solve complex spatial challenges.
                </p>
            </div>

            {/* The Grid: Zero Gaps for a "Wall" Effect */}
            <div className="grid md:grid-cols-3 gap-0 border-y border-gray-100">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-[500px] md:h-[700px] overflow-hidden bg-black border-r border-white/10 last:border-r-0"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-center bg-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
                            style={{ backgroundImage: `url(${item.bg})` }}
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between p-10">
                            <span className="text-white/50 font-bold tracking-[0.3em] text-xs">
                                {item.id}
                            </span>
                            
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <h3 className="text-3xl font-light text-white tracking-tighter mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    {item.desc}
                                </p>
                                <div className="mt-6 h-[1px] bg-white/30 w-0 group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA: Minimalist */}
            <div className="text-center mt-20">
                <Link
                    to="/services"
                    className="inline-block text-[10px] font-bold tracking-[0.6em] text-[#003152] uppercase hover:opacity-50 transition-all"
                >
                    View Comprehensive Expertise →
                </Link>
            </div>
        </section>
    );
};

export default ServicePreview;