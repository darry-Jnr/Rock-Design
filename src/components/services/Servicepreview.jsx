import { Link } from 'react-router-dom';
import interiorImg from '../../assets/images/interior-img.webp';

const services = [
    {
        id: '01',
        title: 'Residential',
        desc: 'Bespoke private homes and housing developments, balancing beauty, comfort, and function.',
        bg: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240254/panthers-4_ccoxej.webp",
    },
    {
        id: '02',
        title: 'Commercial Architecture',
        desc: 'Offices, malls and retail spaces, designed for productivity and long term commercial value.',
        bg: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240321/Red_2_v9xnmr.webp",
    },
    {
        id: '03',
        title: 'Institutional Architecture',
        desc: 'Educational, civic, and organizational buildings that serve communities effectively.',
        bg: "https://res.cloudinary.com/dwlgcj8ht/image/upload/v1770240269/Red_4_zngleg.jpg",
    },
    {
        id: '04',
        title: 'Interior Design',
        desc: 'Carefully crafted interior spaces that enhance utility and user experience.',
        bg: interiorImg,
    },
];

const ServicePreview = () => {
    return (
        <section className="py-32">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 px-6 md:px-16 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-xl">
                    <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-gray-300 font-barlow block mb-6">
                        Our Services
                    </span>
                    <h2 className="text-5xl md:text-7xl font-light text-[#003152] tracking-tighter leading-[0.85] font-barlow">
                        Our <span className="italic font-serif">Services.</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest leading-relaxed font-barlow">
                    Shaping spaces and environments through leadership and innovation.
                </p>
            </div>

            {/* 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-gray-100">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-[500px] md:h-[650px] overflow-hidden bg-black border-r border-white/10 last:border-r-0"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-center bg-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
                            style={{ backgroundImage: `url(${item.bg})` }}
                        />

                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-between p-8">
                            <span className="text-white/40 font-bold tracking-[0.3em] text-[10px] font-barlow">
                                {item.id}
                            </span>

                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <h3 className="text-2xl font-light text-white tracking-tighter mb-4 font-barlow">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 font-barlow">
                                    {item.desc}
                                </p>
                                <div className="mt-6 h-[1px] bg-white/30 w-0 group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
                <Link
                    to="/services"
                    className="inline-block text-[10px] font-bold tracking-[0.6em] text-[#003152] uppercase hover:opacity-50 transition-all font-barlow"
                >
                    View Comprehensive Expertise →
                </Link>
            </div>
        </section>
    );
};

export default ServicePreview;