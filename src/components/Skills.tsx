
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  darkColor: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const technicalSkills: Skill[] = [
    { name: 'Python', percentage: 85, color: '#4D9DE0', darkColor: '#4D9DE0' },
    { name: 'Data Analysis', percentage: 80, color: '#20BDBE', darkColor: '#7FE0DF' },
    { name: 'Data Visualization', percentage: 75, color: '#FF6B6B', darkColor: '#FF6B6B' },
    { name: 'Power BI', percentage: 70, color: '#1A5F9C', darkColor: '#4D9DE0' },
    { name: 'Excel', percentage: 90, color: '#7FE0DF', darkColor: '#20BDBE' },
    { name: 'Machine Learning', percentage: 65, color: '#20BDBE', darkColor: '#7FE0DF' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-progress-fill');
          
          // Set the custom property for the width based on the data attribute
          const el = entry.target as HTMLElement;
          const percentage = el.dataset.percentage;
          if (percentage) {
            el.style.setProperty('--progress-width', `${percentage}%`);
          }
        }
      });
    }, { threshold: 0.1 });
    
    const progressBars = sectionRef.current?.querySelectorAll('.skill-progress-fill');
    progressBars?.forEach(bar => observer.observe(bar));
    
    return () => {
      progressBars?.forEach(bar => observer.unobserve(bar));
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12 text-gray-800 dark:text-gray-100">My Skills</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {technicalSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-item opacity-0 translate-y-10 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 100}ms` }}
                ref={(el) => {
                  if (el) {
                    setTimeout(() => {
                      el.classList.remove('opacity-0', 'translate-y-10');
                      el.classList.add('opacity-100', 'translate-y-0');
                    }, 100 + index * 100);
                  }
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold dark:text-white">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill dark:opacity-90" 
                    data-percentage={skill.percentage}
                    style={{ 
                      backgroundColor: `var(--theme-skill-color-${index})`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
            {['Data Cleaning', 'Statistical Analysis', 'SQL', 'R', 'Tableau', 'Pandas'].map((skill, index) => (
              <div 
                key={skill}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md opacity-0 translate-y-10 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 100}ms` }}
                ref={(el) => {
                  if (el) {
                    setTimeout(() => {
                      el.classList.remove('opacity-0', 'translate-y-10');
                      el.classList.add('opacity-100', 'translate-y-0');
                    }, 600 + index * 100);
                  }
                }}
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
