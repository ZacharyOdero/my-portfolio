
import React, { useEffect, useRef } from 'react';
import { Code, Github } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number; // 1-5
  color?: string;
}

const skillData: Skill[] = [
  { name: "HTML", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ), level: 4, color: "#E34F26" },
  { name: "CSS", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
    </svg>
  ), level: 4, color: "#1572B6" },
  { name: "JavaScript", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ), level: 3, color: "#F7DF1E" },
  { name: "React", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
    </svg>
  ), level: 2, color: "#61DAFB" },
  { name: "Git", icon: Github, level: 3 },
  { name: "Responsive Design", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
      <path d="M22 17h-4v-7h4m1-2h-6a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1M4 6h18V4H4a2 2 0 00-2 2v11H0v3h14v-3H4V6z" />
    </svg>
  ), level: 3 }
];

const Skills = () => {
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
    
    const skillElements = document.querySelectorAll('.skill-item');
    skillElements.forEach((el) => observer.observe(el));
    
    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-theme-blue/5 to-theme-blue/0 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm uppercase tracking-wider text-theme-blue font-medium">My Toolkit</p>
            <h2 className="heading-lg">Skills & Technologies</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skillData.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const Icon = skill.icon;
  
  return (
    <div 
      className="flex flex-col items-center p-6 text-center skill-item opacity-0 translate-y-10 transition-all duration-700 ease-out hover:scale-105"
      style={{ transitionDelay: `${0.1 * index}s` }}
    >
      <div 
        className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 shadow-sm"
        style={{ color: skill.color || 'currentColor' }}
      >
        <Icon />
      </div>
      <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i < skill.level ? "bg-theme-blue scale-100" : "bg-gray-200 scale-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
