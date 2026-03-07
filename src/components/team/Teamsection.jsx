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
        role: 'ROLE_HERE',
        specialty: 'SPECIALTY_HERE',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1772841535/OLUWAGBEMIRO_BELLO_pdwyrq.png'
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-32 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-4 font-barlow">
                            The Collective
                        </span>
                        <h2 className="text-4xl md:text-6xl font-light text-[#003152] tracking-tighter leading-none font-barlow">
                            Innovative <span className="italic font-serif">Designers.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest leading-loose font-barlow">
                        A multidisciplinary team of professionals shaping the built environment through design and innovation.
                    </p>
                </div>

                {/* Team Grid — 2 centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-crosshair"
                        >
                            {/* Square crop — perfect for headshots/selfies */}
                            <div className="relative aspect-square overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#003152]/0 group-hover:bg-[#003152]/10 transition-all duration-500" />
                            </div>

                            {/* Info */}
                            <div className="space-y-1">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] font-barlow">
                                    {member.role}
                                </p>
                                <h3 className="text-xl font-medium text-[#003152] tracking-tight group-hover:italic transition-all font-barlow">
                                    {member.name}
                                </h3>
                                <div className="pt-4">
                                    <p className="text-xs text-gray-500 font-light group-hover:text-[#003152] transition-colors duration-300 font-barlow">
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
                    className="mt-32 pt-12 border-t border-gray-100 flex justify-center"
                >
                    <a
                        href="#"
                        className="text-xs font-bold tracking-[0.4em] text-[#003152] uppercase hover:opacity-50 transition font-barlow"
                    >
                        Join the Studio — Careers
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default TeamSection;