import React from 'react';
import { motion } from 'framer-motion';

const team = [
    {
        name: 'Peter Adeniran',
        role: 'Founder & Lead Architect',
        specialty: 'Residential & Commercial Design',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772841533/PETER_ADENIRAN_-_FOUNDER_rlihga.jpg'
    },
    {
        name: 'Bello Oluwagbemiro',
        role: 'Creative Director',
        specialty: 'Sustainable Urban Planning',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772841535/OLUWAGBEMIRO_BELLO_pdwyrq.png'
    },
    {
        name: 'Emmanuel Mathew',
        role: 'Creative Director',
        specialty: 'BIM & Technical Documentation',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1773197966/EMMANUEL_MATHEW_c2nz3x.jpg'
    },
    {
        name: 'Jude Bayode',
        role: 'Creative Director',
        specialty: 'Interior Architecture & UX',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772841535/OLUWAGBEMIRO_BELLO_pdwyrq.png'
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-32 px-6 md:px-12 lg:px-20 lg:py-48">
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-gray-300 text-[10px] font-bold tracking-[0.6em] uppercase block mb-4 font-barlow">
                            The Collective
                        </span>
                        <h2 className="text-5xl md:text-7xl font-light text-[#003152] tracking-tighter leading-none font-barlow">
                            Innovative <span className="italic font-serif">Designers.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-[280px] uppercase tracking-[0.2em] leading-loose font-barlow">
                        A multidisciplinary team shaping the built environment.
                    </p>
                </div>

                {/* Team Grid - 4 Columns on Laptop/Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Image Container: Grayscale to Color */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-gray-50 border border-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                                />
                                
                                {/* Architectural Frame Overlay */}
                                <div className="absolute inset-0 border-[0px] group-hover:border-[10px] border-white/10 transition-all duration-700 pointer-events-none" />
                                
                                {/* Subtle Color Overlay */}
                                <div className="absolute inset-0 bg-[#003152]/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-[1px] bg-[#C8A96E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] font-barlow">
                                        {member.role}
                                    </p>
                                </div>
                                
                                <h3 className="text-xl font-light text-[#003152] tracking-tight group-hover:translate-x-2 transition-transform duration-500 font-barlow">
                                    {member.name}
                                </h3>
                                
                                <div className="overflow-hidden">
                                    <p className="text-[10px] text-gray-400 font-light translate-y-0 group-hover:text-[#003152] transition-colors duration-500 font-barlow leading-relaxed">
                                        Specializing in {member.specialty}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Careers link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-40 pt-12 border-t border-gray-100 flex justify-center"
                >
                    <a
                        href="#"
                        className="group flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300 uppercase font-barlow">
                            Collaborate With Us
                        </span>
                        <span className="text-xs font-bold tracking-[0.4em] text-[#003152] uppercase group-hover:italic transition-all font-barlow">
                            Join the Studio — Careers
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default TeamSection;