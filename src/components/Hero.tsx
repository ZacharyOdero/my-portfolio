
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 
            className="heading-xl animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="block font-light text-gray-600 mb-2">Hello, I'm</span>
            Zachary Odero
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
            <a href="#projects" className="btn-primary">
              View My Work <ArrowDownRight size={18} />
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
