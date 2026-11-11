import React, { useState, useMemo } from 'react';
import {
  Crown,
  Trash2,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  Heart,
  Zap,
  Swords,
  Brain,
  Plus
} from 'lucide-react';
import { Queen, QueenClass } from '../types/queen';
import { QueenStatsBars } from './QueenStatsBars';
import { playClickSound } from '../utils/audio';

interface MyQueensCollectionProps {
  savedQueens: Queen[];
  onSelectQueen: (queen: Queen) => void;
  onRemoveQueen: (id: string) => void;
  onOpenLore: (queen: Queen) => void;
  onScrollToGenerator: () => void;
  onClearDeck: () => void;
}

export const MyQueensCollection: React.FC<MyQueensCollectionProps> = ({
  savedQueens,
  onSelectQueen,
  onRemoveQueen,
  onOpenLore,
  onScrollToGenerator,
  onClearDeck,
}) => {
  const [filterClass, setFilterClass] = useState<QueenClass | 'ALL'>('ALL');

  // Filtered queens
  const filteredQueens = useMemo(() => {
    if (filterClass === 'ALL') return savedQueens;
    return savedQueens.filter((q) => q.queenClass === filterClass);
  }, [savedQueens, filterClass]);

  // Aggregate Deck Statistics
  const deckStats = useMemo(() => {
    if (savedQueens.length === 0) return null;
    const count = savedQueens.length;
    const avgHealth = Math.round(savedQueens.reduce((sum, q) => sum + (q.stats.health ?? 85), 0) / count);
    const avgMana = Math.round(savedQueens.reduce((sum, q) => sum + (q.stats.mana ?? 88), 0) / count);
    const avgStrength = Math.round(savedQueens.reduce((sum, q) => sum + (q.stats.strength ?? 82), 0) / count);
    const avgInt = Math.round(savedQueens.reduce((sum, q) => sum + (q.stats.intelligence ?? 90), 0) / count);

    return { count, avgHealth, avgMana, avgStrength, avgInt };
  }, [savedQueens]);

  return (
    <section id="my-queens" className="py-16 md:py-28 bg-[#050818]/90 border-t border-blue-900/40 scroll-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-amber-400/30 text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Royal Player Cards & Dynasty Roster</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white tracking-tight">
              My Queens Collection
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base mt-2 font-light">
              Your preserved royal deck of sovereigns, battle statistics, and arcane abilities.
            </p>
          </div>

          {/* Action buttons on header */}
          <div className="flex items-center gap-3">
            {savedQueens.length > 0 && (
              <button
                onClick={() => {
                  playClickSound();
                  if (confirm('Are you sure you wish to dissolve your Royal Deck?')) {
                    onClearDeck();
                  }
                }}
                className="px-4 py-2 rounded-xl border border-red-500/40 hover:bg-red-500/20 text-red-300 text-xs font-cinzel flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Deck</span>
              </button>
            )}

            <button
              onClick={() => {
                playClickSound();
                onScrollToGenerator();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 text-black text-xs font-cinzel font-bold flex items-center gap-1.5 glow-royal-gold active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-black" />
              <span>Summon More Queens</span>
            </button>
          </div>
        </div>

        {/* Aggregate Deck Metrics Strip */}
        {deckStats && (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 mb-10 rounded-2xl bg-gradient-to-r from-[#090e29] to-[#070b1f] border border-blue-800/40 shadow-xl">
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/30 text-center">
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-amber-300 tabular-nums">
                {deckStats.count}
              </div>
              <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5">
                Deck Sovereigns
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/30 text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-300 tabular-nums flex items-center justify-center gap-1">
                <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />
                <span>{deckStats.avgHealth}</span>
              </div>
              <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5">
                Avg Health
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/30 text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-sky-300 tabular-nums flex items-center justify-center gap-1">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>{deckStats.avgMana}</span>
              </div>
              <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5">
                Avg Mana
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/30 text-center">
              <div className="text-xl sm:text-2xl font-mono font-bold text-amber-300 tabular-nums flex items-center justify-center gap-1">
                <Swords className="w-4 h-4 text-amber-400" />
                <span>{deckStats.avgStrength}</span>
              </div>
              <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5">
                Avg Strength
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/30 text-center col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-mono font-bold text-purple-300 tabular-nums flex items-center justify-center gap-1">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>{deckStats.avgInt}</span>
              </div>
              <div className="text-[11px] font-cinzel text-slate-400 uppercase tracking-wider mt-0.5">
                Avg Intelligence
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {savedQueens.length === 0 ? (
          <div className="py-20 px-4 text-center rounded-3xl bg-gradient-to-b from-[#080d26] to-[#040614] border-2 border-dashed border-blue-800/50 shadow-2xl">
            <div className="w-20 h-20 rounded-3xl bg-blue-950/60 border border-amber-400/40 flex items-center justify-center mx-auto mb-4 glow-royal-gold">
              <Crown className="w-10 h-10 text-amber-300" />
            </div>
            <h3 className="text-2xl font-cinzel font-bold text-white mb-2">
              Your Royal Deck Awaits Its Sovereigns
            </h3>
            <p className="text-sm text-slate-300/80 max-w-md mx-auto mb-8 font-light leading-relaxed">
              You haven't saved any queen player cards yet. Click the <span className="text-amber-300 font-semibold">"Save to My Royal Deck"</span> button on any generated queen to add her to your collection with full stats and abilities.
            </p>
            <button
              onClick={() => {
                playClickSound();
                onScrollToGenerator();
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 text-black text-sm font-cinzel font-bold glow-royal-gold active:scale-95 transition-all cursor-pointer"
            >
              Generate a Queen Now
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQueens.map((queen) => (
              <div
                key={queen.id}
                className="group relative bg-gradient-to-b from-[#0a0f2b] via-[#070b1f] to-[#040716] border-2 border-amber-400/40 hover:border-amber-400/80 rounded-3xl overflow-hidden p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/70 gold-card-frame"
              >
                {/* Top Card Crown Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

                <div>
                  {/* Portrait & Class Badge */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border-2 border-amber-400/40 group-hover:border-amber-400/70 transition-colors shadow-lg">
                    <img
                      src={queen.portraitUrl}
                      alt={queen.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-xs font-cinzel font-bold text-amber-300 bg-[#070b1e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/40">
                      <span>{queen.sigil}</span>
                      <span>{queen.queenClass}</span>
                    </div>

                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 text-[11px] font-mono text-sky-300 border border-blue-400/30">
                      REGALIA
                    </div>
                  </div>

                  {/* Queen's Name & Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {queen.name}
                    </h3>
                    <p className="text-xs font-cinzel text-purple-200/90 line-clamp-1 mt-0.5">
                      {queen.royalTitle}
                    </p>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-1 font-light">
                      <span className="text-amber-400/80 font-cinzel">Kingdom:</span> {queen.kingdom}
                    </div>
                  </div>

                  {/* Interactive Player Statistics Progress Bars */}
                  <QueenStatsBars
                    stats={queen.stats}
                    specialMagicalAbility={queen.specialMagicalAbility || queen.magicalPower}
                    abilityDescription={queen.powerDescription}
                    compact={true}
                  />
                </div>

                {/* Card Actions: Ascend Throne, View Lore, Remove */}
                <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-blue-900/40">
                  <button
                    onClick={() => {
                      playClickSound();
                      onSelectQueen(queen);
                      onScrollToGenerator();
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 hover:from-amber-300 hover:via-amber-400 hover:to-yellow-500 text-amber-300 hover:text-black border border-blue-700/60 hover:border-amber-400 text-xs font-cinzel font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    title="Load queen into generator throne"
                  >
                    <Crown className="w-3.5 h-3.5" />
                    <span>Ascend Throne</span>
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      onOpenLore(queen);
                    }}
                    className="p-2 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
                    title="View royal lore & story"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      onRemoveQueen(queen.id);
                    }}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-colors cursor-pointer"
                    title="Remove from My Queens collection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
