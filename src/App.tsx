import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] // Apple/Linear luxury ease-out
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F8F6] text-brand-black selection:bg-brand-black selection:text-white">
      {/* Global Mouse Follower */}
      <MouseFollower />

      {/* Blurred Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10">
        <Hero />

        {/* About Me Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>

        {/* Stats Strip */}
        <Stats />

        {/* Featured Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <Timeline />
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
