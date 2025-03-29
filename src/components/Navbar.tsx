
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-portfolio-purple">
            Eby
            <span className="text-portfolio-blue">.</span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-portfolio-purple hover:bg-portfolio-indigo text-white rounded-lg btn-hover-effect">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-portfolio-purple font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-portfolio-purple hover:bg-portfolio-indigo text-white rounded-lg btn-hover-effect w-full">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get In Touch</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
