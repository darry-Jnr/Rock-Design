import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            {/* Main navbar content */}
            <div className="flex justify-between items-center max-w-7xl font-barlow mx-auto px-6 py-4">
                {/* Logo */}
                <div className={`text-2xl font-bold ${scrolled ? 'text-[#003152]' : 'text-white'}`}>
                    <Link to="/">Rock Dezign</Link>
                </div>

                {/* Desktop Nav */}
                <div className={`hidden  md:flex space-x-6 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <HiX className={`w-6 h-6 ${scrolled ? 'text-[#003152]' : 'text-white'}`} />
                        ) : (
                            <HiMenu className={`w-6 h-6 ${scrolled ? 'text-[#003152]' : 'text-white'}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* ✅ Always-visible line */}
            <div className="max-w-7xl mx-auto px-6">
                <hr className="border-gray-300" />
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className={`md:hidden flex flex-col space-y-4 px-6 pb-6 ${scrolled ? 'bg-white text-gray-700' : 'bg-black/80 text-white'}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
