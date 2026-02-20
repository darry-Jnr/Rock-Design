import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import slide1 from '../../assets/images/img1.webp';
import slide3 from '../../assets/images/img2.webp';
import video1 from '../../assets/vedios/sample.mp4';
import video2 from '../../assets/vedios/sample2.mp4';

const slides = [
    { type: 'video', src: "https://res.cloudinary.com/dwlgcj8ht/video/upload/v1771216116/Montessori_K_4_hnomlm.mp4", title: 'Deep Listening', subtitle: 'The foundation of every project.' },
    // { type: 'video', src: video2, title: 'Innovative Design.', subtitle: 'Bespoke solutions for modern life.' },
    // { type: 'image', src: slide1, title: 'Solid Build.', subtitle: 'Engineering excellence in every brick.' },
    // { type: 'image', src: slide3, title: 'Timeless Spaces.', subtitle: 'Architecture that inspires generations.' },
];

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                speed={2500}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden">
                        {/* Media Layer */}
                        <div className="absolute inset-0 z-0">
                            {slide.type === 'video' ? (
                                <video
                                    src={slide.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover scale-105"
                                />
                            ) : (
                                <motion.div
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 10, ease: "linear" }}
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.src})` }}
                                />
                            )}
                            {/* Cinematic Overlay: Darker at the bottom for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Text Layer: Using Swiper-Active classes to trigger animations */}
                        <div className="relative z-20 h-full w-full flex items-end pb-24 px-6 md:px-20">
                            <div className="max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <span className="text-white/60 text-xs font-bold tracking-[0.6em] uppercase mb-4 block">
                                        Rock Dezign Studio
                                    </span>
                                    <h2 className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-none mb-6">
                                        {slide.title.split('.')[0]}
                                        <span className="italic font-serif text-white/80">.</span>
                                    </h2>
                                    <p className="text-white/40 text-lg md:text-xl font-light tracking-widest uppercase italic">
                                        {slide.subtitle}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination CSS for the "Line" look */}
            <style>
                {`
                    .swiper-pagination {
                        bottom: 40px !important;
                        left: auto !important;
                        right: 80px !important;
                        width: auto !important;
                        display: flex;
                        gap: 15px;
                    }
                    .swiper-pagination-bullet {
                        width: 40px !important;
                        height: 2px !important;
                        border-radius: 0 !important;
                        background: rgba(255,255,255,0.3) !important;
                        opacity: 1 !important;
                        margin: 0 !important;
                        transition: all 0.5s ease;
                    }
                    .swiper-pagination-bullet-active {
                        background: #ffffff !important;
                        width: 80px !important;
                    }
                `}
            </style>
        </section>
    );
};

export default Hero;