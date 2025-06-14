import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from '../components/carousel/Carousel';
import AboutPreview from '../components/about/Aboutpreview';
import Servicepreview from '../components/services/Servicepreview';
import Testimonials from '../components/testimonial/Testimonial';
import Loader from '../components/Loader';
import homeImage from '../../src/assets/images/home-img.webp';
import { Helmet } from 'react-helmet';


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate delay
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />; // ✅ Show loader while loading

    return (
        <>
            <Helmet>
                <title>Home | Rock Dezign</title>
                <meta name="description" content="Welcome to Rock Dezign — where anime meets architecture." />
                <meta name="keywords" content="home, anime, architecture, design, Rock Dezign" />
                <meta name="author" content="Rock Dezign" />
                <meta property="og:title" content="Home | Rock Dezign" />
                <meta property="og:description" content="Creating anime-inspired spaces you’ll love." />
            </Helmet>
            <div className="font-barlow">
                <Carousel />
                <AboutPreview />
                <div
                    className="bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${homeImage})` }}
                >
                    <div className="bg-white/80 backdrop-blur-sm py-4 px-4 md:px-10">
                        <Servicepreview />
                    </div>
                </div>
                <Testimonials />
            </div>
        </>
    );
};

export default Home;
