
import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-theme-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <button 
              onClick={scrollToTop}
              className="bg-theme-blue rounded-full p-2 hover:bg-blue-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div className="flex gap-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-theme-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-theme-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="text-center text-gray-400">
            <p className="mb-2">Zachary Odero &copy; {new Date().getFullYear()}</p>
            <p className="text-sm">Web Developer | Code with Purpose</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
