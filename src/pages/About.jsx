import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TeamSection from '../components/team/Teamsection';
import StatsSection from '../components/stats/Stats';
import { Helmet } from 'react-helmet';

const About = () => {
    const containerRef = useRef(null);
    
    return (
        <div className="bg-white overflow-hidden" ref={containerRef}>
            <Helmet>
                <title>About | Rock Dezign Architecture</title>
            </Helmet>

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
                <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url("https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257180/aboutus_xsen1u.webp")` 
                    }}
                    
                />
                <div className="relative z-10 text-center px-6">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white text-xs tracking-[0.6em] uppercase mb-6"
                    >
                        Established / 2026
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-6xl md:text-9xl font-light text-white tracking-tighter"
                    >
                        Rock <span className="italic font-serif">Dezign.</span>
                    </motion.h1>
                </div>
                <div className="absolute bottom-10 left-10 hidden md:block">
                    <p className="text-white/40 text-[10px] tracking-widest uppercase vertical-text">Scroll to Explore</p>
                </div>
            </section>

            {/* 2. THE PHILOSOPHY (REPLACING THE OLD ABOUT SECTION) */}
            <section className="pt-32 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-5">
                        <span className="text-[#003152] text-xs font-bold tracking-[0.4em] uppercase block mb-8">The Studio</span>
                        <h2 className="text-4xl md:text-6xl font-light text-[#003152] leading-none tracking-tighter mb-10">
                            Deep listening. <br />Enduring structures.
                        </h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            className="h-[1px] bg-[#003152] mb-10"
                        />
                    </div>
                    <div className="md:col-span-7">
                        <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
                            <p>
                                Based in Nigeria, Rock Dezign is a multidisciplinary architectural studio delivering 
                                sustainable solutions across residential, commercial, and cultural landscapes.
                            </p>
                            <p>
                                We believe that architecture is a dialogue between human needs and the environment. 
                                Our process is rooted in deep research, ensuring every line drawn serves a purpose 
                                today and remains relevant for generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            


{/* 4. VISION & MISSION (THE VISUAL MANIFESTO) */}
<section className="py-40 bg-white">
    <div className="max-w-[1800px] mx-auto px-6 md:px-20">
        <div className="flex flex-col space-y-48">
            
            {/* Vision Segment */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-5"
                >
                    <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-8 text-gray-400">Vision</span>
                    <h3 className="text-4xl md:text-6xl font-light text-[#003152] mb-10 leading-[1.1] tracking-tighter">
                        A world adorned with <span className="italic font-serif">masterpieces</span>.
                    </h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                        We cultivate a team armed with cutting-edge design skills, creating captivating, 
                        sustainable, and future-proof solutions for our global clientele.
                    </p>
                </motion.div>
                
                {/* Vision Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:col-span-7 aspect-[16/9] overflow-hidden bg-gray-100 shadow-2xl"
                >
                    <img 
                        src='https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770257184/vision_fgy2y6.webp'
                        alt="Visionary Architecture" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                    />
                </motion.div>
            </div>

            {/* Mission Segment */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* Mission Image (Left side for balance) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="md:col-span-7 order-2 md:order-1 aspect-[16/9] overflow-hidden bg-gray-100 shadow-2xl"
                >
                    <img 
                        src='https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240314/mission_h3ceac.jpg'
                        alt="Mission Focus" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 order-1 md:order-2 md:pl-20"
                >
                    <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-8 text-gray-400">Mission</span>
                    <h3 className="text-4xl md:text-6xl font-light text-[#003152] mb-10 leading-[1.1] tracking-tighter">
                        Listening deeply to <span className="italic font-serif">inspire</span>.
                    </h3>
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                        We conduct in-depth research into social and behavioural needs, interpreting 
                        humanity through multidisciplinary design processes.
                    </p>
                </motion.div>
            </div>

        </div>
    </div>
</section>
    

            <StatsSection />

       {/* 5. CORE VALUES (MODERN INTERACTIVE BLOCKS) */}
<section className="py-40 bg-white border-t border-gray-50">
    <div className="max-w-[1800px] mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Side: Sticky Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-6">Values</span>
                <h2 className="text-5xl font-light text-[#003152] tracking-tighter leading-none mb-8">
                    The bedrock of <br /> our <span className="italic font-serif">practice.</span>
                </h2>
                <p className="text-gray-400 font-light max-w-xs">
                    Every project at Rock Dezign is guided by four non-negotiable pillars.
                </p>
            </div>

            {/* Right Side: Large Interactive Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
                {[
                    { title: "Divine Inspiration", desc: "Creativity guided by vision and purpose.", icon: "✧" },
                    { title: "People-Centric", desc: "Designing for the human experience first.", icon: "◎" },
                    { title: "Long-Term Thinking", desc: "Creating legacies, not just buildings.", icon: "◰" },
                    { title: "Precision", desc: "Every millimeter matters in excellence.", icon: "⊞" }
                ].map((val, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: "#003152" }}
                        className="bg-white p-12 min-h-[350px] flex flex-col justify-between transition-colors duration-500 group"
                    >
                        <span className="text-4xl text-gray-200 group-hover:text-white/20 transition-colors">
                            {val.icon}
                        </span>
                        
                        <div>
                            <h4 className="text-2xl font-light text-[#003152] group-hover:text-white mb-4 tracking-tighter uppercase">
                                {val.title}
                            </h4>
                            <p className="text-gray-400 group-hover:text-white/70 font-light leading-relaxed">
                                {val.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
</section>

            <TeamSection />
        </div>
    );
};

export default About;