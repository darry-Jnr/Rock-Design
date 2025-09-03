import React, { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import Designflow from '../components/designflow/Designflow';
import { Helmet } from 'react-helmet';


import bannerImage from '../assets/images/servicesImg/banner.webp';
import animeImg1 from '../assets/images/servicesImg/anime-Img.webp?lqip';
import animeImg2 from '../assets/images/servicesImg/concept-img.webp?lqip';
import animeImg3 from '../assets/images/servicesImg/dev-img.webp?lqip';
import animeImg4 from '../assets/images/servicesImg/interior-img.webp?lqip';
import animeImg5 from '../assets/images/servicesImg/renovation-img.webp?lqip';
import animeImg6 from '../assets/images/servicesImg/residential-img.webp?lqip';

const services = [
  {
    title: 'Residential Design',
    price: 'Starting at $499',
    desc: 'We create comfortable, stylish, and functional homes that reflect your lifestyle and needs.',
    image: animeImg2,
    features: [
      'Custom floor plans',
      'Interior and exterior design concepts',
      'Client-focused revisions',
    ],
  },
  {
    title: 'Commercial Architecture',
    price: 'From $899',
    desc: 'Designing modern commercial spaces that balance creativity, functionality, and efficiency.',
    image: animeImg3,
    features: [
      'Office layouts and retail planning',
      '3D visualization',
      'Efficient space utilization',
    ],
  },
  {
    title: 'Interior Design',
    price: 'Tailored Quotes',
    desc: 'Transforming interiors with unique styles that blend aesthetics and practicality.',
    image: animeImg4,
    features: [
      'Mood boards and themes',
      'Material and furniture selection',
      'Lighting and color planning',
    ],
  },
  {
    title: '3D Visualization',
    price: 'Starts at $1,999',
    desc: 'Bring your ideas to life with photorealistic 3D renders and walkthroughs.',
    image: animeImg6,
    features: [
      'Detailed 3D modeling',
      'Lighting and textures',
      'Virtual project walkthroughs',
    ],
  },
  {
    title: 'Luxury Design',
    price: 'Custom Pricing',
    desc: 'Exclusive designs for high-end residences and commercial spaces with a premium touch.',
    image: animeImg5,
    features: [
      'Personalized concepts',
      'Premium material selection',
      'Attention to fine details',
    ],
  },
  {
    title: 'Renovation and Remodeling',
    price: 'Premium Plans',
    desc: 'Revamp existing spaces with modern design solutions tailored to your needs.',
    image: animeImg1,
    features: [
      'Full redesign plans',
      'Structural improvements',
      'Contemporary styling',
    ],
  },
];

const Services = () => {
    const [loaded, setLoaded] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setLoaded((prev) => [...new Set([...prev, index])]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        refs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>

            <Helmet>
                <title>Our Services | Rock Dezign</title>
                <meta name="description" content="Explore our services including residential, commercial, and interior anime-themed design solutions." />
                <meta name="keywords" content="services, residential, commercial, interior, anime design, Rock Dezign" />
                <meta name="author" content="Rock Dezign" />
                <meta property="og:title" content="Our Services | Rock Dezign" />
                <meta property="og:description" content="Designing spaces that reflect your anime inspirations with architectural excellence." />
            </Helmet>

            <div className="overflow-x-hidden font-barlow">
                {/* Banner */}
       <div
  className="relative text-white h-[60vh] sm:h-[70vh] md:h-[75vh] flex justify-center items-center px-4 sm:px-6 md:px-20"
  style={{
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient overlay for cinematic effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />


<h1
  className="absolute bottom-4 left-4 font-barlow text-2xl md:text-4xl font-semibold text-white leading-snug tracking-tight"
>
 Expertise
</h1>

</div>


                {/* Services Section */}
                <section id="services" className="bg-[#0F0F1A] text-white py-20 px-4 sm:px-6 md:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-index={index}
                                ref={(el) => (refs.current[index] = el)}
                                className="w-full sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#1C1C29]"
                            >
                                <div className="w-full h-48 sm:h-56 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-cover transition-all duration-1000 ease-out"
                                        style={{
                                            backgroundImage: `url(${loaded.includes(index)
                                                ? service.image.src
                                                : service.image.lqip
                                                })`,
                                            filter: loaded.includes(index) ? 'blur(0px)' : 'blur(10px)',
                                        }}
                                    ></div>
                                </div>
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

                <Designflow />

                <section className="bg-[#0f0f1a] py-20 px-4 sm:px-6 text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-[#CCCCCC] text-sm md:text-lg mb-8">
                            Let's discuss your vision and create something extraordinary together.
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
        </>
    );
};

export default Services;
