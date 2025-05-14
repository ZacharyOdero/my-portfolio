
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute right-0 bottom-0 w-1/3 aspect-square bg-gradient-to-tr from-theme-blue/5 to-theme-lightBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 top-0 w-1/4 aspect-square bg-theme-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider text-theme-blue font-medium">About Me</p>
            <h2 className="heading-lg">My Journey</h2>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              I'm a passionate web developer at the beginning of my journey in tech. With a keen eye for clean, 
              efficient code and intuitive design, I focus on creating websites and applications that are both 
              functional and visually appealing.
            </p>
            <p className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              My approach is centered on continuous learning and improvement. I believe that great development 
              comes from understanding both user needs and technical best practices. While I'm early in my 
              career, I'm committed to building quality projects that solve real problems.
            </p>
            <p className="opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              I'm currently expanding my skills in modern web technologies and looking for opportunities 
              to collaborate on meaningful projects that challenge me to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
