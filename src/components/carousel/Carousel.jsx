import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
    {
        type: 'video',
        // Optimised with Cloudinary auto-format and auto-quality
        src: "https://res.cloudinary.com/dwlgcj8ht/video/upload/q_auto,f_auto/v1771216116/Montessori_K_4_hnomlm.mp4",
        // Poster image is vital for fixing CLS (layout shift)
        poster: "https://res.cloudinary.com/dwlgcj8ht/video/upload/so_0/v1771216116/Montessori_K_4_hnomlm.jpg",
        title: 'Leadership. Innovation.',
        subtitle: 'Designing for a sustainable future.',
    },
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
                    renderBullet: (index, className) => `<span class="${className}"></span>`,
                }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden">

                        {/* Media Layer */}
                        <div className="absolute inset-0 z-0 bg-black">
                            {slide.type === 'video' ? (
                                <video
                                    src={slide.src}
                                    poster={slide.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
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
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Text Layer - Font Styles Preserved */}
                        <div className="relative z-20 h-full w-full flex items-end pb-24 px-6 md:px-16">
                            <div className="max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    <span className="text-white/40 text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block font-barlow">
                                        Rock Dezign Studio
                                    </span>
                                    <h1 className="text-5xl md:text-6xl font-light text-white tracking-tighter leading-none mb-6 font-barlow">
                                        Leadership<span className="italic font-serif text-white/50">.</span>{' '}
                                        Innovation<span className="italic font-serif text-white/50">.</span>
                                    </h1>
                                    <p className="text-white/40 text-sm font-light tracking-[0.4em] uppercase font-barlow">
                                        Designing for a sustainable future.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                       

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Corner brackets */}
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/15 z-30 pointer-events-none" />
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/15 z-30 pointer-events-none" />

            {/* Pagination CSS */}
            <style>{`
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
                    background: rgba(255,255,255,0.2) !important;
                    opacity: 1 !important;
                    margin: 0 !important;
                    transition: all 0.5s ease;
                }
                .swiper-pagination-bullet-active {
                    background: #ffffff !important;
                    width: 80px !important;
                }
            `}</style>
        </section>
    );
};

export default Hero;