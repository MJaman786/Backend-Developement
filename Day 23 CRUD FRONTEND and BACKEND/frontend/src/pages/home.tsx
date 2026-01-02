import React from 'react';
import { ArrowRight } from 'lucide-react';

const MinimalHero: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-32 md:py-48 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Subtle top label */}
        <span className="text-indigo-500 text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
          Now in Beta
        </span>

        {/* Minimalist Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
          Design better. <br />
          <span className="text-zinc-500">Fast as thought.</span>
        </h1>

        {/* Clean, short description */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          The streamlined UI kit for developers who value speed and simplicity. 
          No bloat. Just the essentials.
        </p>

        {/* Simple Pill Button Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5">
            Start Building
          </button>
          
          <button className="group flex items-center gap-2 text-white text-sm font-semibold hover:text-indigo-400 transition-colors">
            View Components 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MinimalHero;