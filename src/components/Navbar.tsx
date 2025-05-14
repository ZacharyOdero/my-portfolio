
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#080e1a]/95 shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-blue-300">
          Zachary<span className="text-blue-500">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-blue-200 hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="text-blue-200 hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="text-blue-200 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="text-blue-200 hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-blue-300 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-[#080e1a] z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <a href="#about" className="text-xl text-blue-300" onClick={closeMenu}>About</a>
        <a href="#projects" className="text-xl text-blue-300" onClick={closeMenu}>Projects</a>
        <a href="#skills" className="text-xl text-blue-300" onClick={closeMenu}>Skills</a>
        <a href="#contact" className="text-xl text-blue-300" onClick={closeMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
