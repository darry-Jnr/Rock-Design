import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from '../data/projectData';
import { Helmet } from 'react-helmet';
import Imagebg from '../assets/images/about-content.webp?lqip';


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
    return (
        <>

            <Helmet>
                <title>Projects | Rock Dezign</title>
                <meta name="description" content="Take a look at our latest anime-inspired architectural projects." />
                <meta name="keywords" content="projects, portfolio, gallery, anime architecture, Rock Dezign" />
                <meta name="author" content="Rock Dezign" />
                <meta property="og:title" content="Projects | Rock Dezign" />
                <meta property="og:description" content="View completed designs and immersive environments crafted by Rock Dezign." />
            </Helmet>

            <div className="bg-white">

                <div className="relative h-[300px] md:h-[450px] font-barlow flex items-center overflow-hidden">

                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${Imagebg.lqip})`,
                            filter: 'blur(20px)',
                            transform: 'scale(1.05)',
                        }}
                    />
                    <img
                        src={Imagebg.src}
                        alt="Hero"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        style={{ opacity: 0 }}
                        onLoad={(e) => {
                            e.currentTarget.style.opacity = 1;
                            e.currentTarget.style.transition = 'opacity 1s ease-out';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <motion.div
                        className="relative z-20 px-4 md:px-10 text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-6xl font-thin mb-4 leading-tight">
                            Elevate Your <br /> Space with Rock Dezign
                        </h1>
                        <p className="text-sm md:text-lg text-gray-200 max-w-xl">
                            "From concept to construction, we create meaningful spaces rooted in vision and excellence."
                        </p>
                    </motion.div>
                </div>


                <div className="py-16 px-4 sm:px-6">
                    <h2 className="text-2xl md:text-4xl font-barlow text-[#003152] mb-10">
                        Our Projects
                    </h2>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {projectData.map((project) => (
  <motion.div
    key={project.id}
    variants={cardVariants}
  >
    <Link
      to={`/projects/${project.id}`}
      className="block bg-white shadow-sm rounded overflow-hidden hover:shadow-lg transition"
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden group">
        <img
          src={project.image.replace(/'/g, '')}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition"></div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div className="text-left mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold text-[#003152] mb-1">{project.title}</h3>
          <div className="flex gap-4 text-sm text-gray-600 mb-2">
            <span>{project.year}</span>
            <span>{project.country}</span>
          </div>
        </div>

      </div>
    </Link>
  </motion.div>
))}

                    </motion.div>


                    <motion.div
                        className="mt-20 bg-[#003152] text-white text-center py-12 px-4 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            Ready to Design with Purpose?
                        </h2>
                        <p className="text-white/80 mb-6 text-sm md:text-base max-w-xl mx-auto">
                            Whether you're building a legacy or transforming a space, Rock Dezign is your partner in architectural excellence.
                        </p>
                        <button className="bg-white text-[#003152] px-6 py-3 font-semibold hover:bg-gray-200 transition">
                            Start Your Project
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Projects;
