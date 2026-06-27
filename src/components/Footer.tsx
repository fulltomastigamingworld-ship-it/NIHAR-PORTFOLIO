import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-black/[0.04] bg-white/20 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-1.5 font-heading font-bold text-sm tracking-tight text-brand-black">
            <span>NIHAR</span>
            <span className="text-brand-gray/50">*</span>
          </div>
          <span className="text-[10px] font-mono text-brand-gray">
            &copy; {year} &middot; All Rights Reserved. Penn State University.
          </span>
        </div>

        {/* Center: Brand tagline */}
        <div className="text-[11px] font-mono text-brand-gray text-center max-w-[280px] leading-relaxed">
          Designed with passion by <span className="text-brand-black font-semibold">Nihar</span> &middot; Blending deep chemical physics with machine intelligence.
        </div>

        {/* Right Side: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 bg-white/60 hover:bg-brand-black hover:text-[#F8F8F6] border border-black/10 rounded-full text-xs font-semibold text-brand-gray transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
