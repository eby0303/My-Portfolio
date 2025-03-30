import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send email using EmailJS
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await emailjs.send(
        "service_co6a8iz",  // Your EmailJS Service ID
        "template_cm1529f", // Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "UXtkPEfokvm_JnjJ6" // Your EmailJS Public Key
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto mb-12 text-gray-800 dark:text-gray-100">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-portfolio-teal dark:text-portfolio-lightTeal" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">Email</h4>
                  <a href="mailto:eby0303@gmail.com" className="text-portfolio-teal dark:text-portfolio-lightTeal hover:underline">
                    eby0303@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-portfolio-blue" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">LinkedIn</h4>
                  <a href="https://linkedin.com/in/eby0303/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                    linkedin.com/in/eby0303
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Github size={20} className="text-portfolio-darkBlue dark:text-portfolio-blue" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-100">GitHub</h4>
                  <a href="https://github.com/eby0303" target="_blank" rel="noopener noreferrer" className="text-portfolio-darkBlue dark:text-portfolio-blue hover:underline">
                    github.com/eby0303
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
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
                  value={formData.email} 
                  onChange={handleChange} 
                  required
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
                  value={formData.subject} 
                  onChange={handleChange} 
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-portfolio-teal hover:bg-portfolio-blue dark:bg-portfolio-blue dark:hover:bg-portfolio-teal text-white px-6 py-2 rounded-lg btn-hover-effect"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              {status && <p className="text-center mt-2 text-gray-700 dark:text-gray-300">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
