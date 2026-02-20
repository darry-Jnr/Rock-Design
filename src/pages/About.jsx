import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TeamSection from '../components/team/Teamsection';
import StatsSection from '../components/stats/Stats';
import { Helmet } from 'react-helmet';
// Import your trademark image
import mark from "../assets/images/mark.png"

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
                        className="text-white text-xs tracking-[0.6em] uppercase mb-10 font-barlow"
                    >
                        Established / 2026
                    </motion.p>
                    
                    {/* TRADEMARK IMAGE REPLACING TEXT H1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <img 
                            src={mark} 
                            alt="Rock Dezign Trademark" 
                            className="h-20 md:h-32 w-auto object-contain invert brightness-[200%] drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                        />
{/*                      
                        <span className="text-white/40 italic font-serif text-xl md:text-2xl mt-4 tracking-tighter">
                            Architecture & Beyond.
                        </span> */}
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-10 hidden md:block">
                    <p className="text-white/40 text-[10px] tracking-widest uppercase vertical-text font-barlow">
                        Scroll to Explore
                    </p>
                </div>
            </section>

            {/* 2. THE PHILOSOPHY */}
            <section className="pt-32 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-16 items-start">
                    <div className="md:col-span-5">
                        <span className="text-[#003152] text-xs font-bold tracking-[0.4em] uppercase block mb-8 font-barlow">The Studio</span>
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
                        <div className="space-y-8 font-barlow text-xl text-gray-600 font-light leading-relaxed">
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

            {/* 4. VISION & MISSION */}
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
                                <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-8 text-gray-400 font-barlow">Vision</span>
                                <h3 className="text-4xl md:text-6xl font-light text-[#003152] mb-10 leading-[1.1] tracking-tighter">
                                    A world adorned with <span className="italic font-serif text-gray-400">masterpieces</span>.
                                </h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                                    We cultivate a team armed with cutting-edge design skills, creating captivating, 
                                    sustainable, and future-proof solutions for our global clientele.
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
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
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                className="md:col-span-7 order-2 md:order-1 aspect-[16/9] overflow-hidden bg-gray-100 shadow-2xl"
                            >
                                <img 
                                    src='https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240327/PORTO-RICO_tr3kbi.png'
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
                                <span className="text-[#003152] text-[10px] font-bold tracking-[0.6em] uppercase block mb-8 text-gray-400 font-barlow">Mission</span>
                                <h3 className="text-4xl md:text-6xl font-light text-[#003152] mb-10 leading-[1.1] tracking-tighter">
                                    Listening deeply to <span className="italic font-serif text-gray-400">inspire</span>.
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

{/* 5. CORE VALUES (ARCHITECTURAL MINIMALISM) */}
<section className="py-40 bg-white border-t border-gray-50">
    <div className="max-w-[1800px] mx-auto px-6 md:px-20">
        <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Left side: Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <span className="text-[#003152] text-[10px] font-bold tracking-[0.8em] uppercase block mb-6 font-barlow">
                    Philosophy
                </span>
                <h2 className="text-6xl md:text-7xl font-light text-[#003152] tracking-tighter leading-[0.9] mb-8 font-barlow">
                    The bedrock of <br /> 
                    <span className="italic font-serif text-gray-400">our practice.</span>
                </h2>
                <div className="w-20 h-[1px] bg-gray-200 mb-8" />
                <p className="text-gray-400 font-light max-w-xs leading-relaxed font-barlow">
                    Every project at Rock Dezign is guided by four non-negotiable pillars that ensure architectural excellence.
                </p>
            </div>

            {/* Right side: Clean, Static Text with Animated Underline */}
            <div className="lg:col-span-8 flex flex-col">
                {[
                    { number: "01", title: "Divine Inspiration", desc: "Creativity guided by vision and purpose. We believe architecture is a higher calling to harmonize space and spirit.", icon: "✧" },
                    { number: "02", title: "People-Centric", desc: "Designing for the human experience first. Our structures are built to enhance the lives of those who inhabit them.", icon: "◎" },
                    { number: "03", title: "Long-Term Thinking", desc: "Creating legacies, not just buildings. We design for durability, sustainability, and timeless relevance.", icon: "◰" },
                    { number: "04", title: "Precision", desc: "Every millimeter matters. Our commitment to excellence is found in the smallest details of execution.", icon: "⊞" }
                ].map((val, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group relative border-b border-gray-100 py-16 flex flex-col md:flex-row md:items-start justify-between"
                    >
                        {/* 1. Title Area - Text remains identical on hover */}
                        <div className="flex items-start gap-8 md:w-1/2 relative">
                            <span className="text-sm font-bold font-barlow text-gray-300 mt-2">
                                {val.number}
                            </span>
                            <div className="relative">
                                <h4 className="text-4xl md:text-5xl font-light text-[#003152] tracking-tighter uppercase font-barlow">
                                    {val.title}
                                </h4>
                                
                                {/* THE ONLY HOVER EFFECT: The Blue Underline */}
                                <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#003152] group-hover:w-full transition-all duration-700 ease-in-out" />
                            </div>
                        </div>

                        {/* 2. Description Area - Completely Static */}
                        <div className="mt-6 md:mt-0 md:w-5/12">
                            <p className="text-gray-500 font-light leading-relaxed font-barlow text-lg">
                                {val.desc}
                            </p>
                        </div>

                        {/* 3. Subtle Icon Accent */}
                        <div className="hidden md:block text-2xl text-gray-100 pt-2 select-none">
                            {val.icon}
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