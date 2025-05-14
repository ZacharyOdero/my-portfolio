
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center relative overflow-hidden bg-[#050a14]">
      {/* Simple grid background instead of blur circles */}
      <div className="absolute inset-0 cyber-grid z-0">
        {/* Star field background */}
        <div className="starfield absolute inset-0"></div>
      </div>
      
      {/* Loading bars at the top and bottom */}
      <div className="absolute top-0 left-0 w-full h-1 loading-bars"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 loading-bars"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full md:max-w-3xl mx-auto md:mx-0">
          <div 
            className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-700/30 mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-blue-400 text-sm">Welcome to my portfolio</span>
          </div>
          
          <h1 
            className="heading-xl animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="block font-light text-blue-300 mb-2">Hello, I'm</span>
            <span className="text-gradient">Zachary Odero</span>
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-blue-300 mt-4 mb-8 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            Web Developer | Code with Purpose
          </h2>
          
          <p 
            className="text-blue-200 max-w-xl mb-8 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            I'm a passionate web developer at the beginning of my journey in tech. With a keen eye for clean, 
            efficient code and intuitive design, I focus on creating websites and applications that are both 
            functional and visually appealing.
          </p>
          
          <div 
            className="animate-fade-up"
            style={{ animationDelay: '0.9s' }}
          >
            <a href="#projects" className="btn-primary group">
              View My Work 
              <ArrowDownRight size={18} className="transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </div>
          
          <div 
            className="absolute bottom-16 left-0 right-0 flex justify-center animate-fade-up hidden md:flex"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="animate-bounce">
              <ArrowDownRight 
                size={24} 
                className="text-blue-400 transform rotate-45" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
