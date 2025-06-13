import React from 'react';
import { FaCheckCircle, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Designflow from '../components/designflow/Designflow';

import bannerImage from '../assets/images/servicesImg/banner.jpg';
import animeImg1 from '../assets/images/servicesImg/anime-Img.jpg';
import animeImg2 from '../assets/images/servicesImg/concept-img.jpg';
import animeImg3 from '../assets/images/servicesImg/dev-img.jpg';
import animeImg4 from '../assets/images/servicesImg/interior-img.jpg';
import animeImg5 from '../assets/images/servicesImg/renovation-img.jpg';
import animeImg6 from '../assets/images/servicesImg/residential-img.jpg';

const services = [
    // ... same service array
];

const Services = () => {
    return (
        <div className="overflow-x-hidden font-barlow">
            {/* ✅ Intro Banner */}
            <div
                className="relative text-white h-[75vh] md:h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 text-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0" />
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                        Designing Tomorrow&apos;s Spaces
                    </h2>
                    <p className="text-sm md:text-lg text-[#CCCCCC] mb-10">
                        Where anime aesthetics meet architectural excellence. Transform your world with our unique design philosophy that brings fantasy to life.
                    </p>

                    {/* ✅ Stats Section */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold">
                                <CountUp end={6} duration={2} />
                            </h3>
                            <p className="text-sm">Core Services</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold">
                                <CountUp end={200} duration={2} />+
                            </h3>
                            <p className="text-sm">Happy Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold">
                                <CountUp end={24} duration={1.5} />/<CountUp end={7} duration={1.5} />
                            </h3>
                            <p className="text-sm">Support</p>
                        </div>
                    </div>

                    {/* ✅ Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
                        >
                            <FaSearch className="text-sm" />
                            Explore Services
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition"
                        >
                            <FaCalendarAlt className="text-sm" />
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </div>

            {/* ✅ Services Cards */}
            <section id="services" className="bg-[#0F0F1A] text-white py-20 px-4 sm:px-6 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#1C1C29]"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="p-6">
                                <div className="mb-2 text-sm text-[#f0fdff] uppercase">{service.price}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm sm:text-base">{service.desc}</p>
                                <ul className="space-y-2 text-sm">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <FaCheckCircle className="mt-0.5 text-gray-300" />
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-6 px-5 py-2 text-sm rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Design Flow Component */}
            <Designflow />

            {/* ✅ Final Call to Action */}
            <section className="bg-[#0f0f1a] py-20 px-4 sm:px-6 text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-[#CCCCCC] text-sm md:text-lg mb-8">
                        Let's discuss your vision and create something extraordinary together.
                        Your anime-inspired architectural journey starts with a simple conversation.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 rounded-full bg-white text-[#003152] font-semibold hover:bg-[#CCCCCC] transition"
                    >
                        Book Free Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
