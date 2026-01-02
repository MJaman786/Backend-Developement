import React from 'react';
import { Search, Command, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* --- LOGO SECTION --- */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* Logo Icon inspired by image */}
          <div className="relative">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            <div className="absolute inset-0 w-8 h-8 bg-cyan-400 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform duration-300 mix-blend-screen opacity-70" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white ml-2">
            CORE<span className="text-zinc-500">.</span>UI
          </span>
        </div>

        {/* --- NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to={'/'} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Header</NavLink>
          <NavLink to={'/all-users'} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">All Users</NavLink>
          <NavLink to={'/add-user'} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Add Student</NavLink>
          <NavLink to={''} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</NavLink>
        </nav>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-6">
          {/* Search bar with hint */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={15} />
            <input
              type="text"
              placeholder="Search components"
              className="bg-zinc-900/50 border border-zinc-800 rounded-full py-2 pl-10 pr-12 text-xs text-zinc-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 w-40 lg:w-56 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[9px] font-mono text-zinc-600">
              <Command size={10} /> K
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors px-2">
              Log in
            </button>
            <button className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;