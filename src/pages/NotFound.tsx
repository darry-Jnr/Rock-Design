import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <>
           

            <div className="relative h-screen w-full bg-[#f8f8f8] flex flex-col items-center justify-center overflow-hidden">
                
                {/* BACKGROUND WATERMARK */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <h1 className="text-[30vw] font-bold text-[#003152]">404</h1>
                </div>

                {/* MAIN CONTENT */}
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#003152] text-xs font-bold tracking-[0.5em] uppercase block mb-6">
                            Error / Missing Structure
                        </span>
                        
                        <h2 className="text-6xl md:text-8xl font-light text-[#003152] tracking-tighter mb-8">
                            This space <br /> 
                            <span className="italic font-serif">does not exist.</span>
                        </h2>

                        <p className="text-gray-500 max-w-md mx-auto mb-12 font-light text-lg">
                            The blueprint you are looking for has been moved or hasn't been drafted yet. Let's get you back to the foundation.
                        </p>

                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-[#003152] text-white text-xs font-bold tracking-[0.3em] uppercase transition-all shadow-xl hover:bg-[#004a7c]"
                            >
                                Return Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* DECORATIVE ARCHITECTURAL ELEMENT */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                    className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] border-l border-t border-[#003152]"
                />
            </div>
        </>
    );
};

export default NotFound;