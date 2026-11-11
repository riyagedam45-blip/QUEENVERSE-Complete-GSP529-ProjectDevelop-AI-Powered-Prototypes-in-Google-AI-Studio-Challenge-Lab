import React from 'react';
import { Crown, Sparkles, ArrowUp } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenCodex: () => void;
  onOpenCourt: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToTop,
  onOpenCodex,
  onOpenCourt,
}) => {
  return (
    <footer className="border-t border-blue-900/40 bg-[#030511] text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300">
              <Crown className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-base font-cinzel font-bold text-gold-gradient tracking-wider">
              QUEENVERSE
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">· The World of Fantasy Queens</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-cinzel font-medium">
            <button
              onClick={() => {
                playClickSound();
                onOpenCodex();
              }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Realm Codex
            </button>
            <button
              onClick={() => {
                playClickSound();
                onOpenCourt();
              }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Royal Court
            </button>
            <button
              onClick={() => {
                playClickSound();
                onScrollToTop();
              }}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ascend to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} QUEENVERSE. All sovereign rights reserved across the Six Realms.</p>
          <p className="font-cinzel text-amber-400/80">Forged in Dark Midnight, Royal Blue, Amethyst Purple & Imperial Gold</p>
        </div>
      </div>
    </footer>
  );
};
