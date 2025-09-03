import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote: "Rock Dezign completely transformed our office space. Their team brought creativity and precision to every detail. We couldn’t be happier!",
    name: "Amaka Johnson",
    role: "Homeowner",
    company: "Rock Dezign",
    image: "https://tinyurl.com/bddbvswe",
    rating: 5,
  },
  {
    quote: "They delivered our dream home exactly as envisioned. Professional, punctual, and highly skilled team. Highly recommended!",
    name: "Chuka Eze",
    role: "Real Estate Developer",
    company: "Eze Properties",
    image: "https://tinyurl.com/4k67p8aa",
    rating: 4.9,
  },
  {
    quote: "Amazing attention to detail and superb execution. They understood our vision perfectly and brought it to life!",
    name: "Sarah Opoku",
    role: "Interior Enthusiast",
    company: "Opoku Designs",
    image: "https://tinyurl.com/44jh4ux8",
    rating: 4.8,
  },
  {
    quote: "The team at Rock Dezign made our renovation process effortless. Their communication and creativity were top-notch!",
    name: "David Akin",
    role: "Land Investor",
    company: "Akin Ventures",
    image: "https://tinyurl.com/4wwy3rz9",
    rating: 4.7,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      // Use the modulo operator for an infinite loop
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    // Loop back to the end of the array if at the beginning
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    // Loop back to the beginning of the array if at the end
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center justify-center font-barlow text-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Carousel Track */}
        <div
          className="flex transition-transform ease-in-out duration-[1000ms]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 text-center px-4 md:px-8"
            >
              <p className="text-lg md:text-xl italic leading-relaxed text-gray-700 font-serif max-w-2xl mx-auto mb-6">
                “{t.quote}”
              </p>

              <div className="flex flex-col items-center justify-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-300"
                />
                <div>
                  <p className="font-semibold uppercase tracking-wide">
                    {t.name}, {t.role}
                  </p>
                  <p className="uppercase tracking-wide text-sm text-gray-500 mb-2">
                    {t.company}
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(t.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
        >
          <FaChevronLeft className="text-gray-700 w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10"
        >
          <FaChevronRight className="text-gray-700 w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;