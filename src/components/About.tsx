
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 rounded-xl border-portfolio-teal"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 rounded-xl border-portfolio-coral"></div>
              <div className="relative z-10 rounded-xl overflow-hidden">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-portfolio-blue via-portfolio-teal to-portfolio-coral rounded-xl p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-40 h-40 text-portfolio-teal dark:text-portfolio-lightTeal" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-heading animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-gray-800 dark:text-gray-100">
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              I am a 3rd-year BE IT student at Fr. Conceicao Rodrigues Institute of Technology, driven by a passion for data science and analytics.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              I thrive on uncovering actionable insights from complex datasets and pride myself on being a quick learner and a team player ready to tackle new challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-portfolio-blue/10 dark:bg-portfolio-blue/20 text-portfolio-blue dark:text-portfolio-lightTeal mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-center mb-1 text-gray-800 dark:text-gray-100">Quick Learner</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">Always eager to acquire new skills and knowledge</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-portfolio-coral/10 dark:bg-portfolio-coral/20 text-portfolio-coral mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center mb-1 text-gray-800 dark:text-gray-100">Team Player</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">Collaborative and effective in group environments</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-portfolio-teal/10 dark:bg-portfolio-teal/20 text-portfolio-teal dark:text-portfolio-lightTeal mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center mb-1 text-gray-800 dark:text-gray-100">Problem Solver</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">Adept at finding creative solutions to complex challenges</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-portfolio-blue/10 dark:bg-portfolio-blue/20 text-portfolio-blue dark:text-portfolio-lightTeal mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center mb-1 text-gray-800 dark:text-gray-100">Data Driven</h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">Making decisions based on data analysis and insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
