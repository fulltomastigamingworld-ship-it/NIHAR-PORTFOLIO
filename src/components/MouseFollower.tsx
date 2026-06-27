import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);

  // Position vectors for outer halo
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position vectors for inner pinpoint
  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  // Smooth springs to avoid jitter
  const springConfig = { damping: 40, stiffness: 350, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerXSpring = useSpring(innerX, springConfig);
  const innerYSpring = useSpring(innerY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Offset for 32px (w-8 h-8) to center the cursor
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      // Offset for 6px (w-1.5 h-1.5) to center the pinpoint
      innerX.set(e.clientX - 3);
      innerY.set(e.clientY - 3);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, innerX, innerY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Springing Halo */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black/15 pointer-events-none z-50 mix-blend-difference hidden md:block"
        transition={{ type: 'spring', ...springConfig }}
      />
      {/* Inner Pinpoint */}
      <motion.div
        style={{
          x: innerXSpring,
          y: innerYSpring,
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        transition={{ type: 'spring', ...springConfig }}
      />
    </>
  );
}
