import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { statistics } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds animation duration
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <span ref={elementRef} className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black tracking-tight select-none">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white/20 border-y border-black/[0.03] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00000001_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/40 border border-black/[0.03] rounded-3xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Animated Value */}
              <Counter value={stat.value} suffix={stat.suffix} />

              {/* Title / Label */}
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-black mt-3 mb-1">
                {stat.label}
              </span>

              {/* Description */}
              <span className="text-[11px] text-brand-gray font-light max-w-[160px] leading-normal">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
