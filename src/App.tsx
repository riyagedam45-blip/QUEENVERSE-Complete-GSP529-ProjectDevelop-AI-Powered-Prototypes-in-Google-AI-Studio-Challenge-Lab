import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Queen, QueenClass, QueenBackstory } from './types/queen';
import { generateQueen } from './data/queenData';
import { playSummonSound, toggleSound, isSoundEnabled } from './utils/audio';
import { fetchQueenBackstory } from './utils/storyGenerator';
import { StarfieldBackdrop } from './components/StarfieldBackdrop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QueenGenerator } from './components/QueenGenerator';
import { RealmsShowcase } from './components/RealmsShowcase';
import { RoyalCourtModal } from './components/RoyalCourtModal';
import { QueenLoreModal } from './components/QueenLoreModal';
import { QueenCardPrintModal } from './components/QueenCardPrintModal';
import { RealmCodexModal } from './components/RealmCodexModal';
import { MyQueensCollection } from './components/MyQueensCollection';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'queenverse_royal_deck';
const LEGACY_STORAGE_KEY = 'queenverse_royal_court';

export default function App() {
  const [currentQueen, setCurrentQueen] = useState<Queen>(() => generateQueen('ALL'));
  const [selectedFilter, setSelectedFilter] = useState<QueenClass | 'ALL'>('ALL');
  const [savedQueens, setSavedQueens] = useState<Queen[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return [];
  });

  const [backstory, setBackstory] = useState<QueenBackstory | null>(null);
  const [isStoryLoading, setIsStoryLoading] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(isSoundEnabled());
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals
  const [isCourtOpen, setIsCourtOpen] = useState(false);
  const [loreQueen, setLoreQueen] = useState<Queen | null>(null);
  const [printQueen, setPrintQueen] = useState<Queen | null>(null);
  const [isCodexOpen, setIsCodexOpen] = useState(false);

  // Show Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Generate Story for a Queen
  const handleGenerateStory = useCallback(async (targetQueen?: Queen) => {
    const q = targetQueen || currentQueen;
    setIsStoryLoading(true);
    try {
      const story = await fetchQueenBackstory(q);
      setBackstory(story);
      setCurrentQueen((prev) => ({
        ...prev,
        backstory: story,
      }));
      showToast(`📜 Royal backstory unveiled for ${q.name}!`);
    } catch (err) {
      console.error(err);
      showToast('Could not weave story');
    } finally {
      setIsStoryLoading(false);
    }
  }, [currentQueen]);

  // Initial story generation on mount
  const hasInitializedStory = useRef(false);
  useEffect(() => {
    if (!hasInitializedStory.current) {
      hasInitializedStory.current = true;
      handleGenerateStory(currentQueen);
    }
  }, [currentQueen, handleGenerateStory]);

  // Generate Queen
  const handleGenerate = useCallback((filterOverride?: QueenClass | 'ALL') => {
    const filterToUse = filterOverride !== undefined ? filterOverride : selectedFilter;
    const newQueen = generateQueen(filterToUse);
    setCurrentQueen(newQueen);
    playSummonSound(newQueen.queenClass);
    // Unveil fresh backstory for new queen
    handleGenerateStory(newQueen);
  }, [selectedFilter, handleGenerateStory]);

  // Save / Unsave Queen in Court
  const handleToggleSave = (queen: Queen) => {
    const queenWithStory = {
      ...queen,
      backstory: backstory || queen.backstory,
    };

    const alreadySaved = savedQueens.some((q) => q.id === queen.id);
    let updated: Queen[];
    if (alreadySaved) {
      updated = savedQueens.filter((q) => q.id !== queen.id);
      showToast(`Removed from Royal Deck`);
    } else {
      updated = [queenWithStory, ...savedQueens];
      showToast(`👑 ${queen.name} added to your Royal Deck!`);
    }
    setSavedQueens(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleRemoveQueen = (id: string) => {
    const updated = savedQueens.filter((q) => q.id !== id);
    setSavedQueens(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
    showToast('Queen removed from Royal Deck');
  };

  const handleClearCourt = () => {
    setSavedQueens([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // Ignore
    }
    showToast('Royal Deck cleared');
  };

  const handleToggleSoundState = () => {
    const nextState = toggleSound();
    setIsSoundOn(nextState);
    showToast(nextState ? 'Royal sound effects enabled' : 'Royal sound muted');
  };

  // Quick summon from Realms Showcase
  const handleSummonClass = (cls: QueenClass) => {
    setSelectedFilter(cls);
    handleGenerate(cls);
    const genSection = document.getElementById('generator');
    if (genSection) {
      genSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut: Space or G to generate queen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (isCourtOpen || loreQueen || printQueen || isCodexOpen) {
        return;
      }
      if (e.code === 'KeyG') {
        e.preventDefault();
        handleGenerate();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGenerate, isCourtOpen, loreQueen, printQueen, isCodexOpen]);

  const isCurrentSaved = savedQueens.some((q) => q.id === currentQueen.id);

  return (
    <div className="min-h-screen bg-[#040612] text-[#f1f3f9] selection:bg-amber-400 selection:text-black bg-midnight-kingdom relative">
      {/* Interactive Celestial Starfield */}
      <StarfieldBackdrop />

      {/* Top Navbar */}
      <Navbar
        onGenerateClick={() => {
          handleGenerate();
          const el = document.getElementById('generator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCourt={() => setIsCourtOpen(true)}
        onOpenCodex={() => setIsCodexOpen(true)}
        savedCount={savedQueens.length}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSoundState}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Landing Hero */}
        <Hero
          onSummonClick={() => {
            handleGenerate();
            const el = document.getElementById('generator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreRealms={() => {
            const el = document.getElementById('realms');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Central Queen Generator with Backstory Card */}
        <QueenGenerator
          currentQueen={currentQueen}
          selectedClassFilter={selectedFilter}
          onSelectClassFilter={(filter) => {
            setSelectedFilter(filter);
            handleGenerate(filter);
          }}
          onGenerate={() => handleGenerate()}
          onSaveQueen={handleToggleSave}
          isSaved={isCurrentSaved}
          onOpenLore={(queen) => setLoreQueen(queen)}
          onOpenPrint={(queen) => setPrintQueen(queen)}
          onSwitchPortraitVariant={(newUrl) => {
            setCurrentQueen((prev) => ({
              ...prev,
              portraitUrl: newUrl,
            }));
          }}
          backstory={backstory}
          isStoryLoading={isStoryLoading}
          onGenerateStory={() => handleGenerateStory()}
        />

        {/* My Queens Collection & Player Cards Deck */}
        <MyQueensCollection
          savedQueens={savedQueens}
          onSelectQueen={(queen) => {
            setCurrentQueen(queen);
            if (queen.backstory) {
              setBackstory(queen.backstory);
            } else {
              handleGenerateStory(queen);
            }
            const el = document.getElementById('generator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onRemoveQueen={handleRemoveQueen}
          onOpenLore={(queen) => setLoreQueen(queen)}
          onScrollToGenerator={() => {
            const el = document.getElementById('generator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onClearDeck={handleClearCourt}
        />

        {/* Six Realms Showcase */}
        <RealmsShowcase onSummonClass={handleSummonClass} />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={scrollToTop}
        onOpenCodex={() => setIsCodexOpen(true)}
        onOpenCourt={() => setIsCourtOpen(true)}
      />

      {/* Modals */}
      <RoyalCourtModal
        isOpen={isCourtOpen}
        onClose={() => setIsCourtOpen(false)}
        savedQueens={savedQueens}
        onSelectQueen={(queen) => {
          setCurrentQueen(queen);
          if (queen.backstory) {
            setBackstory(queen.backstory);
          } else {
            handleGenerateStory(queen);
          }
        }}
        onRemoveQueen={handleRemoveQueen}
        onClearCourt={handleClearCourt}
      />

      <QueenLoreModal
        queen={loreQueen}
        onClose={() => setLoreQueen(null)}
      />

      <QueenCardPrintModal
        queen={printQueen}
        onClose={() => setPrintQueen(null)}
      />

      <RealmCodexModal
        isOpen={isCodexOpen}
        onClose={() => setIsCodexOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#070b1e]/95 border border-amber-400/70 text-amber-300 px-5 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-cinzel font-semibold flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200 glow-royal-gold">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
