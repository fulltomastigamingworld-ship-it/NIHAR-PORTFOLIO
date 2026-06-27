import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isHovered) {
      slideTimer.current = setInterval(() => {
        handleNext();
      }, 7000); // Auto-slide every 7s
    } else {
      if (slideTimer.current) {
        clearInterval(slideTimer.current);
      }
    }

    return () => {
      if (slideTimer.current) {
        clearInterval(slideTimer.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white/45">
      <div className="absolute inset-0 bg-[radial-gradient(#00000001_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/[0.03] border border-black/[0.05] rounded-full">
            <span className="text-[10px] font-mono tracking-widest text-brand-gray uppercase">05 / Endorsements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-black tracking-tight leading-none">
            What Mentors <span className="text-brand-gray/60 font-light">Say</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative min-h-[350px] flex flex-col justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl bg-white/60 backdrop-blur-md border border-white/50 p-8 md:p-14 rounded-[32px] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
            >
              
              {/* Quote Mark Accent */}
              <Quote className="absolute right-8 top-8 text-black/[0.03] w-24 h-24 stroke-[1]" />

              {/* Avatar Image Block */}
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden border-2 border-white shadow-md relative shrink-0">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Content area */}
              <div className="flex flex-col flex-grow items-start justify-center gap-5 relative z-10">
                <p className="text-sm md:text-base text-brand-black leading-relaxed font-light italic">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex flex-col mt-2">
                  <span className="font-heading font-bold text-base text-brand-black">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="text-xs text-brand-gray font-mono mt-0.5">
                    {testimonials[activeIndex].role} &middot; <span className="font-semibold text-brand-black">{testimonials[activeIndex].company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-brand-black hover:text-[#F8F8F6] border border-black/10 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-brand-black' : 'w-1.5 bg-black/15'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-brand-black hover:text-[#F8F8F6] border border-black/10 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
