import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import projectData from '../data/projectData'; 

const Projects = () => {
    const [filter, setFilter] = useState('All');
    
    // Extract unique categories for the filter bar
    const categories = ['All', ...new Set(projectData.map(p => p.category))];
    
    const filteredProjects = filter === 'All' 
        ? projectData 
        : projectData.filter(p => p.category === filter);

    return (
        <>
            <Helmet>
                <title>Projects | Rock Dezign</title>
            </Helmet>

            <div className="bg-white min-h-screen">
                
                {/* 1. HEADER SECTION */}
                <header className="pt-32 pb-16 px-6 md:px-20 max-w-[1800px] mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-6">
                            Projects
                        </span>
                        <h1 className="text-6xl md:text-8xl font-light text-[#003152] tracking-tighter leading-none">
                            Our <span className="italic font-serif text-gray-300">Archive.</span>
                        </h1>
                    </motion.div>

                    {/* FILTER SYSTEM */}
                    <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16 border-b border-gray-100 pb-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative ${
                                    filter === cat ? 'text-[#003152]' : 'text-gray-300 hover:text-gray-400'
                                }`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div 
                                        layoutId="underline"
                                        className="absolute -bottom-[25px] left-0 w-full h-[2px] bg-[#003152] z-10" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </header>

                {/* 2. PROJECT GRID */}
                <main className="px-6 md:px-20 max-w-[1800px] mx-auto pb-40">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div 
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    className="group"
                                >
                                    <Link to={`/projects/${project.id}`} className="block">
                                        {/* Image Box with "View Details" Overlay */}
                                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                            />
                                            
                                            {/* Centered View Details Button Overlay */}
                                            <div className="absolute inset-0 bg-[#003152]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                                <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase border border-white/50 px-8 py-4 bg-white/10 hover:bg-white hover:text-[#003152] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info Box */}
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-6">
                                            <div className="max-w-[80%]">
                                                <p className="text-[9px] font-bold text-gray-400 tracking-[0.4em] uppercase mb-2">
                                                    {project.category} <span className="mx-2 text-gray-200">|</span> {project.country}
                                                </p>
                                                <h3 className="text-2xl font-light text-[#003152] tracking-tight uppercase group-hover:tracking-widest transition-all duration-500">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] font-medium text-gray-300 tracking-widest block mb-1">
                                                    {project.year || '2026'}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </main>

               
            </div>
        </>
    );
};

export default Projects;