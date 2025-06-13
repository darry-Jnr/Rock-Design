import { SlSocialFacebook } from "react-icons/sl";
import { FaPinterestP, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-gray-400 px-4 font-barlow sm:px-6 py-10">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-10 mb-8">
                {/* Logo */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4 sm:mb-0">Rock Dezign</h2>
                </div>

                {/* Social Icons + Back to Top */}
                <div className="flex items-center space-x-5 text-lg">
                    <a href="#" className="text-white hover:text-gray-400 transition">
                        <FaPinterestP size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition">
                        <CiLinkedin size={22} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition">
                        <FaYoutube size={22} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-400 transition">
                        <SlSocialFacebook size={20} />
                    </a>

                    {/* Back to Top Arrow */}
                    <button
                        onClick={scrollToTop}
                        className="ml-4 text-white hover:text-gray-400 transition"
                        aria-label="Back to Top"
                        title="Back to Top"
                    >
                        <FaArrowUp size={20} />
                    </button>
                </div>
            </div>

            {/* Nav Links */}
            <div className="ml-10 mt-10">
                <div className="flex flex-col sm:flex-row justify-between text-sm">
                    <ul className="space-y-2 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Team</a></li>
                        <li><a href="#" className="hover:text-white">Portfolio</a></li>
                        <li><a href="#" className="hover:text-white">Testimonials</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                    <div className="space-x-4 mt-4 mr-10 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 mb-10 mx-10" />

            {/* Email Subscription */}
            <div className="text-center ">
                <h3 className="text-gray-400 ">
                    © 2025 NekoArch Studio. Made with
                    and lots of anime inspiration
                </h3>


            </div>
        </footer>
    );
};

export default Footer;
