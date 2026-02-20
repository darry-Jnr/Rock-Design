import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from '../data/projectData';
import { Helmet } from 'react-helmet';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Our Projects | Rock Dezign</title>
            </Helmet>

            <div className="bg-white min-h-screen pb-32">
                
                {/* 1. THE IMPACT HERO (Clear & Visual) */}
                <section className="relative pt-32 pb-20 px-6 md:px-20 border-b border-gray-100">
                    <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#003152] text-xs font-bold tracking-[0.4em] uppercase block mb-4">Portfolio</span>
                            <h1 className="text-5xl md:text-8xl font-barlow font-bold text-[#003152] tracking-tighter leading-[0.9]">
                                Our <br /> <span className="text-gray-300">Works.</span>
                            </h1>
                            <p className="mt-8 font-barlow text-gray-500 max-w-sm text-lg font-light leading-relaxed">
                                A curated collection of residential and commercial spaces designed to inspire.
                            </p>
                        </motion.div>

                        {/* Featured Project "Sneak Peek" */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative h-[300px] md:h-[500px] overflow-hidden rounded-sm shadow-2xl"
                        >
                            <img 
                                src={projectData[0].image} 
                                className="w-full h-full object-cover" 
                                alt="Featured Project" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white text-xs font-bold tracking-widest uppercase">Latest Release: {projectData[0].title}</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. THE PROJECTS GRID (Clean & Easy to Browse) */}
                <div className="px-6 md:px-20 max-w-[1800px] mx-auto mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                        {projectData.map((project, index) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link to={`/projects/${project.id}`}>
                                    {/* Project Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Simple Hover Overlay */}
                                        <div className="absolute inset-0 bg-[#003152]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <span className="text-white text-xs font-bold tracking-[0.3em] uppercase border border-white px-6 py-2">
                                                View Project
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Meta */}
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-[#003152] uppercase tracking-widest">
                                                {project.country}
                                            </span>
                                            <div className="h-[1px] w-4 bg-gray-200" />
                                            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                                2025
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#003152] tracking-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

              
            </div>
        </>
    );
};

export default Projects;