import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiArrowUp } from 'react-icons/fi';
import projectData from '../data/projectDetails';

// --- 1. CLOUDINARY OPTIMIZATION HELPER ---
const getOptimizedUrl = (url, width = 1600) => {
    if (!url || !url.includes('cloudinary')) return url;
    return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

// --- 2. BACK TO TOP WITH PROGRESS RING ---
const ScrollToTop = ({ scrollYProgress }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) setIsVisible(true);
            else setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-10 right-10 z-[100] cursor-pointer group"
                >
                    <div className="relative flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-gray-200 group-hover:border-[#003152] transition-all duration-500">
                        <svg className="absolute w-full h-full -rotate-90">
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="#003152"
                                strokeWidth="2"
                                fill="transparent"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                        <FiArrowUp className="text-[#003152] text-xl group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ProjectDetail = () => {
    const { id } = useParams();
    const [isPageLoading, setIsPageLoading] = useState(true);
    
    const projectIndex = projectData.findIndex((p) => p.id === parseInt(id));
    const project = projectData[projectIndex];
    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        // Skeleton simulation
        const timer = setTimeout(() => setIsPageLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-white uppercase tracking-widest text-[#003152]">
                Archive Not Found
            </div>
        );
    }

    const nextProject = projectData[(projectIndex + 1) % projectData.length];

    return (
        <div className="bg-white min-h-screen selection:bg-[#003152] selection:text-white">
            <Helmet>
                <title>{project.title} | Rock Dezign</title>
            </Helmet>

            <style>
                {` @keyframes shimmer { 100% { transform: translateX(100%); } } `}
            </style>

            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-[#003152] z-[60] origin-left"
                style={{ scaleX }}
            />

            <nav className="fixed top-0 z-50 w-full mix-blend-difference px-6 py-6 md:px-12">
                <div className="max-w-[1800px] mx-auto flex justify-between items-center text-white uppercase text-[10px] font-bold tracking-[0.4em]">
                    <Link to="/projects" className="group flex items-center gap-3">
                        <FiArrowLeft className="text-lg group-hover:-translate-x-2 transition-transform" /> 
                        <span className="hidden md:inline">Back to Works</span>
                    </Link>
                    <div className="opacity-60">
                        Project {projectIndex + 1} <span className="mx-2">/</span> {projectData.length}
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION WITH SKELETON --- */}
            <section className="relative h-screen w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                    {isPageLoading ? (
                        <motion.div key="skeleton" exit={{ opacity: 0 }} className="absolute inset-0 bg-gray-900">
                             <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="hero"
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.7 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                            className="absolute inset-0"
                        >
                            <img 
                                src={getOptimizedUrl(project.image, 2000)} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isPageLoading ? 0 : 1, y: isPageLoading ? 50 : 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-7xl mx-auto w-full"
                    >
                        <p className="text-white/60 font-bold text-[10px] tracking-[0.6em] uppercase mb-4">
                            {project.category}
                        </p>
                        <h1 className="text-6xl md:text-[10vw] font-light text-white tracking-tighter leading-[0.85] mb-12 uppercase">
                            {project.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- DATA STRIP --- */}
            <section className="py-20 px-8 md:px-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Location</p>
                        <p className="text-lg font-light text-[#003152] tracking-wide uppercase">{project.country}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Typology</p>
                        <p className="text-lg font-light text-[#003152] tracking-wide uppercase">{project.category}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Status</p>
                        <p className="text-lg font-light text-[#003152] tracking-wide uppercase">Completed</p>
                    </div>
                </div>
            </section>

            {/* --- NARRATIVE SECTION --- */}
            <section className="py-32 px-8 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <h2 className="text-xs font-bold text-[#003152] uppercase tracking-[0.4em] mb-4">The Narrative</h2>
                        <div className="w-12 h-[1px] bg-[#003152]"></div>
                    </div>
                    <div className="md:col-span-8">
                        {project.subtitle && (
                            <h3 className="text-xl md:text-2xl font-medium text-[#003152] mb-8 uppercase tracking-wide">
                                {project.subtitle}
                            </h3>
                        )}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-2xl font-light text-[#003152]/80 leading-[1.6] tracking-tight whitespace-pre-line"
                        >
                            {project.description}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- GALLERY SECTION --- */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="px-4 md:px-10 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                        {project.gallery.map((img, index) => {
                            const gridSpans = [
                                "md:col-span-12 h-[80vh]",
                                "md:col-span-7 h-[60vh]",
                                "md:col-span-5 h-[60vh]",
                                "md:col-span-12 h-[80vh]",
                                "md:col-span-6 h-[70vh]",
                                "md:col-span-6 h-[70vh]",
                            ];
                            const spanClass = gridSpans[index % gridSpans.length];
                            return (
                                <motion.div
                                    key={index}
                                    className={`${spanClass} relative group overflow-hidden bg-gray-50`}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1.2 }}
                                >
                                    <img 
                                        src={getOptimizedUrl(img, 1800)} 
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                                        alt={`Detail ${index}`} 
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <FiMaximize2 className="text-white text-3xl" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* --- PLANS SECTION --- */}
            {project.plans && project.plans.length > 0 && (
                <section className="py-40 px-8 md:px-20 bg-[#f4f4f4]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20 text-center">
                            <h4 className="text-[10px] font-bold tracking-[0.5em] text-gray-400 uppercase mb-4">Architectural Drafting</h4>
                            <h3 className="text-4xl font-light text-[#003152] uppercase tracking-widest">Plans & Schemes</h3>
                        </div>
                        <div className="space-y-32">
                            {project.plans.map((plan, i) => (
                                <motion.div key={i} className="flex flex-col items-center">
                                     <img 
                                        src={getOptimizedUrl(plan, 2000)} 
                                        alt="Floor Plan" 
                                        className="max-w-full h-auto mix-blend-multiply" 
                                        loading="lazy"
                                    />
                                     <div className="mt-8 text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">Fig. {i + 1} — Schematic Layout</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* --- FOOTER / NEXT WORK --- */}
            <footer className="relative py-40 bg-[#003152] overflow-hidden group">
                <Link to={`/projects/${nextProject.id}`} className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-white/40 text-[10px] tracking-[0.6em] uppercase mb-10">Next Exploration</p>
                    <h2 className="text-5xl md:text-[8vw] font-light text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700 uppercase">
                        {nextProject.title}
                    </h2>
                    <div className="mt-12 flex items-center gap-4 text-white text-xs font-bold tracking-[0.4em] uppercase">
                        View Project <FiArrowRight />
                    </div>
                </Link>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[20vw] font-bold select-none whitespace-nowrap pointer-events-none">
                    NEXT WORK
                </div>
            </footer>

            <ScrollToTop scrollYProgress={scrollYProgress} />
        </div>
    );
};

export default ProjectDetail;