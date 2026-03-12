import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import projectData from '../data/projectData';

// --- OPTIMIZATION HELPER ---
const getOptimizedUrl = (url, width = 1000) => {
    if (!url || !url.includes('cloudinary')) return url;
    return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

// --- SKELETON COMPONENT ---
const ProjectSkeleton = () => (
    <div className="group w-full">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="border-b border-gray-100 pb-6 space-y-3">
            <div className="h-2 w-24 bg-gray-100 animate-pulse" />
            <div className="h-6 w-48 bg-gray-100 animate-pulse" />
        </div>
    </div>
);

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);

    const categories = ['All', ...new Set(projectData.filter(p => p.category).map(p => p.category))];
    const filteredProjects = filter === 'All' 
        ? projectData 
        : projectData.filter(p => p.category === filter);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Projects | Rock Dezign</title>
            </Helmet>

            <style>
                {`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                `}
            </style>

            <div className="bg-white min-h-screen">
                <header className="pt-32 pb-16 px-6 md:px-20 max-w-[1800px] mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-6">
                            Portfolio
                        </span>
                        <h1 className="text-6xl md:text-8xl font-light text-[#003152] tracking-tighter leading-none">
                            Our <span className="italic font-serif text-gray-300">Archive.</span>
                        </h1>
                    </motion.div>

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

                <main className="px-6 md:px-20 max-w-[1800px] mx-auto pb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        <AnimatePresence mode="popLayout">
                            {isLoading ? (
                                [...Array(6)].map((_, i) => (
                                    <motion.div key={`skeleton-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <ProjectSkeleton />
                                    </motion.div>
                                ))
                            ) : (
                                filteredProjects.map((project, index) => (
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
                                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                                                <motion.img
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ duration: 1 }}
                                                    viewport={{ once: true }}
                                                    src={getOptimizedUrl(project.image, 1000)}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-[#003152]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                                    <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase border border-white/50 px-8 py-4 bg-white/10 hover:bg-white hover:text-[#003152] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                        View Details
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end border-b border-gray-100 pb-6">
                                                <div className="max-w-full">
                                                    <p className="text-[9px] font-bold text-gray-400 tracking-[0.4em] uppercase mb-2">
                                                        {project.category} 
                                                        {project.category && project.country && <span className="mx-2 text-gray-200">|</span>} 
                                                        {project.country}
                                                    </p>
                                                    <h3 className="text-2xl font-light text-[#003152] tracking-tight uppercase group-hover:tracking-widest transition-all duration-500">
                                                        {project.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Projects;