
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
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider text-theme-blue font-medium">My Work</p>
            <h2 className="heading-lg">Featured Projects</h2>
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
      className="bg-white overflow-hidden project-card opacity-0 translate-y-10 transition-all duration-700 ease-out border border-gray-100 hover:border-theme-blue/20"
      style={{ transitionDelay: `${0.2 * index}s` }}
    >
      <div className="h-48 overflow-hidden relative group">
        <div className="absolute inset-0 bg-theme-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-theme-blue hover:scale-110 transition-transform"
              >
                <Github size={18} />
              </a>
            )}
            
            {project.live && (
              <a 
                href={project.live}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-theme-blue hover:scale-110 transition-transform"
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
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
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
