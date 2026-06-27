import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Sparkles, Calendar, MapPin, Building } from 'lucide-react';
import { timelineItems } from '../data';

const iconMap: Record<string, any> = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Award: Award,
  Sparkles: Sparkles
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
            <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">04 / Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
            Timeline of <span className="text-brand-gray/60 font-light">Milestones</span>
          </h2>
          <p className="text-brand-gray font-light max-w-md mt-2 text-sm leading-relaxed">
            A chronological mapping of my academic pursuits, technical certifications, industry experience, and strategic engineering goals.
          </p>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-[24px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 transform sm:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 relative">
            {timelineItems.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Award;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left or Right Content Block */}
                  <div className="w-full sm:w-[46%] flex flex-col justify-center pl-[56px] sm:pl-0">
                    <div className={`p-8 bg-white border border-black/[0.04] rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:scale-[1.005] transition-all duration-300 relative group`}>
                      
                      {/* Interactive edge badge */}
                      <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-brand-gray/30 group-hover:text-brand-gray/70 transition-colors">
                        * {item.type.toUpperCase()}
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Calendar size={13} className="text-brand-gray" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-black bg-black/[0.04] px-2.5 py-1 rounded-md">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-brand-black leading-snug">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mt-1.5 mb-4 text-brand-gray text-xs">
                        <Building size={12} className="opacity-75" />
                        <span className="font-medium">{item.institution}</span>
                      </div>

                      <p className="text-xs md:text-sm text-brand-gray font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node (strictly centered) */}
                  <div className="absolute left-0 sm:left-1/2 top-4 sm:-translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-[48px] h-[48px] rounded-full border border-black/[0.08] bg-[#F8F8F6] flex items-center justify-center text-brand-black shadow-md relative z-10`}
                    >
                      <IconComponent size={18} />
                    </motion.div>
                  </div>

                  {/* Spacer for horizontal spacing */}
                  <div className="hidden sm:block w-[8%]" />

                  {/* Empty balance block */}
                  <div className="hidden sm:block w-[46%]" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
