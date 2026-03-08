import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi';
import projectData from '../data/projectDetails';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = projectData.findIndex((p) => p.id === parseInt(id));
  const project = projectData[projectIndex];
  
  // Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-[#003152] font-light text-2xl mb-6 tracking-widest uppercase">Archive Not Found</h2>
        <Link to="/projects" className="text-xs font-bold tracking-[0.3em] text-white bg-[#003152] px-8 py-4 uppercase hover:bg-[#00243d] transition-all">
          Return to Gallery
        </Link>
      </div>
    );
  }

  const nextProject = projectData[(projectIndex + 1) % projectData.length];

  return (
    <div className="bg-white min-h-screen selection:bg-[#003152] selection:text-white">
      <Helmet>
        <title>{project.title} | Rock Dezign Architectural Portfolio</title>
      </Helmet>

      {/* --- READING PROGRESS BAR --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#003152] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* 1. MINIMALIST STICKY NAV */}
      <nav className="fixed top-0 z-50 w-full mix-blend-difference px-6 py-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/projects" className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] text-white uppercase">
            <FiArrowLeft className="text-lg group-hover:-translate-x-2 transition-transform" /> 
            <span className="hidden md:inline">Back to Works</span>
          </Link>
          <div className="text-[10px] text-white/60 tracking-[0.4em] uppercase font-medium">
            Project {projectIndex + 1} <span className="mx-2">/</span> {projectData.length}
          </div>
        </div>
      </nav>

      {/* 2. FULL-SCREEN IMMERSIVE HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={project.image.replace(/'/g, '')} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-7xl mx-auto w-full"
          >
            <p className="text-white/60 font-bold text-[10px] tracking-[0.6em] uppercase mb-4">
              {project.category} — {project.year}
            </p>
            <h1 className="text-6xl md:text-[10vw] font-light text-white tracking-tighter leading-[0.85] mb-12">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 3. PROJECT DATA STRIP */}
      <section className="py-20 px-8 md:px-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
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
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-bold">Year</p>
              <p className="text-lg font-light text-[#003152] tracking-wide uppercase">{project.year}</p>
            </div>
        </div>
      </section>

      {/* 4. THE CONCEPT / NARRATIVE */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4 sticky top-32">
            <h2 className="text-xs font-bold text-[#003152] uppercase tracking-[0.4em] mb-4">The Narrative</h2>
            <div className="w-12 h-[1px] bg-[#003152]"></div>
          </div>
          <div className="md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-light text-[#003152] leading-[1.4] tracking-tight"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC GALLERY GRID */}
      {project.gallery && (
        <section className="px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {project.gallery.map((img, index) => {
              // Create a sophisticated masonry logic
              const gridSpans = [
                "md:col-span-12 h-[80vh]", // Big hero
                "md:col-span-7 h-[60vh]",  // Large left
                "md:col-span-5 h-[60vh]",  // Small right
                "md:col-span-12 h-[80vh]", // Wide middle
                "md:col-span-6 h-[70vh]",  // Balanced left
                "md:col-span-6 h-[70vh]",  // Balanced right
              ];
              const spanClass = gridSpans[index % gridSpans.length];

              return (
                <motion.div
                  key={index}
                  className={`${spanClass} relative group overflow-hidden bg-gray-100`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    alt={`Project Detail ${index + 1}`} 
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

      {/* 6. TECHNICAL DRAWINGS SECTION */}
      {project.plans && (
        <section className="py-40 px-8 md:px-20 bg-[#f4f4f4]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <h4 className="text-[10px] font-bold tracking-[0.5em] text-gray-400 uppercase mb-4 text-center">Architectural Drafting</h4>
                <h3 className="text-4xl font-light text-[#003152] text-center uppercase tracking-widest">Plans & Schemes</h3>
            </div>
            <div className="space-y-32">
              {project.plans.map((plan, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                   <img src={plan} alt="Floor Plan" className="max-w-full h-auto mix-blend-multiply filter grayscale contrast-125" />
                   <div className="mt-8 text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">Fig. {i + 1} — Schematic Layout</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. VIDEO WALKTHROUGH */}
      {project.videoUrl && project.videoUrl.includes("embed") && (
        <section className="py-32 px-6">
           <div className="max-w-6xl mx-auto">
             <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={`${project.videoUrl}?autoplay=0&mute=1&loop=1`} 
                  title="Architectural Walkthrough"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
             </div>
           </div>
        </section>
      )}

      {/* 8. NEXT PROJECT NAVIGATION */}
      <footer className="relative py-40 bg-[#003152] overflow-hidden group">
          <Link to={`/projects/${nextProject.id}`} className="relative z-10 flex flex-col items-center text-center">
            <p className="text-white/40 text-[10px] tracking-[0.6em] uppercase mb-10">Next Exploration</p>
            <h2 className="text-5xl md:text-[8vw] font-light text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700">
                {nextProject.title}
            </h2>
            <div className="mt-12 flex items-center gap-4 text-white text-xs font-bold tracking-[0.4em] uppercase">
                View Project <FiArrowRight />
            </div>
          </Link>
          
          {/* Background Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[20vw] font-bold select-none whitespace-nowrap">
            NEXT WORK
          </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;