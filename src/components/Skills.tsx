import { motion } from 'motion/react';
import { Cpu, Beaker, Code, Layers, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data';

const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Beaker: Beaker,
  Code: Code
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

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
            <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">02 / Toolkit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
            Deep Domain <span className="text-brand-gray/60 font-light">Capabilities</span>
          </h2>
          <p className="text-brand-gray font-light max-w-lg mt-2 text-sm md:text-base leading-relaxed">
            Highly specialized skill set crossing traditional chemical engineering processes with modern advanced computation and automation engines.
          </p>
        </motion.div>

        {/* Floating Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.iconName] || Layers;
            return (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="bg-white/80 border border-black/[0.04] p-8 md:p-10 rounded-[28px] shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-8 h-full relative overflow-hidden group"
              >
                {/* Floating card visual glow */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Title area */}
                <div className="flex items-center gap-4 border-b border-black/[0.04] pb-6">
                  <div className="p-3 bg-brand-bg border border-black/[0.05] rounded-2xl text-brand-black group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gray">Category 0{idx + 1}</span>
                    <h3 className="text-lg font-heading font-bold text-brand-black mt-0.5">{cat.title}</h3>
                  </div>
                </div>

                {/* Skills Badges container */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="px-4 py-2 bg-[#F8F8F6]/75 border border-black/[0.05] hover:border-black/20 hover:bg-white text-xs text-brand-gray hover:text-brand-black rounded-full font-medium shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-all duration-300 flex items-center gap-2 cursor-default select-none"
                    >
                      <CheckCircle size={10} className="text-brand-gray/60 group-hover:text-brand-black transition-colors" />
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Small indicator */}
                <div className="mt-auto pt-4 flex items-center justify-between text-[10px] font-mono text-brand-gray/50">
                  <span>PSU CE LAB</span>
                  <span> verified //</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
