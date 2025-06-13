// src/components/carousel/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// ✅ Local assets
import slide1 from '../../assets/images/img1.jpg';
import slide3 from '../../assets/images/img2.jpg';
import video1 from '../../assets/vedios/sample.mov';
import video2 from '../../assets/vedios/sample2.mov';

const Carousel = () => {
    return (
        <section className="relative">
            <div className="relative h-[60vh] md:h-[100vh] font-barlow">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    speed={2000} // ⏱️ Smooth fade
                    loop={true}
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    {/* ✅ Video Slides FIRST */}
                    {[video1, video2].map((src, index) => (
                        <SwiperSlide key={`video-${index}`}>
                            <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}

                    {/* ✅ Then Image Slides */}
                    {[slide1, slide3].map((src, index) => (
                        <SwiperSlide key={`img-${index}`}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* ✅ Text Overlay */}
                <div className="absolute inset-0 z-10 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Inspiring Architecture
                    </h1>
                    <p className="text-md md:text-xl max-w-2xl">
                        Spaces that speak your vision — built with purpose and precision.
                    </p>
                </div>
            </div>

            {/* ✅ Pagination Styling */}
            <style>
                {`
                    .swiper-pagination-bullet {
                        background-color: #ccc !important;
                        opacity: 0.7;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #ffffff !important;
                        opacity: 1;
                    }
                `}
            </style>
        </section>
    );
};

export default Carousel;
