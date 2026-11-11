import React from 'react';
import { X, Crown, Trash2, ExternalLink, Bookmark, Sparkles } from 'lucide-react';
import { Queen } from '../types/queen';
import { playClickSound } from '../utils/audio';

interface RoyalCourtModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQueens: Queen[];
  onSelectQueen: (queen: Queen) => void;
  onRemoveQueen: (id: string) => void;
  onClearCourt: () => void;
}

export const RoyalCourtModal: React.FC<RoyalCourtModalProps> = ({
  isOpen,
  onClose,
  savedQueens,
  onSelectQueen,
  onRemoveQueen,
  onClearCourt,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#070b1e] border-2 border-amber-400/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden gold-card-frame">
        {/* Top Gold & Blue Accent Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

        {/* Modal Header */}
        <div className="p-6 border-b border-blue-900/40 flex items-center justify-between bg-[#050818]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400/20 to-blue-600/20 border border-amber-400/40 text-amber-300">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
                The Royal Court
              </h3>
              <p className="text-xs text-blue-200/80 font-cinzel">
                {savedQueens.length} {savedQueens.length === 1 ? 'Sovereign' : 'Sovereigns'} Enthroned in Your Imperial Dynasty
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedQueens.length > 0 && (
              <button
                onClick={() => {
                  playClickSound();
                  if (confirm('Are you sure you wish to dissolve the Royal Court?')) {
                    onClearCourt();
                  }
                }}
                className="px-3.5 py-2 rounded-xl border border-red-500/40 hover:bg-red-500/20 text-red-300 text-xs font-cinzel flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Dissolve Court</span>
              </button>
            )}

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

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-[#070b1e] to-[#040614]">
          {savedQueens.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-950/50 border border-blue-800/50 flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-cinzel font-bold text-white">
                Your Throne Room Awaits
              </h4>
              <p className="text-sm text-slate-300/70 max-w-sm mx-auto mt-1 mb-6 font-light">
                No queens have yet been saved in your royal deck. Generate sovereigns and click "Save to My Royal Deck" to collect them here.
              </p>
              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 text-black text-xs font-cinzel font-bold glow-royal-gold cursor-pointer"
              >
                Return to Generator
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedQueens.map((queen) => (
                <div
                  key={queen.id}
                  className="bg-gradient-to-b from-[#0b102b] to-[#060a1c] border border-blue-800/40 hover:border-amber-400/60 rounded-2xl p-4 flex flex-col justify-between transition-all group shadow-md"
                >
                  <div>
                    {/* Portrait & Class Badge */}
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-amber-400/40 shadow-md">
                      <img
                        src={queen.portraitUrl}
                        alt={queen.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 text-[11px] font-cinzel font-bold text-amber-300 bg-[#070b1e]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-400/40">
                        {queen.sigil} {queen.queenClass}
                      </div>
                    </div>

                    <h4 className="text-base font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {queen.name}
                    </h4>
                    <p className="text-xs font-cinzel text-purple-200/90 line-clamp-1 mt-0.5">
                      {queen.royalTitle}
                    </p>

                    <div className="text-[11px] text-slate-300/80 mt-2.5 space-y-1 font-light">
                      <div className="line-clamp-1">
                        <span className="text-amber-400 font-cinzel">Kingdom:</span> {queen.kingdom}
                      </div>
                      <div className="line-clamp-1">
                        <span className="text-amber-400 font-cinzel">Power:</span> {queen.magicalPower}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-blue-900/40">
                    <button
                      onClick={() => {
                        playClickSound();
                        onSelectQueen(queen);
                        onClose();
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-blue-950/80 hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-500 hover:text-black text-amber-300 border border-blue-700/60 text-xs font-cinzel font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Ascend Throne</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => {
                        playClickSound();
                        onRemoveQueen(queen.id);
                      }}
                      title="Remove from court"
                      className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
