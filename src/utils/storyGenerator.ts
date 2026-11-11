import { Queen, QueenBackstory } from '../types/queen';

/**
 * Procedural fallback generator if network or server is unreachable
 */
function createFallbackBackstory(queen: Queen): QueenBackstory {
  const { name, royalTitle, queenClass, kingdom, magicalPower, relic } = queen;

  const enemyMap: Record<string, string> = {
    'Fire Queen': 'Malakor the Frost-Bringer, an archon of the Abyssal Ice seeking to freeze the core of Pyroth forever.',
    'Ice Queen': 'Ignis the Ash-Tyrant, high zealot of the Molten Rift bent on vaporizing the sacred polar glaciers.',
    'Moon Queen': 'Kharon the Solar Usurper, an archon of blinding light who declared war against the sacred midnight sky.',
    'Dragon Queen': 'Vorgath the Wyrm-Slayer, supreme general of the Iron Titan Legions wielding titan-bane harpoons.',
    'Warrior Queen': 'Draeven the Iron Sovereign, a tyrannical usurper commanding an immortal legion of petrified soldiers.',
    'Crystal Queen': 'Kragmor the Earth-Crusher, a subterranean colossus seeking to shatter the sacred quartz geode spires.',
  };

  const achievementMap: Record<string, string> = {
    'Fire Queen': `Erupted a protective magma barrier during the Great Sun-Gate Siege, saving forty thousand citizens without a casualty.`,
    'Ice Queen': `Froze an advancing volcanic tsunami solid mid-crest, transforming a cataclysm into the permanent Crystal Fjord sanctuary.`,
    'Moon Queen': `Realigned the Sacred Lunar Tide Wells with her crescent scepter, ending a thousand-year drought across coastal kingdoms.`,
    'Dragon Queen': `Bonded with the elder wyrm Vermithrax at age sixteen, establishing the Great Draconic Lex of mutual chivalry.`,
    'Warrior Queen': `Defended the high ramparts of the Obsidian Bastion against an invading host of ten thousand with only eighty vanguard knights.`,
    'Crystal Queen': `Awakened the slumbering Great Geode Matrix beneath Cristalla, illuminating an entire underground empire with healing bioluminescence.`,
  };

  const missionMap: Record<string, string> = {
    'Fire Queen': `To ignite the sacred Beacon of Eternal Dawn and unite all scorched borderlands into an empire of sovereign warmth and justice.`,
    'Ice Queen': `To preserve the ancient memories of the First Era frozen within the Glacial Core and defend the silent polar sanctum from dark intrusion.`,
    'Moon Queen': `To restore the balance of celestial tides and guide lost wanderers through the darkest cosmic eclipses into starlight.`,
    'Dragon Queen': `To hatch the legendary Gold Dragon Sovereign Egg and inaugurate the Golden Sky Concordat across all continents.`,
    'Warrior Queen': `To erect an adamantine shield around all defenseless realms and forge an era where honor, not brute force, governs the land.`,
    'Crystal Queen': `To cleanse all fractured, corrupted crystals throughout the subterranean deep and refract universal harmony to the surface world.`,
  };

  return {
    originStory: `Born during the celestial alignment when the stars whispered secrets of the First Sovereigns, ${name} was cradled in the sacred sanctuary of ${kingdom}. From infancy, she displayed an intrinsic bond with the elemental soul of her lineage, learning to master ${magicalPower} while other heirs were still learning courtly etiquette. Guided by her ancestor's legacy and wielding ${relic}, she ascended the throne by sovereign acclamation after passing the trials of the Imperial Coronation.`,
    kingdomAndFamily: `She rules ${kingdom}, a sovereign realm steeped in ancient traditions and majestic architectural marvels. Her royal house traces its lineage through twelve unbroken generations of monarchs, supported by the High Council of Realm Wardens and her loyal royal kin who guard the realm's sacred boundaries.`,
    magicalPowers: `Her primary mastery is ${magicalPower}. She channels raw elemental energies through ${relic}, enabling her to bend ambient frequencies, erect impenetrable barriers, and bestow sovereign blessings upon her realm's champions.`,
    greatestEnemy: enemyMap[queenClass] || enemyMap['Moon Queen'],
    biggestAchievement: achievementMap[queenClass] || achievementMap['Moon Queen'],
    royalMission: missionMap[queenClass] || missionMap['Moon Queen'],
    generatedByAI: false,
  };
}

/**
 * Fetch AI-generated backstory from server API, falling back to rich procedural generator
 */
export async function fetchQueenBackstory(queen: Queen): Promise<QueenBackstory> {
  try {
    const response = await fetch('/api/generate-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ queen }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.backstory) {
        return data.backstory;
      }
    }
  } catch (err) {
    console.warn('API call failed, generating procedural backstory:', err);
  }

  // Graceful fallback
  return createFallbackBackstory(queen);
}
