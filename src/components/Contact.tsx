
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-2 mb-12 text-center">
            <p className="text-sm uppercase tracking-wider text-theme-blue font-medium">Get In Touch</p>
            <h2 className="heading-lg">Contact Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the form or directly via email.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-theme-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:zachary@example.com" className="text-gray-600 hover:text-theme-blue transition-colors">
                      zachary@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-theme-blue mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Remote, Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-theme-blue hover:bg-theme-darkBlue text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
