
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projectData: Project[] = [
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce platform with product filtering and cart functionality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing work and skills.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A task manager application with drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
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
    
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));
    
    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#080e1a]" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid z-0">
        <div className="blur-circle blur-circle-1" style={{ left: '60%', top: '20%' }}></div>
        <div className="blur-circle blur-circle-2" style={{ left: '10%', top: '70%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center gap-2">
              <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
              <p className="text-sm uppercase tracking-wider text-blue-400 font-medium">My Work</p>
              <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
            </div>
            <h2 className="heading-lg text-gradient glow">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <Card 
      className="bg-gradient-to-br from-blue-900/50 to-slate-900/80 overflow-hidden project-card opacity-0 translate-y-10 transition-all duration-700 ease-out border border-blue-500/20 hover:border-blue-400/50 shine"
      style={{ transitionDelay: `${0.2 * index}s` }}
    >
      <div className="h-48 overflow-hidden relative group">
        <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-200 hover:scale-110 transition-transform border border-blue-400/30"
              >
                <Github size={18} />
              </a>
            )}
            
            {project.live && (
              <a 
                href={project.live}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-blue-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-200 hover:scale-110 transition-transform border border-blue-400/30"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>
      
      <CardContent className="p-6 bg-gradient-to-b from-transparent to-blue-950/50">
        <h3 className="text-xl font-semibold mb-2 text-blue-100">{project.title}</h3>
        <p className="text-blue-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-blue-900/50 text-blue-200 rounded-full border border-blue-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon flex items-center gap-1 text-sm"
          >
            <Github size={16} /> Code
          </a>
        )}
        
        {project.live && (
          <a 
            href={project.live}
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon flex items-center gap-1 text-sm"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
