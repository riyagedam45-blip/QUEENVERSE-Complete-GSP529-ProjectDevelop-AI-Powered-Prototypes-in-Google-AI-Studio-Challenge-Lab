import React from 'react';
import { X, Crown, Printer, Sparkles } from 'lucide-react';
import { Queen } from '../types/queen';
import { playClickSound } from '../utils/audio';

interface QueenCardPrintModalProps {
  queen: Queen | null;
  onClose: () => void;
}

export const QueenCardPrintModal: React.FC<QueenCardPrintModalProps> = ({ queen, onClose }) => {
  if (!queen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] bg-[#070b1e] border-2 border-amber-400/60 rounded-3xl shadow-2xl flex flex-col overflow-hidden gold-card-frame">
        {/* Top Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

        {/* Actions Bar */}
        <div className="p-4 border-b border-blue-900/40 flex items-center justify-between bg-[#050818]">
          <div className="flex items-center gap-2 text-xs font-cinzel text-amber-300 font-bold">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Royal Heraldry Parchment</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-black text-xs font-cinzel font-bold flex items-center gap-1.5 glow-royal-gold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

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
        </div>

        {/* Printable Parchment Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040716]">
          <div className="border-4 border-amber-400/60 rounded-2xl p-6 sm:p-8 bg-[#090f2b] text-center relative shadow-2xl">
            {/* Corner Filigree Accents */}
            <div className="absolute top-2 left-2 text-amber-400/70 text-xs font-serif">✦</div>
            <div className="absolute top-2 right-2 text-amber-400/70 text-xs font-serif">✦</div>
            <div className="absolute bottom-2 left-2 text-amber-400/70 text-xs font-serif">✦</div>
            <div className="absolute bottom-2 right-2 text-amber-400/70 text-xs font-serif">✦</div>

            <div className="flex items-center justify-center gap-2 text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Imperial Sovereign Register</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white mb-1">
              {queen.name}
            </h2>
            <div className="text-sm font-cinzel text-amber-300 mb-4">
              {queen.royalTitle}
            </div>

            {/* Portrait Thumbnail */}
            <div className="w-40 h-52 mx-auto rounded-xl overflow-hidden border-2 border-amber-400/70 shadow-xl mb-4">
              <img
                src={queen.portraitUrl}
                alt={queen.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Information Grid */}
            <div className="space-y-2 text-xs max-w-sm mx-auto text-left py-2 border-y border-blue-800/40 mb-4">
              <div className="flex justify-between">
                <span className="text-blue-300/80 font-cinzel">Class:</span>
                <span className="text-white font-medium">{queen.sigil} {queen.queenClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300/80 font-cinzel">Kingdom:</span>
                <span className="text-white font-medium">{queen.kingdom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300/80 font-cinzel">Magical Power:</span>
                <span className="text-amber-300 font-medium">{queen.magicalPower}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300/80 font-cinzel">Imperial Relic:</span>
                <span className="text-white font-medium">{queen.relic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300/80 font-cinzel">Signature Outfit:</span>
                <span className="text-sky-300 font-medium">White & Royal Blue Regalia</span>
              </div>
            </div>

            {/* Royal Decree */}
            <blockquote className="text-xs sm:text-sm font-serif italic text-slate-200 max-w-md mx-auto mb-4 leading-relaxed">
              {queen.royalDecree}
            </blockquote>

            <div className="text-[10px] font-cinzel text-blue-300/70 uppercase tracking-widest">
              Summoned in QUEENVERSE · The World of Fantasy Queens
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
