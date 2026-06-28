import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, ChevronRight, FileDown } from 'lucide-react';
import ssniharImg from '../assets/images/ssnihar.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax values utilizing Framer Motion Springs for buttery smoothness
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 200, mass: 0.5 };
  const moveX = useSpring(x, springConfig);
  const moveY = useSpring(y, springConfig);

  // Define transforms for depth stacking
  const transformImage = useTransform(moveX, (val) => `translate3d(${val * 25}px, ${val * 15}px, 0) rotateY(${val * 8}deg) rotateX(${-val * 5}deg)`);
  const transformGlow = useTransform(moveX, (val) => `translate3d(${val * -15}px, ${val * -20}px, 0) scale(1.05)`);
  const transformCardBack = useTransform(moveX, (val) => `translate3d(${val * -8}px, ${val * -12}px, 0)`);
  const transformFloatText = useTransform(moveX, (val) => `translate3d(${val * 35}px, ${val * 35}px, 0)`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized vector from -1 to 1
      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      x.set(normX);
      y.set(normY);
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [x, y]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger variants for content entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000003_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      {/* Interactive mouse cursor glow inside the section */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15,15,15,0.022), transparent 75%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Copy & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 select-none"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F5E9] border border-emerald-200/50 rounded-full shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2E7D32]"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#2E7D32] uppercase">
              Available for Internships
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 w-full">
            <span className="text-brand-gray text-base md:text-lg font-medium tracking-tight mb-1">
              Hey there, I'm
            </span>
            
            <h1 
              className="font-heading font-bold text-brand-black tracking-tighter leading-[0.9] flex flex-col"
              style={{
                fontSize: 'clamp(2.8rem, 8vw + 1rem, 6.5rem)'
              }}
            >
              <span>NIHAR</span>
              <span className="text-brand-gray/30 font-light flex items-center">
                Chemical Eng<span className="inline-block w-4 md:w-8 h-[1px] md:h-[2px] bg-brand-gray/30 mx-2 md:mx-4" />
              </span>
              <span className="relative">
                AI Builder
                <span className="absolute -bottom-1 left-0 w-12 md:w-24 h-1 md:h-1.5 bg-brand-black/90 rounded-full" />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-brand-gray font-light max-w-xl leading-relaxed mt-2"
          >
            I build intelligent software, engineer elegant digital experiences, and continuously learn to solve real-world engineering problems with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap items-center gap-4 mt-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative flex items-center gap-2 px-7 py-4 bg-brand-black text-[#F8F8F6] rounded-2xl font-medium shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-black/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('timeline')}
              className="group relative flex items-center gap-2 px-7 py-4 bg-white border border-black/10 hover:border-black/35 rounded-2xl font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
            >
              <FileDown size={16} className="text-brand-gray group-hover:text-brand-black transition-colors" />
              <span>Download Resume</span>
              <span className="text-[10px] bg-black/5 px-2 py-0.5 rounded-full font-mono text-brand-gray group-hover:text-brand-black transition-colors">
                PDF
              </span>
            </button>
          </motion.div>

          {/* Mini-Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mt-6 pt-6 border-t border-black/[0.04] w-full"
          >
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-brand-black">PSU</span>
              <span className="text-[10px] font-mono text-brand-gray uppercase tracking-wider mt-1">Chemical Eng.</span>
            </div>
            <div className="h-6 w-[1px] bg-black/10" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-brand-black">AI+Chem</span>
              <span className="text-[10px] font-mono text-brand-gray uppercase tracking-wider mt-1">Specialization</span>
            </div>
            <div className="h-6 w-[1px] bg-black/10" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-brand-black">2026</span>
              <span className="text-[10px] font-mono text-brand-gray uppercase tracking-wider mt-1">Current Year</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[420px] md:min-h-[500px]">
          
          {/* Ambient Circular Glow Behind Image */}
          <motion.div
            style={{ transform: transformGlow }}
            className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-brand-gray/5 blur-[50px] md:blur-[80px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Abstract background blobs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[150px] h-[150px] rounded-full bg-orange-200/5 blur-[40px]"
            style={{ transform: transformCardBack }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[120px] h-[120px] rounded-full bg-blue-200/5 blur-[35px]"
            style={{ transform: transformGlow }}
          />

          {/* Floating Subtle Particle Circles */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute top-12 right-12 w-3 h-3 rounded-full border border-black/10"
            />
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 left-16 w-4 h-4 rounded-full border border-black/10 border-dashed"
            />
          </div>

          {/* Stacked Container / Editorial Portrait Frame */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[3/4] rounded-t-[120px] rounded-b-3xl overflow-hidden bg-neutral-200 border-8 border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
              style={{
                perspective: 1200,
              }}
            >
              {/* The Image itself with high-end parallax movement */}
              <motion.div
                style={{
                  transform: transformImage,
                  transformStyle: 'preserve-3d',
                }}
                className="w-full h-full relative"
              >
                <img
                  src={ssniharImg}
                  alt="Nihar"
                  className="w-full h-full object-cover scale-[1.03] hover:scale-[1.05] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Premium overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-80" />
              </motion.div>
            </motion.div>

            {/* Editorial Glass Card Floating Highlight */}
            <motion.div
              style={{ transform: transformFloatText }}
              className="absolute -bottom-6 -left-10 p-6 rounded-3xl bg-white/75 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[240px] hidden sm:block z-20"
              initial={{ x: -20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-[10px] uppercase tracking-widest font-mono text-brand-gray font-bold mb-2">Project Highlight</p>
              <p className="text-xs font-heading font-bold text-brand-black leading-snug">AI-Optimized Reactor Control</p>
              <div className="flex gap-1.5 mt-3">
                <div className="h-1.5 w-12 bg-brand-black rounded-full"></div>
                <div className="h-1.5 w-6 bg-brand-black/15 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
