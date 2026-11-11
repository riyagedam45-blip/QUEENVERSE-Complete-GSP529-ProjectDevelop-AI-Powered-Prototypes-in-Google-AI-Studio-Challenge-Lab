import React from 'react';
import { Heart, Sparkles, Swords, Brain, Zap, Shield } from 'lucide-react';
import { QueenStats } from '../types/queen';

interface QueenStatsBarsProps {
  stats: QueenStats;
  specialMagicalAbility: string;
  abilityDescription?: string;
  compact?: boolean;
}

export const QueenStatsBars: React.FC<QueenStatsBarsProps> = ({
  stats,
  specialMagicalAbility,
  abilityDescription,
  compact = false,
}) => {
  // Ensure default fallback values between 1 and 100
  const health = stats.health ?? 85;
  const mana = stats.mana ?? 88;
  const strength = stats.strength ?? 82;
  const intelligence = stats.intelligence ?? 90;

  return (
    <div className={`space-y-3.5 ${compact ? 'p-3' : 'p-4 sm:p-5'} rounded-2xl bg-[#060a1e]/90 border border-blue-900/50 shadow-inner`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
        <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-amber-300 uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          <span>Player Card Statistics</span>
        </div>
        <span className="text-[10px] font-mono text-blue-300/70 uppercase">Max 100</span>
      </div>

      {/* 4 Core Statistics Progress Bars */}
      <div className="space-y-3">
        {/* 1. Health */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-cinzel font-semibold text-emerald-300">
              <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
              <span>Health</span>
            </span>
            <span className="font-mono tabular-nums font-bold text-emerald-300">
              {health}<span className="text-[10px] text-slate-500 font-normal">/100</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-[1px] border border-emerald-950">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-teal-300 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all duration-700"
              style={{ width: `${Math.min(100, Math.max(0, health))}%` }}
            />
          </div>
        </div>

        {/* 2. Mana */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-cinzel font-semibold text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Mana</span>
            </span>
            <span className="font-mono tabular-nums font-bold text-sky-300">
              {mana}<span className="text-[10px] text-slate-500 font-normal">/100</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-[1px] border border-blue-950">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-700"
              style={{ width: `${Math.min(100, Math.max(0, mana))}%` }}
            />
          </div>
        </div>

        {/* 3. Strength */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-cinzel font-semibold text-amber-300">
              <Swords className="w-3.5 h-3.5 text-amber-400" />
              <span>Strength</span>
            </span>
            <span className="font-mono tabular-nums font-bold text-amber-300">
              {strength}<span className="text-[10px] text-slate-500 font-normal">/100</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-[1px] border border-amber-950">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-700"
              style={{ width: `${Math.min(100, Math.max(0, strength))}%` }}
            />
          </div>
        </div>

        {/* 4. Intelligence */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-cinzel font-semibold text-purple-300">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              <span>Intelligence</span>
            </span>
            <span className="font-mono tabular-nums font-bold text-purple-300">
              {intelligence}<span className="text-[10px] text-slate-500 font-normal">/100</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden p-[1px] border border-purple-950">
            <div
              className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-400 to-violet-300 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-700"
              style={{ width: `${Math.min(100, Math.max(0, intelligence))}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5. Special Magical Ability Badge */}
      <div className="pt-2.5 border-t border-blue-900/40">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/70 via-purple-950/70 to-blue-950/70 border border-amber-400/30 shadow-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-cinzel font-bold text-amber-300 uppercase tracking-wider mb-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Special Magical Ability</span>
          </div>
          <div className="text-xs sm:text-sm font-cinzel font-bold text-white">
            {specialMagicalAbility}
          </div>
          {abilityDescription && !compact && (
            <p className="text-[11px] text-slate-300/80 mt-1 font-light leading-relaxed">
              {abilityDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
