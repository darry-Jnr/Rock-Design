import { motion } from 'framer-motion';
import bannerImage from '../assets/images/aboutus.webp';
import aboutImage from '../assets/images/about-hero.webp';
import aboutContent from '../assets/images/about-content.webp';
import TeamSection from '../components/team/Teamsection';
import { Helmet } from 'react-helmet';
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
        <>
            <Helmet>
                <title>About Us | Rock Dezign</title>
                <meta name="description" content="Learn about Rock Dezign’s mission to design dreamlike spaces inspired by anime aesthetics." />
                <meta name="keywords" content="about, architecture firm, anime-inspired design, Rock Dezign" />
                <meta name="author" content="Rock Dezign" />
                <meta property="og:title" content="About Us | Rock Dezign" />
                <meta property="og:description" content="Our team transforms ideas into timeless, functional, and anime-inspired spaces." />
            </Helmet>


            <section className="bg-white font-barlow">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-white min-h-[60vh] md:min-h-[75vh] px-6 text-center flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 z-0">
<h1
  className="absolute bottom-4 left-4 font-barlow text-2xl md:text-4xl font-semibold text-white leading-snug tracking-tight"
>
  About
</h1>

                    </div>
                  </motion.div>

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
                        <motion.div className="md:ml-10" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8 }}>
                            <img
                                src={aboutImage}
                                alt="About Rock Dezign"
                                className="w-full h-[310px] object-cover"
                            />
                        </motion.div>
                        <motion.div className="mr-10 text-gray-600 space-y-6 text-md leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                            <p>
                               At Rock Dezign, we focus 
on deep listening, 
innovative design, and 
creating enduring 
structures. Based in 
Nigeria, we are a team of 
professional architects 
and designers delivering 
sustainable solutions 
across residential, 
commercial, and cultural 
projects.
                            </p>
                            <p>
                               Our work spans homes, 
workplaces, interiors, and 
large-scale 
developments, each 
shaped by a commitment 
to quality, functionality, 
and timeless design. With 
a balance of global 
perspective and local 
understanding, we create 
architecture and spaces 
that serve people today 
and remain relevant for 
generations.
                            </p>
                            
                        </motion.div>
                    </div>
                </motion.div>


                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="py-20 px-6 bg-white"
                >
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 border-t border-b border-gray-200">
                        <div className="md:p-8">
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
                        <div className="md:p-8 pt-8 border-l border-gray-200">
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
        </>
    );
};

export default About;