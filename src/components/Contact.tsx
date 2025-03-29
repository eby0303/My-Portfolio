
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12 text-gray-800 dark:text-gray-100">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-portfolio-teal/10 dark:bg-portfolio-teal/20 text-portfolio-teal dark:text-portfolio-lightTeal">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Email</h4>
                  <a href="mailto:eby@example.com" className="text-portfolio-teal dark:text-portfolio-lightTeal hover:underline">
                    eby@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-portfolio-blue/10 dark:bg-portfolio-blue/20 text-portfolio-blue">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">LinkedIn</h4>
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                    linkedin.com/in/eby
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-portfolio-darkBlue/10 dark:bg-portfolio-darkBlue/20 text-portfolio-darkBlue dark:text-portfolio-blue">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">GitHub</h4>
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-portfolio-darkBlue dark:text-portfolio-blue hover:underline">
                    github.com/eby
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-3">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-portfolio-teal hover:text-white dark:hover:bg-portfolio-lightTeal transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-portfolio-teal hover:text-white dark:hover:bg-portfolio-lightTeal transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-portfolio-teal hover:text-white dark:hover:bg-portfolio-lightTeal transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-portfolio-teal dark:focus:border-portfolio-lightTeal focus:ring-portfolio-teal/20 dark:focus:ring-portfolio-lightTeal/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-portfolio-teal dark:focus:border-portfolio-lightTeal focus:ring-portfolio-teal/20 dark:focus:ring-portfolio-lightTeal/20"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Project Collaboration" 
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-portfolio-teal dark:focus:border-portfolio-lightTeal focus:ring-portfolio-teal/20 dark:focus:ring-portfolio-lightTeal/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-portfolio-teal dark:focus:border-portfolio-lightTeal focus:ring-portfolio-teal/20 dark:focus:ring-portfolio-lightTeal/20"
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-portfolio-teal hover:bg-portfolio-blue dark:bg-portfolio-blue dark:hover:bg-portfolio-teal text-white px-6 py-2 rounded-lg btn-hover-effect"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
