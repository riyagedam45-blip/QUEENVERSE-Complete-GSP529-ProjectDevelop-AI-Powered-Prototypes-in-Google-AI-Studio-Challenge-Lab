import React, { useState } from 'react';
import {
  Crown,
  Sparkles,
  RefreshCw,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  BookOpen,
  Printer,
  Shield,
  Zap,
  MapPin,
  Flame,
  Snowflake,
  Moon,
  Gem,
  Swords,
  Maximize2,
  X,
  Layers,
  Scroll
} from 'lucide-react';
import { Queen, QueenClass, QueenBackstory } from '../types/queen';
import { QUEEN_CLASSES, CLASS_METADATA } from '../data/queenData';
import { playClickSound } from '../utils/audio';
import { RoyalStoryCard } from './RoyalStoryCard';
import { QueenStatsBars } from './QueenStatsBars';

interface QueenGeneratorProps {
  currentQueen: Queen;
  selectedClassFilter: QueenClass | 'ALL';
  onSelectClassFilter: (cls: QueenClass | 'ALL') => void;
  onGenerate: () => void;
  onSaveQueen: (queen: Queen) => void;
  isSaved: boolean;
  onOpenLore: (queen: Queen) => void;
  onOpenPrint: (queen: Queen) => void;
  onSwitchPortraitVariant?: (newUrl: string) => void;
  backstory: QueenBackstory | null;
  isStoryLoading: boolean;
  onGenerateStory: () => void;
}

const CLASS_ICONS: Record<QueenClass, React.ReactNode> = {
  'Fire Queen': <Flame className="w-3.5 h-3.5 text-amber-400" />,
  'Ice Queen': <Snowflake className="w-3.5 h-3.5 text-cyan-300" />,
  'Moon Queen': <Moon className="w-3.5 h-3.5 text-purple-300" />,
  'Dragon Queen': <Crown className="w-3.5 h-3.5 text-amber-400" />,
  'Warrior Queen': <Swords className="w-3.5 h-3.5 text-yellow-400" />,
  'Crystal Queen': <Gem className="w-3.5 h-3.5 text-fuchsia-400" />,
};

export const QueenGenerator: React.FC<QueenGeneratorProps> = ({
  currentQueen,
  selectedClassFilter,
  onSelectClassFilter,
  onGenerate,
  onSaveQueen,
  isSaved,
  onOpenLore,
  onOpenPrint,
  onSwitchPortraitVariant,
  backstory,
  isStoryLoading,
  onGenerateStory,
}) => {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const handleGenerateClick = () => {
    setIsAnimating(true);
    onGenerate();
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const handleCopyDecree = () => {
    playClickSound();
    const textToCopy = `👑 QUEENVERSE ROYAL PROCLAMATION 👑\n` +
      `Name: ${currentQueen.name}\n` +
      `Title: ${currentQueen.royalTitle}\n` +
      `Class: ${currentQueen.queenClass}\n` +
      `Kingdom: ${currentQueen.kingdom}\n` +
      `Magical Power: ${currentQueen.magicalPower}\n` +
      `Signature Outfit: White fitted royal coat, royal blue sash, flowing blue cape, silver moon chains, white trousers & boots\n` +
      `Ancient Relic: ${currentQueen.relic}\n` +
      `Royal Decree: ${currentQueen.royalDecree}\n` +
      `Summoned in QUEENVERSE – The World of Fantasy Queens`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const cycleVariant = () => {
    playClickSound();
    if (!currentQueen.portraitVariants || currentQueen.portraitVariants.length <= 1) return;
    const currentIdx = currentQueen.portraitVariants.indexOf(currentQueen.portraitUrl);
    const nextIdx = (currentIdx + 1) % currentQueen.portraitVariants.length;
    if (onSwitchPortraitVariant) {
      onSwitchPortraitVariant(currentQueen.portraitVariants[nextIdx]);
    }
  };

  const scrollToStoryCard = () => {
    playClickSound();
    onGenerateStory();
    const el = document.getElementById('queen-story-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="generator" className="py-12 md:py-24 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-amber-400/30 text-xs font-cinzel tracking-widest text-amber-300 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Imperial Coronation Throne</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white tracking-tight">
            Fantasy Queen Generator
          </h2>
          <p className="text-slate-300/80 text-sm sm:text-base mt-2 font-light">
            Channel the primordial thrones of the Six Realms to summon your sovereign and unveil her full AI backstory.
          </p>
        </div>

        {/* Filter Bar: Segmented Tab Controls with Glowing Active State */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-[#090e24]/90 border border-blue-800/40 rounded-2xl max-w-4xl mx-auto mb-10 shadow-xl shadow-black/60 backdrop-blur-md">
          <button
            onClick={() => {
              playClickSound();
              onSelectClassFilter('ALL');
            }}
            className={`px-4 py-2 text-xs sm:text-sm font-cinzel font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
              selectedClassFilter === 'ALL'
                ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-black glow-royal-gold font-bold'
                : 'text-slate-300 hover:text-amber-300 hover:bg-blue-950/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Realms</span>
          </button>

          {QUEEN_CLASSES.map((cls) => {
            const isActive = selectedClassFilter === cls;
            return (
              <button
                key={cls}
                onClick={() => {
                  playClickSound();
                  onSelectClassFilter(cls);
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-cinzel font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-amber-300 border border-amber-400/70 shadow-md shadow-blue-900/40 glow-royal-blue'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-blue-950/40'
                }`}
              >
                {CLASS_ICONS[cls]}
                <span>{cls}</span>
              </button>
            );
          })}
        </div>

        {/* Large Glowing Generate Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleGenerateClick}
            className="group relative px-9 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-cinzel font-bold tracking-widest text-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 rounded-2xl glow-royal-gold active:scale-95 transition-all flex items-center gap-3.5 cursor-pointer overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:animate-shimmer pointer-events-none" />

            <div className="p-1 rounded-lg bg-black/10">
              <Crown className="w-6 h-6 text-black group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span>Generate Queen</span>
            <Sparkles className="w-5 h-5 text-purple-950 animate-pulse" />
          </button>
        </div>

        {/* Ultra-Luxurious Queen Profile Card */}
        <div
          className={`relative bg-gradient-to-b from-[#0a0f29] to-[#050818] border-2 border-amber-400/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isAnimating ? 'opacity-70 scale-[0.99]' : 'opacity-100 scale-100'
          } gold-card-frame`}
        >
          {/* Top Royal Gold & Blue Border Ribbon */}
          <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-amber-400 to-purple-600" />

          {/* Corner Heraldic Decorative Flourishes */}
          <div className="absolute top-3 left-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
          <div className="absolute top-3 right-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
          <div className="absolute bottom-3 left-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>
          <div className="absolute bottom-3 right-3 text-amber-400/50 text-xs font-serif pointer-events-none">✦</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left Column: Portrait & Regal Presentation */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-gradient-to-b from-blue-950/60 to-purple-950/60 group">
                <img
                  src={currentQueen.portraitUrl}
                  alt={currentQueen.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Scrim overlay for high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040614]/90 via-[#040614]/20 to-transparent pointer-events-none" />

                {/* Zoom button on top-right */}
                <button
                  onClick={() => {
                    playClickSound();
                    setIsZoomOpen(true);
                  }}
                  title="Inspect Full-Length Portrait"
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-amber-300 border border-amber-400/50 backdrop-blur-md transition-all cursor-pointer glow-royal-gold"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Pose Variant Switcher */}
                {currentQueen.portraitVariants && currentQueen.portraitVariants.length > 1 && (
                  <button
                    onClick={cycleVariant}
                    title="Switch Signature Portrait Pose"
                    className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/95 text-slate-200 hover:text-amber-300 border border-blue-500/50 backdrop-blur-md text-xs font-cinzel font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pose Variant</span>
                  </button>
                )}

                {/* Class & Regalia Overlay Banner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-cinzel tracking-wider text-amber-300 bg-[#070b1e]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-400/40 shadow-lg">
                  <span className="flex items-center gap-2">
                    <span className="text-base">{currentQueen.sigil}</span>
                    <span className="font-bold">{currentQueen.queenClass}</span>
                  </span>
                  <span className="text-sky-300 text-[11px] font-semibold">White & Royal Blue Uniform</span>
                </div>
              </div>

              {/* Sub-portrait action controls */}
              <div className="w-full max-w-[360px] flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => {
                    playClickSound();
                    onSaveQueen(currentQueen);
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-cinzel font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSaved
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 glow-royal-gold shadow-lg shadow-amber-500/10'
                      : 'bg-[#0a0f2c]/80 border-blue-800/60 text-slate-200 hover:text-amber-300 hover:border-amber-400/50'
                  }`}
                  title={isSaved ? "Queen saved in your Royal Deck" : "Save this Queen to your Royal Deck"}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4 text-blue-300" />}
                  <span>{isSaved ? 'Saved to My Royal Deck' : 'Save to My Royal Deck'}</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    onOpenPrint(currentQueen);
                  }}
                  className="py-2.5 px-3 rounded-xl border border-blue-800/60 bg-[#0a0f2c]/70 hover:bg-blue-900/40 text-slate-200 hover:text-amber-300 hover:border-amber-400/50 text-xs sm:text-sm font-cinzel font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  title="Print Royal Parchment"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Parchment</span>
                </button>
              </div>

              {/* Signature Costume Showcase Accordion Box */}
              <div className="w-full max-w-[360px] mt-4 p-4 rounded-2xl bg-gradient-to-b from-[#0e163b] to-[#070b1e] border border-blue-500/40 text-xs shadow-lg shadow-black/40">
                <div className="flex items-center justify-between mb-3 border-b border-blue-900/40 pb-2">
                  <div className="flex items-center gap-2 text-sky-300 font-cinzel font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Signature Royal Uniform</span>
                  </div>
                  <span className="text-[10px] text-amber-400/90 font-mono">CANONICAL</span>
                </div>

                <ul className="space-y-2 text-[11px] text-slate-300 font-light">
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-white ring-2 ring-blue-500/50 shrink-0" />
                    <span><strong>Coat:</strong> White fitted royal coat with silver filigree</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 ring-2 ring-blue-300/50 shrink-0" />
                    <span><strong>Sash:</strong> Royal blue diagonal chest sash</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-700 ring-2 ring-purple-400/50 shrink-0" />
                    <span><strong>Cape:</strong> Long flowing royal blue velvet cape</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300 ring-2 ring-amber-300/50 shrink-0" />
                    <span><strong>Chains:</strong> Silver chains & moon shoulder ornament</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-white ring-2 ring-slate-400/50 shrink-0" />
                    <span><strong>Attire:</strong> White trousers & knee-high white boots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Queen Identity, Kingdom, Power & Regalia */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Queen's Name & Royal Title */}
              <div>
                <div className="flex items-center gap-2 text-xs font-cinzel text-amber-400/90 tracking-widest uppercase mb-1">
                  <span>{currentQueen.queenClass}</span>
                  <span aria-hidden="true" className="text-blue-400">✦</span>
                  <span>Sovereign of the Realm</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-white tracking-tight leading-tight">
                  <span className="text-gold-gradient drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
                    {currentQueen.name}
                  </span>
                </h3>

                <div className="text-lg sm:text-xl font-cinzel text-purple-200 font-medium mt-1">
                  {currentQueen.royalTitle}
                </div>
              </div>

              {/* Kingdom and Magical Power Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kingdom */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0c1336]/80 to-[#070b1e]/80 border border-blue-700/40 hover:border-amber-400/40 transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-wider text-amber-400/90 mb-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Kingdom</span>
                  </div>
                  <div className="text-base sm:text-lg font-cinzel font-bold text-white">
                    {currentQueen.kingdom}
                  </div>
                  <div className="text-xs text-slate-300/70 mt-1 font-light">
                    Seat of imperial governance & sovereign council
                  </div>
                </div>

                {/* Magical Power */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0c1336]/80 to-[#070b1e]/80 border border-blue-700/40 hover:border-amber-400/40 transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-wider text-amber-400/90 mb-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Magical Power</span>
                  </div>
                  <div className="text-base sm:text-lg font-cinzel font-bold text-amber-300">
                    {currentQueen.magicalPower}
                  </div>
                  <div className="text-xs text-slate-300/70 mt-1 font-light">
                    {currentQueen.powerDescription}
                  </div>
                </div>
              </div>

              {/* Ancient Relic & Royal Decree */}
              <div className="space-y-4">
                {/* Relic */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#070c22]/70 border border-blue-900/50">
                  <Crown className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-cinzel uppercase tracking-wider text-amber-400/80">
                      Imperial Relic
                    </div>
                    <div className="text-sm font-medium text-slate-200">
                      {currentQueen.relic}
                    </div>
                  </div>
                </div>

                {/* Royal Decree */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 via-blue-950/40 to-black/40 border border-amber-400/30 relative">
                  <div className="text-xs font-cinzel text-amber-300 tracking-widest uppercase mb-1 flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 text-amber-400" />
                    <span>Royal Proclamation</span>
                  </div>
                  <p className="text-sm sm:text-base font-serif italic text-slate-100 leading-relaxed">
                    {currentQueen.royalDecree}
                  </p>
                </div>
              </div>

              {/* Interactive Queen Player Statistics & Special Ability */}
              <QueenStatsBars
                stats={currentQueen.stats}
                specialMagicalAbility={currentQueen.specialMagicalAbility || currentQueen.magicalPower}
                abilityDescription={currentQueen.powerDescription}
              />

              {/* Card Footer Actions including Generate Queen's Story */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-blue-900/40">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={scrollToStoryCard}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 hover:from-blue-800 hover:to-purple-800 border border-blue-400/50 hover:border-amber-400 text-amber-300 text-xs font-cinzel font-bold flex items-center gap-2 glow-royal-blue active:scale-95 transition-all cursor-pointer"
                  >
                    <Scroll className="w-3.5 h-3.5 text-amber-400" />
                    <span>Generate Queen's Story</span>
                  </button>

                  <button
                    onClick={handleCopyDecree}
                    className="px-3.5 py-2 rounded-xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-800/50 text-slate-200 hover:text-amber-300 text-xs font-cinzel flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Decree'}</span>
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      onOpenLore(currentQueen);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-800/50 text-slate-200 hover:text-amber-300 text-xs font-cinzel flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Chronicle</span>
                  </button>
                </div>

                <button
                  onClick={handleGenerateClick}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-200 hover:to-yellow-300 text-black text-xs font-cinzel font-bold flex items-center gap-2 glow-royal-gold active:scale-95 transition-all cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
                  <span>Generate Another</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Attractive Royal Story Card */}
        <div id="queen-story-card" className="scroll-mt-24">
          <RoyalStoryCard
            queen={currentQueen}
            backstory={backstory}
            isLoading={isStoryLoading}
            onGenerateStory={onGenerateStory}
          />
        </div>
      </div>

      {/* Lightbox Fullscreen Portrait Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl max-h-[92vh] flex flex-col items-center">
            <button
              onClick={() => {
                playClickSound();
                setIsZoomOpen(false);
              }}
              className="absolute -top-12 right-0 p-2 text-white hover:text-amber-300 rounded-full bg-blue-950/80 border border-amber-400/50 transition-colors cursor-pointer glow-royal-gold"
              title="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl gold-card-frame">
              <img
                src={currentQueen.portraitUrl}
                alt={currentQueen.name}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <div className="text-lg font-cinzel font-bold text-amber-300">
                {currentQueen.name} · {currentQueen.royalTitle}
              </div>
              <div className="text-xs text-sky-300 mt-1">
                Signature White Fitted Royal Coat & Royal Blue Diagonal Sash
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
