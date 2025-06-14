import { motion } from 'framer-motion';
import bannerImage from '../assets/images/about-banner.webp';
import aboutImage from '../assets/images/about-hero.webp';
import aboutContent from '../assets/images/about-content.webp';
import TeamSection from '../components/team/Teamsection';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import {
    FaPlay,
    FaLightbulb,
    FaUsers,
    FaHourglassHalf,
    FaHandsHelping,
    FaBalanceScale,
    FaBullseye,
} from 'react-icons/fa';

const About = () => {
    return (
        <section className="bg-white font-barlow">
            {/* ✅ Banner Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-white min-h-[60vh] md:min-h-[100vh] px-6 text-center flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <motion.div className="relative z-10 max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <p className="text-md pt:8 md:block md:text-lg max-w-xl mx-auto text-white/90 mb-8">
                        Solving human needs through architecture that listens, inspires, and transforms.
                    </p>

                    {/* CountUp Stats */}
                    <motion.div
                        className="flex justify-center items-center gap-6 mt-6 text-white text-center md:grid md:grid-cols-3 md:gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2 className="text-4xl font-bold">
                                <CountUp end={150} duration={2} />+
                            </h2>
                            <p className="text-sm mt-1 text-white/90">Projects Completed</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">
                                <CountUp end={25} duration={2} />+
                            </h2>
                            <p className="text-sm mt-1 text-white/90">Awards Won</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">
                                <CountUp end={8} duration={2} />
                            </h2>
                            <p className="text-sm mt-1 text-white/90">Years Experience</p>
                        </div>
                    </motion.div>

                    {/* Explore Button */}
                    <motion.div className="mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
                        >
                            <FaPlay className="text-sm" />
                            Explore Our Work
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ✅ Image + Text Section with Background */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-20 px-6 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${aboutContent})` }}
            >
                <h1 className="text-3xl md:text-5xl font-bold md:ml-10 mb-5 text-[#003152] drop-shadow">
                    About Rock Dezign
                </h1>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div className="ml-10" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8 }}>
                        <img
                            src={aboutImage}
                            alt="About Rock Dezign"
                            className="w-full h-[310px] object-cover"
                        />
                    </motion.div>
                    <motion.div className="mr-10 text-gray-600 space-y-6 text-md leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <p>
                            Rock Dezign is an architectural and design company dedicated to enriching the world
                            with stunning masterpieces. We cultivate a team armed with cutting-edge design skills,
                            creating captivating, sustainable, and future-proof solutions.
                        </p>
                        <p>
                            We envision a world where design addresses existing, emerging, and future challenges.
                            By researching human behavior and social needs, we craft designs that transcend expectations.
                        </p>
                        <p>
                            Every detail is purposeful: from divine inspiration to long-term thinking and collaborative
                            excellence. At Rock Dezign, we don’t just build spaces — we build solutions.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* ✅ Vision & Mission Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="py-20 px-6 bg-white"
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 border-t border-b border-gray-200">
                    <div className="p-8">
                        <h3 className="text-sm font-semibold text-[#310A51] tracking-widest mb-1">A.01</h3>
                        <h2 className="text-xl font-bold text-[#310A51] mb-4">OUR VISION</h2>
                        <div className="bg-[#003152] text-white p-6 mb-4">
                            <p className="text-lg font-semibold leading-snug">
                                A world adorned<br />
                                with beautiful structures,<br />
                                solving human needs<br />
                                at their core
                            </p>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            <strong>Rock Dezign</strong> is an architectural and design company dedicated to enriching the world with stunning masterpieces.
                            We cultivate a team armed with cutting-edge design skills, creating captivating, sustainable, and future-proof solutions for our clients.
                        </p>
                    </div>
                    <div className="p-8 border-l border-gray-200">
                        <h3 className="text-sm font-semibold text-[#310A51] tracking-widest mb-1">A.02</h3>
                        <h2 className="text-xl font-bold text-[#310A51] mb-4">OUR MISSION</h2>
                        <div className="bg-[#f4f4f4] text-[#003152] p-6 mb-4">
                            <p className="text-lg font-semibold leading-snug">
                                Listening deeply to<br />
                                the core of human needs,<br />
                                producing design masterpieces<br />
                                that satisfy and inspire
                            </p>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            At <strong>Rock Dezign</strong>, we conduct in-depth research into the diverse social and behavioural needs of humanity.
                            We analyse and interpret these needs through multidisciplinary design processes,
                            delivering comprehensive and exceptional solutions that transcend expectations.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* ✅ Core Values */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="pb-20 px-6 text-center"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#003152] mb-6">Our Core Values</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-sm md:text-md">
                    <div className="flex items-center gap-2">
                        <FaLightbulb className="text-[#003152] w-5 h-5" />
                        Divine Inspiration
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers className="text-[#003152] w-5 h-5" />
                        People-Centric
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHourglassHalf className="text-[#003152] w-5 h-5" />
                        Long-Term Thinking
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHandsHelping className="text-[#003152] w-5 h-5" />
                        Inclusive Collaboration
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBalanceScale className="text-[#003152] w-5 h-5" />
                        Balanced Excellence
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBullseye className="text-[#003152] w-5 h-5" />
                        Clarity & Precision
                    </div>
                </div>
            </motion.div>

            <TeamSection />
        </section>
    );
};

export default About;