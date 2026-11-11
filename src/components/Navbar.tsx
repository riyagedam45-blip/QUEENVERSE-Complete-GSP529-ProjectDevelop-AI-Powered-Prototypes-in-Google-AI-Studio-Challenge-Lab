import React from 'react';
import { Volume2, VolumeX, Crown, Bookmark, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface NavbarProps {
  onGenerateClick: () => void;
  onOpenCourt: () => void;
  onOpenCodex: () => void;
  savedCount: number;
  isSoundOn: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGenerateClick,
  onOpenCourt,
  onOpenCodex,
  savedCount,
  isSoundOn,
  onToggleSound,
}) => {
  const scrollTo = (id: string) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-900/40 bg-[#050818]/90 backdrop-blur-md shadow-lg shadow-black/40">
      {/* Top subtle gold filament */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('top');
          }}
          className="flex items-center gap-3 text-xl sm:text-2xl font-cinzel font-bold tracking-widest text-amber-300 hover:text-amber-200 transition-all whitespace-nowrap shrink-0 group"
        >
          <div className="p-1.5 rounded-xl bg-gradient-to-br from-amber-400/20 to-blue-600/20 border border-amber-400/40 shadow-sm shadow-amber-500/20 group-hover:border-amber-400 transition-colors">
            <Crown className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-gold-gradient font-bold drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
            QUEENVERSE
          </span>
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-cinzel font-medium text-slate-300">
          <button
            onClick={() => scrollTo('generator')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-blue-400 hover:after:w-full after:transition-all"
          >
            Generator
          </button>
          <button
            onClick={() => scrollTo('realms')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-blue-400 hover:after:w-full after:transition-all"
          >
            The Six Realms
          </button>
          <button
            onClick={() => scrollTo('my-queens')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-blue-400 hover:after:w-full after:transition-all"
          >
            <span>My Queens</span>
            {savedCount > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/30 to-purple-600/30 text-amber-300 border border-amber-400/40 font-mono">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              playClickSound();
              onOpenCourt();
            }}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-blue-400 hover:after:w-full after:transition-all"
          >
            Royal Court
          </button>
          <button
            onClick={() => {
              playClickSound();
              onOpenCodex();
            }}
            className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-blue-400 hover:after:w-full after:transition-all"
          >
            Realm Codex
          </button>
        </nav>

        {/* Zone 3: 1 primary action button + sound & mobile court */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            title={isSoundOn ? 'Mute royal audio' : 'Unmute royal audio'}
            aria-label="Toggle Royal Chimes Sound"
            className="p-2.5 text-blue-300/80 hover:text-amber-300 hover:bg-blue-950/40 rounded-xl border border-blue-900/50 hover:border-amber-400/40 transition-all cursor-pointer"
          >
            {isSoundOn ? <Volume2 className="w-4 h-4 text-amber-300" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              onOpenCourt();
            }}
            className="md:hidden p-2.5 text-slate-300 hover:text-amber-300 hover:bg-blue-950/40 rounded-xl border border-blue-900/50 transition-colors relative cursor-pointer"
            title="Open Royal Court"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Beautiful glowing primary button */}
          <button
            onClick={() => {
              playClickSound();
              onGenerateClick();
            }}
            className="relative px-5 py-2.5 text-xs sm:text-sm font-cinzel font-bold tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 rounded-xl glow-royal-gold active:scale-95 transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer overflow-hidden group"
          >
            <Crown className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>Generate Queen</span>
          </button>
        </div>
      </div>
    </header>
  );
};
