import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate real API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1800);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactLinks = [
    {
      name: 'Email Address',
      value: 'fulltomastigamingworld@gmail.com', // Match the metadata email or general
      href: 'mailto:fulltomastigamingworld@gmail.com',
      icon: Mail,
      accent: 'hover:text-orange-600'
    },
    {
      name: 'LinkedIn Profile',
      value: 'linkedin.com/in/nihar-chem-ai',
      href: 'https://linkedin.com',
      icon: Linkedin,
      accent: 'hover:text-blue-600'
    },
    {
      name: 'GitHub Repository',
      value: 'github.com/nihar-ce-ai',
      href: 'https://github.com',
      icon: Github,
      accent: 'hover:text-neutral-800'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
            <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">06 / Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
            Let's Engineer <span className="text-brand-gray/60 font-light">Something Great</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Coordinates */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-brand-black leading-snug">
              Have an automation challenge, process design task, or simply want to chat? Shoot me a message.
            </h3>

            <p className="text-brand-gray font-light leading-relaxed text-sm md:text-base">
              I am actively seeking internship opportunities starting Fall 2026 / Summer 2027 where I can deploy predictive algorithms to physical chemical engineering loops. Let's start a conversation.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {contactLinks.map((link, idx) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-black/[0.03] hover:border-black/10 hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 group cursor-pointer ${link.accent}`}
                  >
                    <div className="p-3 bg-brand-bg rounded-xl text-brand-black group-hover:scale-105 transition-transform duration-300">
                      <IconComp size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-gray">
                        {link.name}
                      </span>
                      <span className="text-sm font-semibold text-brand-black mt-0.5 break-all">
                        {link.value}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-brand-gray opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                );
              })}
            </div>

            {/* General Location tag */}
            <div className="flex items-center gap-2 mt-2 px-4 py-2 bg-black/[0.02] border border-black/[0.04] rounded-xl self-start">
              <MapPin size={13} className="text-brand-gray" />
              <span className="text-[11px] font-mono tracking-wider text-brand-gray">
                State College, Pennsylvania, USA
              </span>
            </div>

          </motion.div>

          {/* Right Column: Premium Minimalist Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="lg:col-span-7 bg-white/70 border border-black/[0.04] p-8 md:p-10 rounded-[32px] shadow-sm relative overflow-hidden"
          >
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-black">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#F8F8F6]/80 hover:bg-white focus:bg-white border border-black/[0.05] focus:border-black/30 rounded-xl text-sm font-medium transition-all duration-300 outline-none placeholder:text-brand-gray/40 text-brand-black"
                  />
                </div>

                {/* Email Address field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#F8F8F6]/80 hover:bg-white focus:bg-white border border-black/[0.05] focus:border-black/30 rounded-xl text-sm font-medium transition-all duration-300 outline-none placeholder:text-brand-gray/40 text-brand-black"
                  />
                </div>

              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Internship / Process automation discussion"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#F8F8F6]/80 hover:bg-white focus:bg-white border border-black/[0.05] focus:border-black/30 rounded-xl text-sm font-medium transition-all duration-300 outline-none placeholder:text-brand-gray/40 text-brand-black"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-black">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hey Nihar, I saw your GNN catalyst work..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#F8F8F6]/80 hover:bg-white focus:bg-white border border-black/[0.05] focus:border-black/30 rounded-xl text-sm font-medium transition-all duration-300 outline-none resize-none placeholder:text-brand-gray/40 text-brand-black"
                />
              </div>

              {/* Submit button */}
              <div className="flex flex-col gap-4 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group relative flex items-center justify-center gap-2.5 px-6 py-4 bg-brand-black text-white hover:bg-brand-black/90 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting stream...</span>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-emerald-300"
                      >
                        <CheckCircle size={16} />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Secure Message</span>
                        <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Inline confirmation text */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-emerald-600 font-medium text-center"
                    >
                      Thanks! Your message has been received. Nihar will respond shortly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
