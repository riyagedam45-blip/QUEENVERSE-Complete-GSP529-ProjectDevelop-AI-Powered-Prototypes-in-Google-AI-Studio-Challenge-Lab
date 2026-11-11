import React, { useState } from 'react';
import {
  Crown,
  Scroll,
  Sparkles,
  Shield,
  Zap,
  Sword,
  Trophy,
  Target,
  Copy,
  Check,
  RefreshCw,
  MapPin,
  Bot
} from 'lucide-react';
import { Queen, QueenBackstory } from '../types/queen';
import { playClickSound } from '../utils/audio';

interface RoyalStoryCardProps {
  queen: Queen;
  backstory: QueenBackstory | null;
  isLoading: boolean;
  onGenerateStory: () => void;
}

export const RoyalStoryCard: React.FC<RoyalStoryCardProps> = ({
  queen,
  backstory,
  isLoading,
  onGenerateStory,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyStory = () => {
    if (!backstory) return;
    playClickSound();

    const fullText = `👑 THE ROYAL CHRONICLE OF ${queen.name.toUpperCase()} 👑\n` +
      `Title: ${queen.royalTitle}\n` +
      `Class: ${queen.queenClass} | Kingdom: ${queen.kingdom}\n\n` +
      `1. UNIQUE ORIGIN STORY:\n${backstory.originStory}\n\n` +
      `2. KINGDOM & ROYAL FAMILY:\n${backstory.kingdomAndFamily}\n\n` +
      `3. MAGICAL POWERS:\n${backstory.magicalPowers}\n\n` +
      `4. GREATEST ENEMY:\n${backstory.greatestEnemy}\n\n` +
      `5. BIGGEST ACHIEVEMENT:\n${backstory.biggestAchievement}\n\n` +
      `6. ROYAL MISSION:\n${backstory.royalMission}\n\n` +
      `— Recorded in QUEENVERSE: The World of Fantasy Queens —`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full mt-10 relative">
      {/* Royal Story Card Container */}
      <div className="relative bg-gradient-to-b from-[#090f2b] via-[#070b1e] to-[#040614] border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl gold-card-frame overflow-hidden">
        {/* Top Gold & Blue Regal Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

        {/* Corner Heraldic Accents */}
        <div className="absolute top-3 left-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
        <div className="absolute top-3 right-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
        <div className="absolute bottom-3 left-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
        <div className="absolute bottom-3 right-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>

        {/* Card Header & Main Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-blue-900/40">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-amber-400/40 text-xs font-cinzel text-amber-300 uppercase tracking-widest mb-2">
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Imperial Lore Chronicler</span>
              {backstory?.generatedByAI && (
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono">
                  GEMINI AI
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white tracking-tight">
              The Backstory of <span className="text-gold-gradient">{queen.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/80 font-cinzel mt-1">
              {queen.royalTitle} · Sovereign of {queen.kingdom}
            </p>
          </div>

          {/* Action Button: Generate Queen's Story */}
          <div className="flex items-center gap-3 shrink-0">
            {backstory && (
              <button
                onClick={handleCopyStory}
                className="px-4 py-2.5 rounded-xl bg-blue-950/70 hover:bg-blue-900/70 border border-blue-800/60 text-slate-200 hover:text-amber-300 text-xs font-cinzel font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy full 6-part backstory"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Chronicle Copied!' : 'Copy Chronicle'}</span>
              </button>
            )}

            <button
              onClick={() => {
                playClickSound();
                onGenerateStory();
              }}
              disabled={isLoading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 text-black text-xs sm:text-sm font-cinzel font-bold tracking-wider glow-royal-gold active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer disabled:opacity-60 shadow-lg shadow-amber-500/20"
            >
              <RefreshCw className={`w-4 h-4 text-black ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Weaving Lore...' : "Generate Queen's Story"}</span>
              <Sparkles className="w-4 h-4 text-purple-950 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Loading State Skeleton */}
        {isLoading && (
          <div className="py-16 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-950/60 border border-amber-400/40 flex items-center justify-center mx-auto animate-pulse">
              <Scroll className="w-7 h-7 text-amber-300" />
            </div>
            <div className="text-lg font-cinzel font-bold text-amber-300">
              Consulting the Imperial Archives...
            </div>
            <p className="text-xs text-slate-300/70 max-w-sm mx-auto font-light">
              Weaving her origin story, kingdom dynasty, magical powers, arch-enemy, greatest triumph, and royal mission.
            </p>
          </div>
        )}

        {/* Backstory Sections Grid */}
        {!isLoading && backstory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {/* 1. Origin Story */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-amber-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300">
                    <Scroll className="w-4 h-4" />
                  </div>
                  <span>1. Unique Origin Story</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.originStory}
                </p>
              </div>
            </div>

            {/* 2. Kingdom and Royal Family */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-amber-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-400/30 text-blue-300">
                    <Crown className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>2. Kingdom & Royal Family</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.kingdomAndFamily}
                </p>
              </div>
            </div>

            {/* 3. Magical Powers */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-amber-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-400/30 text-purple-300">
                    <Zap className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>3. Her Magical Powers</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.magicalPowers}
                </p>
              </div>
            </div>

            {/* 4. Greatest Enemy */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-red-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-400/30 text-red-300">
                    <Sword className="w-4 h-4 text-red-300" />
                  </div>
                  <span>4. Her Greatest Enemy</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.greatestEnemy}
                </p>
              </div>
            </div>

            {/* 5. Biggest Achievement */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-yellow-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-yellow-300">
                    <Trophy className="w-4 h-4 text-amber-300" />
                  </div>
                  <span>5. Her Biggest Achievement</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.biggestAchievement}
                </p>
              </div>
            </div>

            {/* 6. Royal Mission */}
            <div className="p-5 rounded-2xl bg-[#070b22]/90 border border-blue-900/50 hover:border-amber-400/40 transition-colors shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-cinzel uppercase tracking-wider text-cyan-300 font-bold mb-3 pb-2 border-b border-blue-900/40">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    <Target className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span>6. Her Royal Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-serif">
                  {backstory.royalMission}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State before first generation */}
        {!isLoading && !backstory && (
          <div className="py-12 text-center">
            <Scroll className="w-10 h-10 text-blue-400/60 mx-auto mb-3" />
            <div className="text-base font-cinzel font-bold text-slate-200">
              Chronicle Awaiting Sovereign Decree
            </div>
            <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 mb-5">
              Click the button above to generate a complete 6-part AI fantasy backstory detailing {queen.name}'s origins, royal family, powers, arch-nemesis, greatest victory, and sacred mission.
            </p>
            <button
              onClick={() => {
                playClickSound();
                onGenerateStory();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 text-black text-xs font-cinzel font-bold glow-royal-gold cursor-pointer"
            >
              Generate Queen's Story
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
