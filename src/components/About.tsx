import { motion } from 'motion/react';
import { Beaker, Cpu, Sparkles, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const characteristics = [
    {
      title: 'Chemical Engineering Student',
      tagline: 'Thermodynamics & Design',
      desc: 'Deeply engaged in process engineering principles—mastering transport phenomena, mass balances, and phase equilibria to model physical reactions.',
      icon: Beaker,
      bg: 'bg-orange-50/40 border-orange-100/60',
      textColor: 'text-orange-800',
      iconBg: 'bg-orange-100/50'
    },
    {
      title: 'AI Enthusiast & Builder',
      tagline: 'Deep Learning & Automation',
      desc: 'Building neural systems and leveraging advanced LLMs to optimize chemical reaction prediction, speed up material discovery, and automate repetitive workflows.',
      icon: Cpu,
      bg: 'bg-blue-50/40 border-blue-100/60',
      textColor: 'text-blue-800',
      iconBg: 'bg-blue-100/50'
    },
    {
      title: 'Adaptive Problem Solver',
      tagline: 'Math & Computation',
      desc: 'Approaching real-world bottlenecks with mathematical modeling, algorithmic systems, and functional programming to craft efficient, clean solutions.',
      icon: Sparkles,
      bg: 'bg-purple-50/40 border-purple-100/60',
      textColor: 'text-purple-800',
      iconBg: 'bg-purple-100/50'
    },
    {
      title: 'Future PSU Engineer',
      tagline: 'Penn State Pride',
      desc: 'Developing deep domain expertise at Pennsylvania State University, aiming to pioneer sustainable, automated biochemical processes in the industry.',
      icon: GraduationCap,
      bg: 'bg-emerald-50/40 border-emerald-100/60',
      textColor: 'text-emerald-800',
      iconBg: 'bg-emerald-100/50'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-white/45">
      <div className="absolute inset-0 bg-[radial-gradient(#00000001_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
            <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">01 / Profile</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
            At the Intersection of <span className="text-brand-gray/60 font-light">Physics & Logic</span>
          </h2>
        </motion.div>

        {/* Narrative & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Short Story Narrative */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-brand-black tracking-tight leading-snug">
              I believe chemical kinetics and machine learning algorithms are twin instruments for engineering the future.
            </h3>
            
            <p className="text-brand-gray font-light leading-relaxed">
              My journey began in pure chemical engineering—analyzing equations of state, modeling thermodynamic phases, and sketching process flow diagrams. However, I realized that modern chemical simulation demands faster, more predictive tools.
            </p>

            <p className="text-brand-gray font-light leading-relaxed">
              This drove me to master artificial intelligence. By feeding molecular descriptors to Graph Neural Networks and building adaptive controllers, I bridge the physical constraints of material design with the fluid logic of deep learning.
            </p>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 bg-brand-black rounded-full" />
                <span className="font-medium text-brand-black">Primary Focus:</span>
                <span className="text-brand-gray font-light">Deep Chemistry Surrogate Modeling</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 bg-brand-black rounded-full" />
                <span className="font-medium text-brand-black">Secondary Focus:</span>
                <span className="text-brand-gray font-light">Process Control Loop Reinforcement Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Bento-style Characteristic Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {characteristics.map((char, index) => {
              const IconComp = char.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`p-8 rounded-[24px] border ${char.bg} flex flex-col justify-between h-[250px] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group`}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className={`p-3 rounded-2xl ${char.iconBg} ${char.textColor}`}>
                      <IconComp size={22} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gray opacity-60">
                      Nihar *
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase ${char.textColor}`}>
                      {char.tagline}
                    </span>
                    <h4 className="text-lg font-heading font-bold text-brand-black mt-1 mb-2">
                      {char.title}
                    </h4>
                    <p className="text-xs text-brand-gray font-light leading-relaxed">
                      {char.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
