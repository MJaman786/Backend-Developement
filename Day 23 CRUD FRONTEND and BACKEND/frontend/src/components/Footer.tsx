import React from 'react';
import { Cpu, Github, Twitter, Linkedin, ArrowRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background glow to match the Hero section */}
      <div className="absolute bottom-0 left-1/4 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Cpu size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Core<span className="text-zinc-500">.</span>UI
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              The world's most advanced UI kit for React and Tailwind CSS. 
              Built for speed, accessibility, and high-performance teams.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Twitter size={18} />} />
              <SocialLink icon={<Github size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Product</h4>
            <ul className="space-y-4">
              <FooterLink label="Components" />
              <FooterLink label="Templates" />
              <FooterLink label="Design System" />
              <FooterLink label="Showcase" />
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-4">
              <FooterLink label="About Us" />
              <FooterLink label="Changelog" />
              <FooterLink label="Privacy Policy" />
              <FooterLink label="Terms" />
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Newsletter</h4>
            <p className="text-zinc-500 text-xs mb-4">Stay updated with our latest releases.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full py-2.5 px-4 text-xs text-zinc-300 outline-none focus:border-indigo-500/50 transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} CORE UI Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Systems Operational
            </span>
          </div>
          <p className="text-zinc-600 text-xs flex items-center gap-1">
            Build with <Heart size={12} className="text-indigo-500" /> globally.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for cleaner code
const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-zinc-500 text-sm hover:text-indigo-400 transition-colors">
      {label}
    </a>
  </li>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
    {icon}
  </a>
);

export default Footer;