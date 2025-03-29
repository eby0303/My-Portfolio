
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobsRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      
      Array.from(blobsRef.current.children).forEach((blob, index) => {
        const el = blob as HTMLElement;
        // Different movement factor for each blob
        const factor = 1 + index * 0.2;
        el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Animated background blobs */}
      <div ref={blobsRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-blob w-64 h-64 absolute top-1/4 left-1/4 opacity-40"></div>
        <div className="animated-blob w-80 h-80 absolute top-1/2 right-1/4 opacity-30 animation-delay-2000"></div>
        <div className="animated-blob w-72 h-72 absolute bottom-1/4 left-1/3 opacity-30 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down dark:text-white">
            Hi, I'm <span className="hero-gradient-text">eby</span> – 
            <br className="md:hidden" /> Data Science Enthusiast & <br className="hidden md:block" />
            Software Engineer
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700 dark:text-gray-300 animate-fade-in-up animation-delay-300">
            Transforming complex data into actionable insights with creativity and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button 
              className="bg-portfolio-teal hover:bg-portfolio-blue dark:bg-portfolio-blue dark:hover:bg-portfolio-teal text-white px-8 py-6 rounded-lg btn-hover-effect text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            
            <Button 
              variant="outline"
              className="border-portfolio-teal text-portfolio-teal dark:border-portfolio-lightTeal dark:text-portfolio-lightTeal hover:bg-portfolio-teal/10 dark:hover:bg-portfolio-lightTeal/10 px-8 py-6 rounded-lg btn-hover-effect text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 border-2 border-portfolio-teal dark:border-portfolio-lightTeal text-portfolio-teal dark:text-portfolio-lightTeal"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
