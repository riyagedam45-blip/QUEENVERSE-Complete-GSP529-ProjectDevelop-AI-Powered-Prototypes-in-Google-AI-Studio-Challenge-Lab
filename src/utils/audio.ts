/**
 * Web Audio API synthesizer for regal harp arpeggios, chimes, and spell sounds
 * when generating fantasy queens. Requires no external audio assets.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  return soundEnabled;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a regal chime / harp arpeggio based on queen class
 */
export function playSummonSound(queenClass?: string) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Regal chord frequencies (Pentatonic / Major 9th harmonics)
  let frequencies = [329.63, 440.0, 554.37, 659.25, 880.0]; // E4, A4, C#5, E5, A5
  let waveType: OscillatorType = 'triangle';

  if (queenClass === 'Fire Queen' || queenClass === 'Dragon Queen') {
    frequencies = [293.66, 369.99, 440.0, 587.33, 739.99]; // D4, F#4, A4, D5, F#5
    waveType = 'sawtooth';
  } else if (queenClass === 'Ice Queen' || queenClass === 'Crystal Queen') {
    frequencies = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
    waveType = 'sine';
  } else if (queenClass === 'Moon Queen') {
    frequencies = [349.23, 440.0, 523.25, 698.46, 880.0]; // F4, A4, C5, F5, A5
    waveType = 'sine';
  } else if (queenClass === 'Warrior Queen') {
    frequencies = [220.0, 329.63, 440.0, 554.37, 659.25]; // A3, E4, A4, C#5, E5
    waveType = 'triangle';
  }

  // Master gain
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
  masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
  masterGain.connect(ctx.destination);

  // Arpeggiate notes
  frequencies.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, now + idx * 0.07);

    // Subtle pitch shimmer
    osc.detune.setValueAtTime(Math.sin(idx) * 4, now + idx * 0.07);

    noteGain.gain.setValueAtTime(0.0001, now + idx * 0.07);
    noteGain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.07 + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.8);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(now + idx * 0.07);
    osc.stop(now + idx * 0.07 + 0.9);
  });
}

/**
 * Play gentle click sound for buttons
 */
export function playClickSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, now);
  osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.05);
}
