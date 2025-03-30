
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-teal to-portfolio-coral opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-3xl font-bold">
              eby<span className="text-portfolio-coral">.</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Data Science Enthusiast & Software Engineer transforming complex data into actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-portfolio-teal"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                Connect
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-portfolio-teal"></span>
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/eby0303" 
                  className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-portfolio-teal hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/eby0303/" 
                  className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-portfolio-teal hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:eby0303@gmail.com" 
                  className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-portfolio-teal hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="mt-4 text-gray-400">
                Feel free to reach out!<br />
                <a href="mailto:eby@example.com" className="hover:text-portfolio-teal transition-colors">
                  eby0303@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500">
          <p>© {new Date().getFullYear()} eby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
