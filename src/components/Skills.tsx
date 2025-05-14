
import React from 'react';
import { Html, Css, Javascript, Github, Linkedin } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number; // 1-5
  color?: string;
}

const skillData: Skill[] = [
  { name: "HTML", icon: Html, level: 4, color: "#E34F26" },
  { name: "CSS", icon: Css, level: 4, color: "#1572B6" },
  { name: "JavaScript", icon: Javascript, level: 3, color: "#F7DF1E" },
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
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center">
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
      className="flex flex-col items-center p-6 text-center animate-fade-in opacity-0"
      style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
    >
      <div 
        className="w-16 h-16 mb-4 flex items-center justify-center rounded-full" 
        style={{ color: skill.color || 'currentColor' }}
      >
        <Icon />
      </div>
      <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${
              i < skill.level ? "bg-theme-blue" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
