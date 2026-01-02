import React from 'react';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        {/* Large 404 Heading */}
        <h1 className="text-[120px] md:text-[160px] font-black text-zinc-900 leading-none select-none">
          404
        </h1>

        {/* Floating Icon */}
        <div className="flex justify-center -mt-12 mb-8">
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl animate-bounce">
            <Ghost size={48} className="text-indigo-400" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Lost in the void?
        </h2>
        <p className="text-zinc-500 mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved to another coordinate.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-zinc-400 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Subtle bottom text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-[10px] text-zinc-700 uppercase tracking-[0.3em]">
          Error Code: 0x404_PAGE_NOT_FOUND
        </p>
      </div>
    </div>
  );
};

export default NotFound;