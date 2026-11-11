import React from 'react';
import { X, Crown, Sparkles, MapPin, Zap, Shield, BookOpen } from 'lucide-react';
import { Queen } from '../types/queen';
import { playClickSound } from '../utils/audio';

interface QueenLoreModalProps {
  queen: Queen | null;
  onClose: () => void;
}

export const QueenLoreModal: React.FC<QueenLoreModalProps> = ({ queen, onClose }) => {
  if (!queen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#070b1e] border-2 border-amber-400/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden gold-card-frame">
        {/* Top Gold & Blue Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

        {/* Header */}
        <div className="p-6 border-b border-blue-900/40 flex items-center justify-between bg-[#050818]">
          <div className="flex items-center gap-2.5 text-xs font-cinzel text-amber-400 tracking-widest uppercase">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Imperial Chronicle & Lore Archive</span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-blue-900/40 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Parchment-style Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-gradient-to-b from-[#070b1e] to-[#040614]">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-950/70 border border-amber-400/40 text-amber-300 text-xs font-cinzel mb-3">
              {queen.sigil} {queen.queenClass}
            </div>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-white">
              {queen.name}
            </h3>
            <p className="text-sm font-cinzel text-purple-200 mt-1">
              {queen.royalTitle}
            </p>
          </div>

          {/* Golden Seal Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/60" />
            <Crown className="w-5 h-5 text-amber-400" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          {/* Historical Chronicle Paragraph */}
          <div className="p-5 rounded-2xl bg-[#090f2b] border border-blue-800/40 space-y-2.5 shadow-md">
            <div className="text-xs font-cinzel uppercase tracking-wider text-amber-400 font-bold">
              Chronicle of Her Reign
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif">
              {queen.backstory?.originStory || queen.loreChronicle}
            </p>
          </div>

          {/* 6-Part Backstory Highlights if available */}
          {queen.backstory && (
            <div className="space-y-3">
              <div className="text-xs font-cinzel uppercase tracking-wider text-amber-400 font-bold">
                Imperial Backstory Register
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#080d26] border border-blue-900/50">
                  <span className="font-cinzel text-amber-300 block font-bold mb-1">👑 Kingdom & Royal Family</span>
                  <p className="text-slate-300 font-serif leading-relaxed">{queen.backstory.kingdomAndFamily}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d26] border border-blue-900/50">
                  <span className="font-cinzel text-purple-300 block font-bold mb-1">✨ Magical Powers</span>
                  <p className="text-slate-300 font-serif leading-relaxed">{queen.backstory.magicalPowers}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d26] border border-blue-900/50">
                  <span className="font-cinzel text-red-300 block font-bold mb-1">⚔️ Greatest Enemy</span>
                  <p className="text-slate-300 font-serif leading-relaxed">{queen.backstory.greatestEnemy}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d26] border border-blue-900/50">
                  <span className="font-cinzel text-yellow-300 block font-bold mb-1">🏆 Biggest Achievement</span>
                  <p className="text-slate-300 font-serif leading-relaxed">{queen.backstory.biggestAchievement}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d26] border border-blue-900/50 sm:col-span-2">
                  <span className="font-cinzel text-cyan-300 block font-bold mb-1">🎯 Royal Mission</span>
                  <p className="text-slate-300 font-serif leading-relaxed">{queen.backstory.royalMission}</p>
                </div>
              </div>
            </div>
          )}

          {/* Realm & Relic Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
              <span className="text-amber-400 uppercase tracking-wider block font-cinzel mb-1">
                Imperial Seat
              </span>
              <span className="text-white font-medium text-sm block">
                {queen.kingdom}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
              <span className="text-amber-400 uppercase tracking-wider block font-cinzel mb-1">
                Ancient Relic
              </span>
              <span className="text-amber-300 font-medium text-sm block">
                {queen.relic}
              </span>
            </div>
          </div>

          {/* Signature Costume Regalia */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-purple-950/40 border border-blue-500/40">
            <span className="text-sky-300 uppercase tracking-wider block font-cinzel text-xs mb-2.5 font-bold">
              Signature Royal Costume Regalia
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-light">
              <div>• <strong>Coat:</strong> White fitted royal coat with silver filigree</div>
              <div>• <strong>Sash:</strong> Royal blue diagonal sash</div>
              <div>• <strong>Cape:</strong> Long flowing royal blue cape</div>
              <div>• <strong>Chains:</strong> Silver chains & moon shoulder ornament</div>
              <div className="sm:col-span-2">• <strong>Legwear:</strong> White tailored trousers & knee-high white boots</div>
            </div>
          </div>

          {/* Power In-Depth */}
          <div className="p-4 rounded-2xl bg-[#090f2b] border border-blue-900/40">
            <span className="text-amber-400 uppercase tracking-wider block font-cinzel text-xs mb-1 font-bold">
              Arcane Manifestation: {queen.magicalPower}
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              {queen.powerDescription}
            </p>
          </div>

          {/* Proclamation Quote */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0d163e] to-[#0a0f2b] border border-amber-400/40 text-center shadow-lg">
            <div className="text-[11px] font-cinzel text-amber-300 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Recorded Sovereign Proclamation</span>
            </div>
            <blockquote className="text-sm sm:text-base font-serif italic text-amber-200 leading-relaxed">
              {queen.royalDecree}
            </blockquote>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-blue-900/40 bg-[#050818] flex justify-end">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 border border-blue-700 text-slate-200 hover:text-white text-xs font-cinzel font-semibold transition-colors cursor-pointer"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
};
