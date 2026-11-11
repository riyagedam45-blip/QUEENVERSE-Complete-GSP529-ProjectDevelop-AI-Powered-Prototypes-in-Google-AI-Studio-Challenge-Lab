import React from 'react';
import { Crown, Sparkles, Shield, Compass, Swords } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface HeroProps {
  onSummonClick: () => void;
  onExploreRealms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSummonClick, onExploreRealms }) => {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
      {/* Royal Blue & Purple Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-blue-700/20 via-purple-700/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/5 w-[380px] h-[380px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/5 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Crown & Royal Kicker */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950/70 via-purple-950/70 to-blue-950/70 border border-amber-400/40 text-xs sm:text-sm font-cinzel tracking-widest text-amber-300 mb-6 shadow-sm shadow-blue-900/50">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>IMPERIAL CORONATION CHAMBER</span>
          <span aria-hidden="true" className="text-blue-400/60">✦</span>
          <span>THE SIX SOVEREIGN REALMS</span>
        </div>

        {/* Majestic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-tight text-white mb-6">
          <span className="block text-gold-gradient font-decorative text-4xl sm:text-6xl lg:text-7xl tracking-wide drop-shadow-[0_4px_20px_rgba(234,179,8,0.25)]">
            QUEENVERSE
          </span>
          <span className="block text-xl sm:text-3xl lg:text-4xl font-light text-slate-200 mt-3 tracking-wide">
            The World of Fantasy Queens
          </span>
        </h1>

        {/* Heraldic Crown Divider */}
        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <Crown className="w-5 h-5 text-amber-400" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300/90 leading-relaxed font-light mb-10">
          Step into a grand sovereign domain where primordial elements reign supreme. Summon legendary rulers
          of eternal flame, glacial permafrost, celestial moon tides, ancient dragons, lionheart vanguard, and prismatic crystals—each
          enshrined in the signature white fitted royal coat, royal blue diagonal sash, flowing blue cape, silver moon chains, and white boots.
        </p>

        {/* Beautiful Glowing Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <button
            onClick={() => {
              playClickSound();
              onSummonClick();
            }}
            className="w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-cinzel font-bold tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 rounded-2xl glow-royal-gold active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Crown className="w-5 h-5 text-black group-hover:rotate-12 transition-transform duration-300" />
            <span>Generate Fantasy Queen</span>
            <Sparkles className="w-4 h-4 text-purple-950 animate-pulse" />
          </button>

          <button
            onClick={() => {
              playClickSound();
              onExploreRealms();
            }}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-cinzel font-semibold tracking-wider text-slate-200 hover:text-amber-300 bg-[#0b102c]/80 hover:bg-[#111944]/80 rounded-2xl border border-blue-500/40 hover:border-amber-400/60 glow-royal-blue active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-blue-400" />
            <span>Explore The 6 Classes</span>
          </button>
        </div>

        {/* Proof & Kingdom Stat Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-blue-900/40">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1333]/70 to-[#070b1e]/70 border border-blue-800/40 hover:border-amber-400/40 transition-colors shadow-lg shadow-black/30">
            <div className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 tabular-nums">6</div>
            <div className="text-xs text-blue-200/80 mt-1 uppercase font-cinzel tracking-wider">Sovereign Realms</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1333]/70 to-[#070b1e]/70 border border-blue-800/40 hover:border-amber-400/40 transition-colors shadow-lg shadow-black/30">
            <div className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 tabular-nums">10,000+</div>
            <div className="text-xs text-blue-200/80 mt-1 uppercase font-cinzel tracking-wider">Unique Dynasties</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1333]/70 to-[#070b1e]/70 border border-blue-800/40 hover:border-amber-400/40 transition-colors shadow-lg shadow-black/30">
            <div className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 tabular-nums">100%</div>
            <div className="text-xs text-blue-200/80 mt-1 uppercase font-cinzel tracking-wider">Distinct Queens</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0c1333]/70 to-[#070b1e]/70 border border-blue-800/40 hover:border-amber-400/40 transition-colors shadow-lg shadow-black/30">
            <div className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 tabular-nums">∞</div>
            <div className="text-xs text-blue-200/80 mt-1 uppercase font-cinzel tracking-wider">Arcane Powers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
