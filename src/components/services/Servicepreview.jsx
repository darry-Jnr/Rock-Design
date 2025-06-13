import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaCouch } from 'react-icons/fa';

import residentialImg from '../../assets/images/residential-img.jpg';
import commercialImg from '../../assets/images/commercial-img.jpg';
import interiorImg from '../../assets/images/interior-img.jpg';

const ServicePreview = () => {
    const services = [
        {
            title: 'Residential Design',
            desc: 'Homes that breathe comfort and creativity.',
            icon: <FaHome className="text-2xl text-white" />,
            bg: residentialImg,
        },
        {
            title: 'Commercial Architecture',
            desc: 'Innovative spaces for business excellence.',
            icon: <FaBuilding className="text-2xl text-white" />,
            bg: commercialImg,
        },
        {
            title: 'Interior Design',
            desc: 'Curated interiors that reflect purpose and beauty.',
            icon: <FaCouch className="text-2xl text-white" />,
            bg: interiorImg,
        },
    ];

    return (
        <section className="py-20 px-0">
            <div className="text-center mb-10 px-4 font-barlow">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003152]">Our Services</h2>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                    Explore how Rock Dezign solves architectural problems with precision, beauty, and purpose.
                </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-[240px] md:h-[340px] overflow-hidden text-white"
                    >
                        {/* Background image container with zoom */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="w-full h-full bg-center bg-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.bg})` }}
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 z-0"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-6">
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link
                    to="/services"
                    className="inline-block px-6 py-2 border border-[#003152] text-[#003152] rounded-full hover:bg-[#003152] hover:text-white transition"
                >
                    View All Services →
                </Link>
            </div>
        </section>
    );
};

export default ServicePreview;
