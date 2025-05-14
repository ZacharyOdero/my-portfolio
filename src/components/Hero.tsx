
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      {/* Animated floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="floating-shape bg-theme-blue/5 rounded-full w-96 h-96 absolute -top-20 -right-20"></div>
        <div className="floating-shape-delay bg-theme-blue/5 rounded-full w-64 h-64 absolute bottom-10 left-10"></div>
        <div className="floating-shape-slow bg-theme-lightBlue/5 rounded-full w-80 h-80 absolute top-1/2 -left-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 
            className="heading-xl animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="block font-light text-gray-600 mb-2">Hello, I'm</span>
            <span className="text-gradient">Zachary Odero</span>
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-theme-blue mt-4 mb-8 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Web Developer | Code with Purpose
          </h2>
          
          <div 
            className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <a href="#projects" className="btn-primary group">
              View My Work 
              <ArrowDownRight size={18} className="transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
          
          <div 
            className="absolute bottom-16 left-0 right-0 flex justify-center animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards] hidden md:flex"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <div className="animate-bounce">
              <ArrowDownRight 
                size={24} 
                className="text-theme-blue transform rotate-45" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
