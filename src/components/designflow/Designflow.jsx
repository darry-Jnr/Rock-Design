import React, { useEffect, useRef, useState } from 'react';
import { FaRegComments, FaDraftingCompass, FaHammer, FaEye, FaLightbulb } from 'react-icons/fa';

// ✅ Images with LQIP
import design1 from '../../assets/images/designImg/consultation.webp?lqip';
import design2 from '../../assets/images/designImg/concept.webp?lqip';
import design3 from '../../assets/images/designImg/design.webp?lqip';
import design4 from '../../assets/images/designImg/construction.webp?lqip';
import design5 from '../../assets/images/designImg/final.webp?lqip';

const steps = [
    {
        id: 1,
        title: 'Initial Consultation',
        description: 'Discuss your vision and anime inspirations',
        icon: <FaRegComments className="text-white text-2xl" />,
        bg: design1,
    },
    {
        id: 2,
        title: 'Concept Design',
        description: 'Create detailed sketches and 3D visualizations',
        icon: <FaDraftingCompass className="text-white text-2xl" />,
        bg: design2,
    },
    {
        id: 3,
        title: 'Design Development',
        description: 'Refine details and select materials',
        icon: <FaLightbulb className="text-white text-2xl" />,
        bg: design3,
    },
    {
        id: 4,
        title: 'Construction',
        description: 'Bring your anime world to life',
        icon: <FaHammer className="text-white text-2xl" />,
        bg: design4,
    },
    {
        id: 5,
        title: 'Final Reveal',
        description: 'Step into your completed anime',
        icon: <FaEye className="text-white text-2xl" />,
        bg: design5,
    },
];

const Designflow = () => {
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
        <div className="py-10 md:ml-10 md:mr-10 font-barlow">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">Our Design Process</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    From concept to completion, we guide you through every step of creating your dream space
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        data-index={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="relative h-[180px] sm:h-[220px] w-full text-white overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-out"
                            style={{
                                backgroundImage: `url(${loaded.includes(index) ? step.bg.src : step.bg.lqip
                                    })`,
                                filter: loaded.includes(index) ? 'blur(0px)' : 'blur(10px)',
                            }}
                        />
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between p-5">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#003152] p-2 rounded-full">{step.icon}</div>
                                <h3 className="text-lg font-bold">{step.title}</h3>
                            </div>
                            <div className="text-sm text-white/80">{step.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Designflow;
