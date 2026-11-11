export type QueenClass =
  | 'Fire Queen'
  | 'Ice Queen'
  | 'Moon Queen'
  | 'Dragon Queen'
  | 'Warrior Queen'
  | 'Crystal Queen';

export interface QueenStats {
  health: number;            // 0 - 100
  mana: number;              // 0 - 100
  strength: number;          // 0 - 100
  intelligence: number;      // 0 - 100
  arcanePotency?: number;
  royalInfluence?: number;
  battleProwess?: number;
  elementalAffinity?: number;
}

export interface SignatureCostume {
  coat: string;
  sash: string;
  cape: string;
  shoulderOrnament: string;
  trousersAndBoots: string;
  description: string;
}

export interface QueenBackstory {
  originStory: string;
  kingdomAndFamily: string;
  magicalPowers: string;
  greatestEnemy: string;
  biggestAchievement: string;
  royalMission: string;
  generatedByAI?: boolean;
}

export interface Queen {
  id: string;
  name: string;
  royalTitle: string;
  queenClass: QueenClass;
  kingdom: string;
  magicalPower: string;
  specialMagicalAbility: string;
  powerDescription: string;
  relic: string;
  royalDecree: string;
  loreChronicle: string;
  backstory?: QueenBackstory;
  stats: QueenStats;
  portraitUrl: string;
  portraitVariants?: string[];
  sigil: string;
  signatureCostume: SignatureCostume;
  elementColor: {
    primary: string;
    secondary: string;
    border: string;
    glow: string;
    text: string;
  };
  summonedAt: number;
}
