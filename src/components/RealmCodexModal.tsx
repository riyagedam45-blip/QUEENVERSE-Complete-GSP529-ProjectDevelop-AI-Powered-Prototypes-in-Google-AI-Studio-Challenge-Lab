import React from 'react';
import { X, Crown, Scroll, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface RealmCodexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RealmCodexModal: React.FC<RealmCodexModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#070b1e] border-2 border-amber-400/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden gold-card-frame">
        {/* Top Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

        {/* Header */}
        <div className="p-6 border-b border-blue-900/40 flex items-center justify-between bg-[#050818]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-900/30 border border-blue-600/40 text-amber-300">
              <Scroll className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white">
              The Codex of Queenverse
            </h3>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed font-light bg-gradient-to-b from-[#070b1e] to-[#040614]">
          <div className="p-5 rounded-2xl bg-[#090f2b] border border-blue-800/40 shadow-md">
            <h4 className="text-base font-cinzel font-bold text-amber-300 mb-2 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>The Genesis of the Six Thrones</span>
            </h4>
            <p>
              In the First Era before mortal maps were inked, the primordial world trembled in chaos.
              Six celestial avatars descended from the cosmic tapestry to forge eternal balance. Each avatar
              imparted an ancient soul-spark into a chosen queen matriarch, founding the six primordial lineages:
              Fire, Ice, Moon, Dragon, Warrior, and Crystal.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-cinzel font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>The Sovereign Realmlands</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-amber-400 block mb-1">🔥 The Pyroth Domain</span>
                Volcanic peaks, geothermal rivers, and solar towers where Fire Queens harness the living thermal core of the earth.
              </div>

              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-cyan-300 block mb-1">❄️ The Nivalis Permafrost</span>
                Glacial citadels sculpted from ancient blue ice, where Ice Queens guard time-arresting cryo-vaults.
              </div>

              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-purple-300 block mb-1">🌙 The Astral Expanse</span>
                Moonlit tidal bays and celestial observatories where Moon Queens weave gravity and lunar omens.
              </div>

              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-amber-300 block mb-1">🐉 The Drakon Bastion</span>
                Smoking aeries and obsidian canyons where Dragon Queens commune with primordial wyrms and command the skies.
              </div>

              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-yellow-400 block mb-1">⚔️ The Aegis Dominion</span>
                Impregnable mountain redoubts and iron battlements where Warrior Queens command legendary chivalric hosts.
              </div>

              <div className="p-4 rounded-xl bg-[#090f2b] border border-blue-900/40">
                <span className="font-cinzel font-bold text-fuchsia-400 block mb-1">💎 The Cristalla Geodes</span>
                Illuminated subterranean chambers of prismatic quartz and radiant amethyst, where Crystal Queens bend light and heal stone.
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-purple-950/40 border border-amber-400/40 shadow-md">
            <h4 className="text-base font-cinzel font-bold text-amber-300 mb-1.5 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>The Concordat of the Eternal Queens</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-serif italic leading-relaxed">
              "No realm shall seek the extinction of another; for should any element be extinguished,
              the world itself shall unravel into cosmic void. We rule separate thrones, yet uphold one universe."
            </p>
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
            Close Codex
          </button>
        </div>
      </div>
    </div>
  );
};
