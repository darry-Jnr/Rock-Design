import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview = () => {
    return (
        <section className="py-32 px-6 md:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* 1. IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-50 -z-10" />
                        <div className="overflow-hidden shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240254/panthers-4_ccoxej.webp"
                                alt="Studio Philosophy"
                                className="w-full aspect-[4/5] object-cover transition-all duration-1000 scale-105 hover:scale-100"
                            />
                        </div>
                    </motion.div>

                    {/* 2. TEXT & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gray-300 font-barlow block mb-8">
                            The Studio Philosophy
                        </span>

                        <h2 className="text-4xl md:text-5xl font-light text-[#003152] tracking-tighter leading-tight mb-10 font-barlow">
                            Strategic Leadership. <br />
                            <span className="italic font-serif text-gray-300">Innovative Design.</span>
                        </h2>

                        <div className="space-y-5">
                            <p className="text-sm text-gray-400 font-barlow font-light leading-relaxed">
                                At Rock Dezign, we believe architecture and design are more than buildings.
                                They are systems that shape how people live, work and interact. Our approach
                                is rooted in leadership and innovation — combining architectural excellence,
                                technology and strategic thinking to create intelligent, sustainable and
                                meaningful environments.
                            </p>
                            <p className="text-sm text-gray-400 font-barlow font-light leading-relaxed">
                                We embrace collaboration across disciplines because complex challenges demand
                                diverse expertise. By integrating local knowledge with global best practices,
                                we design solutions that are contextual, forward-looking and adaptable.
                                Our work balances human experience, environmental responsibility and
                                economic viability.
                            </p>
                            <p className="text-sm text-gray-400 font-barlow font-light leading-relaxed">
                                At Rock Dezign, we see each project as an opportunity to think systemically,
                                act decisively and shape the future of the built environment.
                            </p>
                        </div>

                        {/* PRIMARY & SECONDARY CTA BLOCK */}
                        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-10">
                            {/* Primary: Learn More */}
                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-[#003152] uppercase transition-all font-barlow"
                            >
                                <span>Discover our Story</span>
                                <div className="w-12 h-[1px] bg-[#003152] group-hover:w-20 transition-all duration-500" />
                            </Link>

                            {/* Secondary: Direct Action */}
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-[#003152] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-colors duration-300 font-barlow"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;