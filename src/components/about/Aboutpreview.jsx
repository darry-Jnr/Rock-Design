import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import aboutImage from '../../assets/images/aboutpreview.webp?lqip';

const AboutPreview = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="next-section" className="pt-10 pb-20 px-6 font-barlow md:px-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* ✅ Image with LQIP blur transition */}
                <div className="relative w-full">
                    <Link to="/about">
                        <div
                            ref={imgRef}
                            className="w-full h-[220px] md:h-[300px] bg-center bg-cover transition-all duration-1000 ease-out"
                            style={{
                                backgroundImage: `url(${isLoaded ? aboutImage.src : aboutImage.lqip})`,
                                filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
                            }}
                        />
                        <span className="absolute bottom-4 left-4 text-white text-sm md:text-base font-semibold">
                            About
                        </span>
                    </Link>
                </div>

                {/* ✅ Text Section */}
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003152] mb-6">
                        About Rock Dezign
                    </h2>

                    <p className="text-gray-700 text-md md:text-lg mb-4">
                        At Rock Dezign, we believe that true design begins with listening — deeply and intentionally — to human needs. Rooted in divine inspiration, our mission is to create architectural masterpieces that are both functional and timeless.
                    </p>

                    <p className="text-gray-600 text-sm md:text-md mb-8">
                        Every project we touch aims to solve real-world challenges with clarity, collaboration, and long-term impact. Our designs aren’t just structures — they’re solutions.
                    </p>

                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 px-6 py-2 border border-[#003152] text-[#003152] rounded-full font-medium hover:bg-[#003152] hover:text-white transition"
                    >
                        Learn More <FaArrowRight className="text-sm" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
