
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update title when component mounts
    document.title = "Zachary Odero | Web Developer";
    
    // Reset scroll position
    window.scrollTo(0, 0);
    
    // Setup animation observers for scroll-triggered animations
    const setupObservers = () => {
      const animatedElements = document.querySelectorAll('.project-card, .skill-item');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      animatedElements.forEach((el) => observer.observe(el));
      
      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    };
    
    // Setup observers after a short delay to ensure DOM is ready
    const timer = setTimeout(setupObservers, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-[#050a14] text-blue-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      {/* Cursor trailer effect */}
      <div id="cursor-trailer" className="fixed w-10 h-10 rounded-full pointer-events-none z-50 opacity-0 bg-blue-500 mix-blend-screen blur-xl" />
    </div>
  );
};

export default Index;
