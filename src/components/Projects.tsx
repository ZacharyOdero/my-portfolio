
import React from 'react';
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
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center">
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
      className="bg-white overflow-hidden card-hover animate-fade-in opacity-0"
      style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
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
