import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Amaka Johnson",
        role: "Homeowner",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Chuka Eze",
        role: "Real Estate Developer",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: "Sarah Opoku",
        role: "Interior Enthusiast",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "David Akin",
        role: "Land Investor",
        rating: 4.7,
        image: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        name: "Ngozi Daniels",
        role: "NGO Office Manager",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
        name: "Tunde Bakare",
        role: "Tech Hub Founder",
        rating: 5.0,
        image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
];

export default function Testimonials() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleTestimonials = () => {
        if (showAll) return testimonials;
        return isMobile ? testimonials.slice(0, 2) : testimonials.slice(0, 3);
    };

    return (
        <section className="bg-[#0F0F1A] py-12 px-6 text-white font-barlow">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>

                {/* ✅ Added ml-10 mr-10 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mr-10">
                    {visibleTestimonials().map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1C1C29] rounded-xl p-6 shadow-md hover:shadow-lg transition"
                        >
                            <p className="text-sm text-gray-300 mb-6">
                                <span className="text-xl text-gray-400 mr-2">“</span>
                                Rock Dezign turned my vision into a masterpiece. From concept to completion,
                                their team brought clarity, precision, and creativity that exceeded expectations.
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{t.name}</h4>
                                        <p className="text-sm text-gray-400">{t.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full">
                                    <span className="text-sm">{t.rating}</span>
                                    <FaStar className="text-orange-400 fill-orange-400 w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show more / less */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-sm text-white"
                    >
                        {showAll ? "Show Less ↑" : "See More →"}
                    </button>
                </div>
            </div>
        </section>
    );
}
