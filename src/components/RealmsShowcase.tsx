import React from 'react';
import { Crown, Sparkles, Flame, Snowflake, Moon, Gem, Swords, ArrowUpRight } from 'lucide-react';
import { QueenClass } from '../types/queen';
import { QUEEN_CLASSES, CLASS_METADATA, CLASS_LORE } from '../data/queenData';
import { playClickSound } from '../utils/audio';

interface RealmsShowcaseProps {
  onSummonClass: (cls: QueenClass) => void;
}

const CLASS_ICONS: Record<QueenClass, React.ReactNode> = {
  'Fire Queen': <Flame className="w-4 h-4 text-amber-400" />,
  'Ice Queen': <Snowflake className="w-4 h-4 text-cyan-300" />,
  'Moon Queen': <Moon className="w-4 h-4 text-purple-300" />,
  'Dragon Queen': <Crown className="w-4 h-4 text-amber-400" />,
  'Warrior Queen': <Swords className="w-4 h-4 text-yellow-400" />,
  'Crystal Queen': <Gem className="w-4 h-4 text-fuchsia-400" />,
};

export const RealmsShowcase: React.FC<RealmsShowcaseProps> = ({ onSummonClass }) => {
  return (
    <section id="realms" className="py-16 md:py-28 bg-[#050818]/85 border-y border-blue-900/40 scroll-mt-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-amber-400/30 text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Imperial Sovereignty Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white tracking-tight">
            The Six Sovereign Realms
          </h2>
          <p className="text-slate-300/80 text-sm sm:text-base mt-2 font-light">
            Explore the royal lineages and summon their monarchs directly to the coronation chamber.
          </p>
        </div>

        {/* 6 Realms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {QUEEN_CLASSES.map((cls) => {
            const meta = CLASS_METADATA[cls];
            const lore = CLASS_LORE[cls];
            const sampleKingdom = lore.kingdoms[0];
            const samplePower = lore.powers[0];

            return (
              <div
                key={cls}
                className="group relative bg-gradient-to-b from-[#090e29] to-[#050719] rounded-3xl border border-blue-800/40 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60"
              >
                <div>
                  {/* Portrait with royal aspect ratio and gold frame */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border-2 border-amber-400/40 group-hover:border-amber-400 transition-colors shadow-lg">
                    <img
                      src={meta.portraitUrl}
                      alt={cls}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040614]/85 via-[#040614]/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-cinzel font-bold text-amber-300 bg-[#070b1e]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/40 shadow-sm">
                      {CLASS_ICONS[cls]}
                      <span>{cls}</span>
                    </div>
                  </div>

                  {/* Title & Realm Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cls}
                    </h3>
                    <p className="text-xs text-slate-300/80 mt-1 line-clamp-2 font-light">
                      {meta.themeDescription}
                    </p>
                  </div>

                  {/* Key Metadata Panels */}
                  <div className="space-y-2.5 mb-6 text-xs">
                    <div className="p-3 rounded-xl bg-[#070b20] border border-blue-900/40">
                      <span className="text-amber-400/90 font-cinzel uppercase block text-[10px] tracking-wider mb-0.5">
                        Imperial Seat
                      </span>
                      <span className="text-slate-100 font-medium">
                        {sampleKingdom}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#070b20] border border-blue-900/40">
                      <span className="text-amber-400/90 font-cinzel uppercase block text-[10px] tracking-wider mb-0.5">
                        Signature Power
                      </span>
                      <span className="text-amber-300 font-medium">
                        {samplePower.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action: Summon this Class with Glowing Button */}
                <button
                  onClick={() => {
                    playClickSound();
                    onSummonClass(cls);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-950/80 to-[#101b44] hover:from-amber-300 hover:via-amber-400 hover:to-yellow-500 text-amber-300 hover:text-black border border-blue-700/50 hover:border-amber-400 text-xs font-cinzel font-bold flex items-center justify-center gap-2 hover:glow-royal-gold transition-all active:scale-95 cursor-pointer"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>Summon {cls}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
