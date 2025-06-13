import React from 'react';
import contactImage from '../../src/assets/images/contact-img.jpg';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Imagebg from '../assets/images/about-content.jpg';

const Contact = () => {
    return (
        <>
            {/* ✅ Contact Form Section */}
            <section
                className="relative min-h-screen pt-20 px-4 sm:px-6 md:px-20 flex flex-col font-barlow md:flex-row bg-cover bg-center"
                style={{ backgroundImage: `url(${Imagebg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Left Image */}
                <div className="md:w-1/2 w-full h-60 md:h-auto relative z-10">
                    <img
                        src={contactImage}
                        alt="Contact Architecture"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Form */}
                <div className="md:w-1/2 w-full p-6 md:p-12 flex flex-col justify-center relative z-10 bg-white/90 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-[#003152] mb-2">Let’s Get In Touch.</h2>
                    <p className="mb-6 text-gray-600 text-sm sm:text-base">
                        Or just reach out manually to{' '}
                        <a href="mailto:hello@rockdezign.com" className="text-[#310A51] font-medium underline">
                            hello@rockdezign.com
                        </a>
                    </p>

                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-[#003152]"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-[#003152]"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-[#003152]"
                        />

                        <input
                            type="tel"
                            placeholder="+234 000 000 0000"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-[#003152]"
                        />

                        <textarea
                            placeholder="Enter your message..."
                            rows="4"
                            maxLength={300}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-[#003152]"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#310A51] text-white w-full py-3 rounded-lg text-sm font-semibold hover:bg-[#003152] transition"
                        >
                            Submit Form →
                        </button>
                    </form>
                </div>
            </section>

            {/* ✅ Reach Out Details Section */}
            <div className="bg-white py-16 px-4 sm:px-6 md:px-20">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        We’d Love to Hear From You.
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm sm:text-base">
                        Or just reach out manually to{' '}
                        <a
                            href="mailto:hello@rockdezign.com"
                            className="text-[#310A51] underline font-medium"
                        >
                            hello@rockdezign.com
                        </a>
                        .
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="flex items-start gap-4">
                        <div className="bg-[#003152]/10 p-3 rounded-full">
                            <FiMail className="w-6 h-6 text-[#003152]" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Email Support</h3>
                            <p className="text-gray-500 text-sm">Our team can respond in real time.</p>
                            <p className="text-[#310A51] text-sm mt-1">hello@rockdezign.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-[#003152]/10 p-3 rounded-full">
                            <FiMapPin className="w-6 h-6 text-[#003152]" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Visit Our Office</h3>
                            <p className="text-gray-500 text-sm">Come meet us at our HQ in person.</p>
                            <p className="text-[#310A51] text-sm mt-1">221b Architecture Street, Lagos</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-[#003152]/10 p-3 rounded-full">
                            <FiPhone className="w-6 h-6 text-[#003152]" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Call Us Directly</h3>
                            <p className="text-gray-500 text-sm">Available during working hours.</p>
                            <p className="text-[#310A51] text-sm mt-1">(+234) 906 - 000 - 0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
