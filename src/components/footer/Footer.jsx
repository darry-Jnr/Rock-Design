import { FaArrowUp, FaInstagram, FaBehance } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
import logo from '../../assets/images/faviconn.png';
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-20 font-barlow">
            <div className="max-w-7xl mx-auto">

                {/* 1. TOP CTA */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-none mb-6">
                            Have a vision in mind? <br />
                            <span className="italic font-serif text-gray-500">Let's discuss.</span>
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block text-xs font-bold tracking-[0.5em] uppercase border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all"
                        >
                            Start a Commission →
                        </Link>
                    </div>
                    <div className="flex md:justify-end items-start">
                        <div className="text-left md:text-right">
                            <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-4">
                                General Inquiries
                            </p>
                            <p className="text-xl font-light italic mb-1">info@rockdezign.com</p>
                            <p className="text-xl font-light tracking-tighter text-gray-400">
                                (+234) 814 269 9879
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-t border-white/10 pt-16">

                    {/* Logo + About */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} className="h-12 w-auto" alt="Rock Dezign Logo" />
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed font-light">
                            Rock Dezign is a multidisciplinary architectural practice shaping the built
                            environment through strategic leadership, innovative design, and integrated
                            collaboration.
                        </p>
                    </div>

                    {/* Studio Links */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-white/40">
                            Studio
                        </h4>
                        <ul className="space-y-3 text-sm font-light">
                            <li>
                                <Link to="/about" className="hover:text-gray-500 transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-gray-500 transition">
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gray-500 transition">
                                    Expertise
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-500 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect — only links that exist */}
                    <div>
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-white/40">
                            Connect
                        </h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li>
                                <a
                                    href="https://www.instagram.com/rockdezign"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-gray-400 transition"
                                >
                                    <FaInstagram size={14} /> Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/rock-dezign"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-gray-400 transition"
                                >
                                    <CiLinkedin size={16} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.behance.net/RockDezign"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-gray-400 transition"
                                >
                                    <FaBehance size={14} /> Behance
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.fiverr.com/rock_dezign"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 hover:text-gray-400 transition"
                                >
                                    <SiFiverr size={14} /> Fiverr
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location + Back to Top */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-white/40">
                                Location
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Ikeja, <br />
                            Lagos, Nigeria.
                            </p>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="mt-8 flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase hover:text-gray-400 transition w-fit"
                        >
                            Top <FaArrowUp size={12} />
                        </button>
                    </div>

                </div>
                {/* END MAIN GRID */}

                {/* 3. BOTTOM BAR */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-600 tracking-widest uppercase">
                        © 2026 Rock Dezign Architecture Studio. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] text-gray-600 tracking-widest uppercase">
                        <a href="#" className="hover:text-white transition">Privacy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                    </div>
                </div>
                {/* END BOTTOM BAR */}

            </div>
            {/* END max-w-7xl */}

        </footer>
    );
};

export default Footer;