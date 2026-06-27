import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'timeline' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#F8F8F6]/80 backdrop-blur-md border-b border-black/5 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-heading font-bold text-xl tracking-tight text-brand-black flex items-center gap-1 cursor-pointer group"
          >
            <span>NIHAR</span>
            <span className="text-brand-gray group-hover:rotate-45 transition-transform duration-300">*</span>
          </button>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 px-6 py-2 bg-black/5 rounded-full border border-black/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium relative py-1 cursor-pointer transition-colors duration-200 ${
                  activeSection === link.id ? 'text-brand-black' : 'text-brand-gray hover:text-brand-black'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-black rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('timeline');
              }}
              className="text-xs uppercase font-semibold tracking-wider text-brand-gray hover:text-brand-black px-4 py-2.5 rounded-full border border-black/10 hover:border-black/35 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <FileText size={14} />
              Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs uppercase font-semibold tracking-wider text-[#F8F8F6] bg-brand-black hover:bg-brand-black/90 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              Contact
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-black p-1 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[72px] bg-[#F8F8F6] z-40 border-b border-black/10 shadow-xl md:hidden px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-heading font-medium text-left py-1 cursor-pointer border-b border-black/5 ${
                    activeSection === link.id ? 'text-brand-black border-brand-black' : 'text-brand-gray'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('timeline');
                }}
                className="w-full text-center uppercase text-xs font-semibold tracking-wider text-brand-gray py-3 rounded-full border border-black/10 flex items-center justify-center gap-2"
              >
                <FileText size={14} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center uppercase text-xs font-semibold tracking-wider text-[#F8F8F6] bg-brand-black py-3 rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                Get In Touch
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
