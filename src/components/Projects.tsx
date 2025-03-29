
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  bgColor: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with Python and Streamlit to visualize and analyze complex datasets with real-time filtering capabilities.",
      tags: ["Python", "Streamlit", "Pandas", "Data Visualization"],
      githubUrl: "https://github.com/username/data-viz-dashboard",
      demoUrl: "#",
      bgColor: "bg-gradient-to-br from-portfolio-blue to-portfolio-teal"
    },
    {
      title: "Machine Learning Model Deployment",
      description: "End-to-end ML pipeline for predicting housing prices with automated data preprocessing, model training and evaluation.",
      tags: ["ML", "Python", "Scikit-learn", "Docker"],
      githubUrl: "https://github.com/username/ml-model-deployment",
      bgColor: "bg-gradient-to-br from-portfolio-purple to-portfolio-indigo"
    },
    {
      title: "Sales Analytics Tool",
      description: "Excel-based tool to automate sales reporting with interactive Power BI dashboard for executives.",
      tags: ["Power BI", "Excel", "Data Analysis"],
      githubUrl: "https://github.com/username/sales-analytics-tool",
      demoUrl: "#",
      bgColor: "bg-gradient-to-br from-portfolio-pink to-portfolio-purple"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Unsupervised learning project to identify customer segments and provide targeted marketing insights.",
      tags: ["Clustering", "Python", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/username/customer-segmentation",
      bgColor: "bg-gradient-to-br from-portfolio-teal to-portfolio-blue"
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => observer.observe(card));
    
    return () => {
      projectCards?.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={projectsRef}>
        <h2 className="section-heading text-center mx-auto mb-4">My Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Check out some of my recent data science and software engineering projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card overflow-hidden border-none shadow-lg opacity-0 translate-y-10 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${project.bgColor} h-3`}></div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button 
                    size="sm"
                    className="flex items-center gap-1 bg-portfolio-purple hover:bg-portfolio-indigo"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="bg-portfolio-purple hover:bg-portfolio-indigo text-white px-6 py-2 rounded-lg btn-hover-effect"
            asChild
          >
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
