import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, MapPin, Phone, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/hassan',
      color: 'hover:text-gray-400',
      handle: 'hassan'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/hassan',
      color: 'hover:text-blue-400',
      handle: '/in/hassan'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/hassan',
      color: 'hover:text-sky-400',
      handle: '@hassan'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'email',
      value: 'hassan@example.com',
      href: 'mailto:hassan@example.com',
      type: 'string'
    },
    {
      icon: Phone,
      label: 'phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      type: 'string'
    },
    {
      icon: MapPin,
      label: 'location',
      value: 'San Francisco, CA',
      href: null,
      type: 'string'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-github-text mb-4 font-mono"
          >
            <span className="text-github-warning">async function</span>
            <span className="text-github-text"> letsConnect() </span>
            <span className="text-github-text">{'{'}</span>
            <br />
            <span className="text-github-muted ml-4">// Ready to collaborate?</span>
            <br />
            <span className="text-github-text">{'}'}</span>
          </motion.h2>
          <div className="bg-github-surface border border-github-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <Terminal className="w-4 h-4 text-github-accent" />
              <span className="text-github-muted">Contact API initialized</span>
            </div>
            <p className="text-github-text">
              <span className="text-github-success">$</span>
              <span className="ml-2">npm run build-amazing-projects</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-github-surface border border-github-border rounded-lg overflow-hidden"
          >
            <div className="bg-github-bg border-b border-github-border px-6 py-3">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-github-accent" />
                <span className="font-mono text-sm text-github-text">ContactForm.jsx</span>
              </div>
            </div>

            <div className="p-6">
              <div className="font-mono text-sm mb-6">
                <div className="text-github-muted">// Send a message</div>
                <div className="text-github-text">
                  <span className="text-github-warning">const</span> message = await sendMessage(formData);
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-github-text mb-2 font-mono">
                      name: <span className="text-github-warning">string</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-github-bg border border-github-border rounded-lg focus:ring-2 focus:ring-github-accent focus:border-transparent text-github-text placeholder-github-muted font-mono"
                      placeholder='"Your name"'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-github-text mb-2 font-mono">
                      email: <span className="text-github-warning">string</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-github-bg border border-github-border rounded-lg focus:ring-2 focus:ring-github-accent focus:border-transparent text-github-text placeholder-github-muted font-mono"
                      placeholder='"your.email@example.com"'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-github-text mb-2 font-mono">
                    subject: <span className="text-github-warning">string</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-github-bg border border-github-border rounded-lg focus:ring-2 focus:ring-github-accent focus:border-transparent text-github-text placeholder-github-muted font-mono"
                    placeholder='"Let&apos;s discuss a project"'
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-github-text mb-2 font-mono">
                    message: <span className="text-github-warning">string</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-github-bg border border-github-border rounded-lg focus:ring-2 focus:ring-github-accent focus:border-transparent text-github-text placeholder-github-muted resize-none font-mono"
                    placeholder='"Tell me about your project or idea..."'
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all font-mono ${
                    isSubmitting
                      ? 'bg-github-muted cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-github-success text-white'
                      : 'bg-github-accent text-white hover:bg-github-accent/90'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>await sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>✓ message.sent()</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>sendMessage()</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-github-surface border border-github-border rounded-lg overflow-hidden">
              <div className="bg-github-bg border-b border-github-border px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-github-accent" />
                  <span className="font-mono text-sm text-github-text">contact.json</span>
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-sm mb-4">
                  <div className="text-github-text">{'{'}</div>
                  <div className="ml-4 space-y-2">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-center space-x-4 p-3 bg-github-bg rounded-lg hover:bg-github-border/20 transition-colors">
                          <Icon className="w-4 h-4 text-github-accent flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-github-text">
                              <span className="text-github-warning">"{info.label}"</span>: 
                              <span className="text-github-success"> "{info.value}"</span>
                              {index < contactInfo.length - 1 && <span className="text-github-text">,</span>}
                            </div>
                          </div>
                        </div>
                      );

                      return info.href ? (
                        <a key={info.label} href={info.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div key={info.label}>{content}</div>
                      );
                    })}
                  </div>
                  <div className="text-github-text">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-github-surface border border-github-border rounded-lg overflow-hidden">
              <div className="bg-github-bg border-b border-github-border px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-github-accent" />
                  <span className="font-mono text-sm text-github-text">social.links</span>
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-sm mb-4">
                  <div className="text-github-muted">// Connect online</div>
                  <div className="text-github-text">
                    <span className="text-github-warning">const</span> socialLinks = [
                  </div>
                </div>
                
                <div className="space-y-3 ml-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-4 p-3 bg-github-bg rounded-lg transition-all hover:bg-github-border/20 ${social.color} font-mono text-sm`}
                      >
                        <Icon className="w-5 h-5" />
                        <div className="flex-1">
                          <div className="text-github-text">
                            {'{ '}
                            <span className="text-github-warning">platform</span>: 
                            <span className="text-github-success"> "{social.name}"</span>, 
                            <span className="text-github-warning"> handle</span>: 
                            <span className="text-github-success"> "{social.handle}"</span>
                            {' }'}
                            {index < socialLinks.length - 1 && <span className="text-github-text">,</span>}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                
                <div className="font-mono text-sm mt-4">
                  <div className="text-github-text">];</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-github-surface border border-github-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-github-text font-mono">
                <span className="text-github-muted">// </span>Response Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                <div className="text-center p-4 bg-github-bg rounded-lg">
                  <div className="text-2xl font-bold text-github-accent mb-1">24h</div>
                  <div className="text-github-muted">response_time</div>
                </div>
                <div className="text-center p-4 bg-github-bg rounded-lg">
                  <div className="text-2xl font-bold text-github-success mb-1">100%</div>
                  <div className="text-github-muted">success_rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;