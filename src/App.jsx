import React from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Navbar from './components/navbar/nanbar'; // Keep your specific casing
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const location = useLocation();

 
  const isProjectDetail = !!matchPath("/projects/:id", location.pathname);

  return (
    <>
      {/* Navbar only shows if isProjectDetail is false */}
      {!isProjectDetail && <Navbar />}
      
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer only shows if isProjectDetail is false */}
      {!isProjectDetail && <Footer />}
    </>
  );
}


export default App;