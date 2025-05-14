
import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#050a14] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid z-0">
        {/* Animated blur circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        {/* Loading bars at the top */}
        <div className="absolute top-0 left-0 w-full h-1 loading-bars"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center">
            <div className="flex items-center justify-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
              <p className="text-sm uppercase tracking-wider text-blue-400 font-medium">Get In Touch</p>
              <span className="h-1 w-12 bg-blue-500 rounded-full"></span>
            </div>
            <h2 className="heading-lg text-gradient opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>Contact Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-blue-100">Let's Talk</h3>
              <p className="text-blue-300 mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the form or directly via email.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                  <div className="p-3 bg-blue-900/50 rounded-full text-blue-300">
                    <Mail className="text-blue-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200">Email</h4>
                    <a href="mailto:zachary@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      zachary@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                  <div className="p-3 bg-blue-900/50 rounded-full text-blue-300">
                    <MapPin className="text-blue-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200">Location</h4>
                    <p className="text-blue-400">Remote, Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-blue-900/20 p-6 rounded-lg shadow-lg border border-blue-800/50 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-200">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-blue-900/40 border-blue-700/50 text-blue-100 placeholder:text-blue-400/60 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-200">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-blue-900/40 border-blue-700/50 text-blue-100 placeholder:text-blue-400/60 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-200">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full min-h-[120px] bg-blue-900/40 border-blue-700/50 text-blue-100 placeholder:text-blue-400/60 focus:border-blue-500"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:scale-110 transition-transform duration-300"></span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
