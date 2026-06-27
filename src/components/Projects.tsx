import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowUpRight, Code, Beaker, Cpu, ArrowRight } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI' | 'Engineering' | 'Software'>('All');
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const categories: ('All' | 'AI' | 'Engineering' | 'Software')[] = ['All', 'AI', 'Engineering', 'Software'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Cpu size={14} />;
      case 'Engineering': return <Beaker size={14} />;
      default: return <Code size={14} />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-white/45">
      <div className="absolute inset-0 bg-[radial-gradient(#00000001_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
              <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">03 / Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
              Featured <span className="text-brand-gray/60 font-light">Engineering Work</span>
            </h2>
          </motion.div>

          {/* Filtering Tabs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-1.5 p-1.5 bg-black/[0.03] rounded-2xl border border-black/[0.05] self-start md:self-end"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 relative cursor-pointer ${
                  activeCategory === cat ? 'text-brand-black' : 'text-brand-gray hover:text-brand-black'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat !== 'All' && getCategoryIcon(cat)}
                  {cat}
                </span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/[0.03]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full bg-white border border-black/[0.04] rounded-[28px] overflow-hidden shadow-sm hover:shadow-[0_24px_55px_-12px_rgba(0,0,0,0.06)] transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Large Project Image with metric tag and hover overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg select-none">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Dark transparent fade to reveal details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />

                  {/* Top floating overlays */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="px-3.5 py-1.5 bg-[#F8F8F6]/95 backdrop-blur-md border border-black/[0.05] rounded-full text-[10px] font-mono tracking-wider text-brand-black uppercase font-medium flex items-center gap-1.5">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>

                    {project.metrics && (
                      <span className="px-3.5 py-1.5 bg-brand-black text-[#F8F8F6] text-[10px] font-mono tracking-wider uppercase font-semibold rounded-full shadow-md">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 flex flex-col flex-grow gap-4 relative">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-gray/90 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-brand-gray font-light leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-black/[0.03] text-brand-gray text-[10px] font-mono rounded-lg border border-black/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Action Area */}
                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-black/[0.03]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-black/10 hover:border-black/35 rounded-xl text-xs font-semibold text-brand-gray hover:text-brand-black transition-all duration-300 cursor-pointer"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-black text-white hover:bg-brand-black/90 rounded-xl text-xs font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ml-auto group/btn"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner high-end arrow sign */}
                <div className="absolute top-4 right-4 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden lg:block">
                  <div className="p-2 bg-brand-black text-white rounded-full">
                    <ArrowRight size={14} className="-rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
