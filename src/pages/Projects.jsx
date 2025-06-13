import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectData from '../data/projectData';
import Imagebg from '../assets/images/about-content.jpg';

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
        <div className="bg-white">
            {/* ✅ Hero / Banner */}
            <div
                className="relative h-[300px] md:h-[450px] bg-cover bg-center font-barlow overflow-x-hidden flex items-center"
                style={{ backgroundImage: `url(${Imagebg})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.div
                    className="relative z-10 px-4 md:px-10 text-white"
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

            {/* ✅ Projects Section */}
            <div className="py-16 px-4 sm:px-6">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003152] mb-10">
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
                            className="bg-white shadow-sm"
                            variants={cardVariants}
                        >
                            {/* Image */}
                            <div
                                className="h-60 bg-cover bg-center"
                                style={{ backgroundImage: `url(${project.image})` }}
                            ></div>

                            {/* Info */}
                            <div className="bg-gray-100 p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                                <div className="text-left mb-4 sm:mb-0">
                                    <h3 className="text-xl font-semibold text-[#003152] mb-1">{project.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-600 mb-2">
                                        <span>{project.year}</span>
                                        <span>{project.country}</span>
                                    </div>
                                    <p className="text-sm text-gray-700">{project.description}</p>
                                </div>

                                <button
                                    className="w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-full hover:bg-[#00223d] transition"
                                    onClick={() => { }}
                                >
                                    <FaArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ✅ CTA Section */}
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
    );
};

export default Projects;
