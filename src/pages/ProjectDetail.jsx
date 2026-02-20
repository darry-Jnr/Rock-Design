import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import projectData from '../data/projectDetails';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Link to="/projects" className="text-[#003152] border-b border-[#003152]">Project not found. Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{project.title} | Rock Dezign</title>
      </Helmet>

      {/* 1. STICKY NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/projects" className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#003152]">
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> BACK
          </Link>
          <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase">Rock Dezign / 2026</span>
        </div>
      </nav>

      {/* 2. HEADER */}
      <header className="px-6 pt-16 pb-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <p className="text-[#003152] font-bold text-[10px] tracking-[0.5em] uppercase mb-4">{project.category}</p>
            <h1 className="text-5xl md:text-8xl font-light text-[#003152] tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-10 border-l border-gray-100 pl-10 h-fit">
            <div>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Location</p>
              <p className="text-sm font-medium uppercase tracking-wider">{project.country}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Project Year</p>
              <p className="text-sm font-medium uppercase tracking-wider">{project.year}</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* 3. MAIN HERO */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src={project.image.replace(/'/g, '')}
            alt={project.title}
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </section>

      {/* 4. BRIEF / DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold font-barlow text-[#003152] uppercase tracking-[0.3em] border-b border-gray-100 pb-4">Project Overview</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-2xl font-barlow text-gray-700 leading-relaxed font-light italic">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5. ASYMMETRIC EXTERIOR GALLERY */}
      {project.gallery && (
        <section className="bg-[#f9f9f9] py-32 px-6 mb-32">
          <div className="max-w-7xl mx-auto mb-20">
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-[#003152]">Exterior Visualizations</h2>
          </div>
          
          {/* Asymmetric Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            {project.gallery.map((img, index) => {
              // Modern pattern: Wide, then two small, then wide
              const isWide = index % 3 === 0;
              return (
                <motion.div
                  key={index}
                  className={`${isWide ? 'md:col-span-8' : 'md:col-span-4'} overflow-hidden shadow-sm`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={img} 
                    className="w-full h-[350px] md:h-[550px] object-cover  hover:grayscale-0 transition-all duration-1000" 
                    alt={`Exterior ${index + 1}`} 
                  />
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. TECHNICAL PLANS */}
      {project.plans && (
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="border-t border-gray-200 pt-20 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Architecture <br/> Layouts</h2>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 gap-12">
              {project.plans.map((plan, i) => (
                <div key={i} className="bg-white p-4 md:p-12 border border-gray-100 flex items-center justify-center">
                   <img src={plan} alt="Floor Plan" className="w-full h-auto mix-blend-multiply opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. VIDEO SECTION */}
      {project.videoUrl && project.videoUrl !== "https://www.youtube.com/embed/your-video-id" && (
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="relative aspect-video bg-black shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={project.videoUrl} 
                title="Walkthrough"
                frameBorder="0" 
                allowFullScreen
              />
           </div>
        </section>
      )}

      {/* 8. FOOTER NAVIGATION */}
      <footer className="py-32 border-t border-gray-100 text-center">
          <Link to="/projects" className="group inline-block">
            <p className="text-gray-400 text-[10px] tracking-[0.5em] uppercase mb-6">End of Project</p>
            <span className="text-3xl md:text-5xl font-light text-[#003152] group-hover:tracking-widest transition-all duration-700 uppercase tracking-tighter">
               Return to Gallery →
            </span>
          </Link>
      </footer>
    </div>
  );
};

export default ProjectDetail;