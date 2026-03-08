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
        // 1. Check if the user has already seen the loader in this session
        const hasSeenLoader = sessionStorage.getItem('rockDezign_hasSeenLoader');

        if (hasSeenLoader) {
            // If they have seen it, skip the loading state immediately
            setLoading(false);
        } else {
            // If it's their first time this session, play the loader
            const timer = setTimeout(() => {
                setLoading(false);
                // 2. Set the flag so they don't see it again during this visit
                sessionStorage.setItem('rockDezign_hasSeenLoader', 'true');
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, []);

    // ✅ Show loader only on the first visit of the session
    if (loading) return <Loader />; 

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
            
            <div className="font-barlow animate-in fade-in duration-700">
                <Carousel />
                <AboutPreview />
                
                {/* 3. SECTION WITH PARALLAX-STYLE BACKGROUND */}
                <div
                    className="bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${homeImage})` }}
                >
                    <div className="bg-white/90 backdrop-blur-md py-20 px-4 md:px-10">
                        <Servicepreview />
                    </div>
                </div>
                
                <Testimonials />
            </div>
        </>
    );
};

export default Home;