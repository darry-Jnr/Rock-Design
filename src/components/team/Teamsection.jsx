import React from 'react';
import { motion } from 'framer-motion';

const team = [
    {
        name: 'Akira Tanaka',
        role: 'Founder & Lead Architect',
        specialty: 'Cyberpunk & Futuristic Design',
        image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257182/team3_jxzrts.webp'
    },
    {
        name: 'Yuki Sato',
        role: 'Senior Interior Designer',
        specialty: 'Natural & Whimsical Interiors',
        image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&h=800',
    },
    {
        name: 'Hiroshi Nakamura',
        role: 'Project Manager',
        specialty: 'Project Coordination',
               image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257183/team4_ysonq3.webp'
    },
    {
        name: 'Sakura Yamamoto',
        role: '3D Visualization Artist',
        specialty: '3D Renders & Visual Effects',
              image: 'https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257182/team1_tcfcjj.webp'
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-32 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-4">The Collective</span>
                        <h2 className="text-4xl md:text-6xl font-light text-[#003152] tracking-tighter leading-none">
                            Architects of <span className="italic font-serif">Imagination.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest leading-loose">
                        A multidisciplinary group of visionaries redefining the boundary between space and story.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {team.map((member, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-crosshair"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Subtle info overlay on hover */}
                                <div className="absolute transition-opacity duration-500"></div>
                            </div>

                            {/* Text Info */}
                            <div className="space-y-1">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                                    {member.role}
                                </p>
                                <h3 className="text-xl font-medium text-[#003152] tracking-tight group-hover:italic transition-all">
                                    {member.name}
                                </h3>
                                <div className="pt-4 overflow-hidden">
                                    <p className="text-xs text-gray-500 font-light translate-y-0 group-hover:text-[#003152] transition-colors duration-300">
                                        Specializing in {member.specialty}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Recruitment Link */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-12 border-t border-gray-100 flex justify-center"
                >
                    <a href="#" className="text-xs font-bold tracking-[0.4em] text-[#003152] uppercase hover:opacity-50 transition">
                        Join the Studio — Careers
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;