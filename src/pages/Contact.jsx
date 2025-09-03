import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Rock Dezign</title>
        <meta
          name="description"
          content="Get in touch with Rock Dezign to start your dream project today."
        />
        <meta
          name="keywords"
          content="contact, get in touch, Rock Dezign, architecture firm, anime design"
        />
        <meta name="author" content="Rock Dezign" />
        <meta property="og:title" content="Contact Us | Rock Dezign" />
        <meta
          property="og:description"
          content="Reach out to Rock Dezign to bring your anime-inspired design ideas to life."
        />
      </Helmet>

      {/* Hero Section - Text Only */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] pt-8 md:pt-28 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-start font-barlow bg-[#f5f5f5] ">
        <h1 className="text-4xl md:text-5xl font-barlow text-[#003152] mb-4 animate-fadeIn">
          Let’s Get In Touch ✨
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6 animate-fadeIn delay-200">
          Have a project in mind? Or just want to say hello? Reach out using the
          details below — we’d love to hear from you!
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-800 animate-fadeIn delay-400">
            <FiMail className="text-xl text-[#003152]" />
            <span>hello@rockdezign.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800 animate-fadeIn delay-600">
            <FiPhone className="text-xl text-[#003152]" />
            <span>(+234) 906 - 000 - 0000</span>
          </div>
          <div className="flex items-center gap-3 text-gray-800 animate-fadeIn delay-800">
            <FiMapPin className="text-xl text-[#003152]" />
            <span>221b Architecture Street, Lagos</span>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="bg-white py-16 px-4 sm:px-6 md:px-12">
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
              <p className="text-gray-500 text-sm">Our team responds quickly.</p>
              <p className="text-[#310A51] text-sm mt-1">hello@rockdezign.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#003152]/10 p-3 rounded-full">
              <FiMapPin className="w-6 h-6 text-[#003152]" />
            </div>
            <div>
              <h3 className="font-semibold">Visit Our Office</h3>
              <p className="text-gray-500 text-sm">Come meet us at our HQ.</p>
              <p className="text-[#310A51] text-sm mt-1">
                221b Architecture Street, Lagos
              </p>
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
