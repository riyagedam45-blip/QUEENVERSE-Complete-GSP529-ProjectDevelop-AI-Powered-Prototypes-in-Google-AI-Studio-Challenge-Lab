import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Google Gen AI client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Procedural fallback for backstory generation if API key is not configured or rate-limited
function generateProceduralBackstory(queen: {
  name: string;
  royalTitle: string;
  queenClass: string;
  kingdom: string;
  magicalPower: string;
  relic: string;
  royalDecree: string;
}) {
  const { name, royalTitle, queenClass, kingdom, magicalPower, relic } = queen;

  const enemyMap: Record<string, string[]> = {
    'Fire Queen': [
      'Malakor the Frost-Bringer, warlord of the Frozen Abyss who seeks to quench all primordial heat.',
      'Ignis-Bane Vex, a renegade pyromancer wielding corrupted void-fire that burns without dying.',
      'The Obsidian Eclipse Coven, shadow sorcerers seeking to snuff out the world\'s twin suns.',
    ],
    'Ice Queen': [
      'Ignis the Ash-Tyrant, high zealot of the Molten Rift seeking to boil away the sacred polar glaciers.',
      'The Crimson Sun Vanguard, desert raiders wielding scorched solar blades that shatter permafrost.',
      'Boreas the Traitor, former grand sentinel who sold glacier secrets to the Nether Caldera.',
    ],
    'Moon Queen': [
      'Kharon the Solar Usurper, an archon of blinding light who declared war on the sacred night sky.',
      'The Void Devourer, an astral entity that feeds on moonbeams and celestial alignments.',
      'Lady Vespera the Heretic, banished stargazer who forged cursed false eclipses.',
    ],
    'Dragon Queen': [
      'Vorgath the Wyrm-Slayer, supreme commander of the Iron Titan Legions wielding titan-bane harpoons.',
      'The Black Pyre Brood, renegade rogue drakes corrupted by subterranean necrotic venom.',
      'Arch-Inquisitor Valen, who seeks to enslave all sky drakes into mechanized war engines.',
    ],
    'Warrior Queen': [
      'Draeven the Iron Sovereign, brutal usurper who razed the outer ramparts with cursed siege alchemy.',
      'The Shadow Vanguard Cabal, assassins sworn to topple royal chivalry with poison and deceit.',
      'Gorgon-Lord Vane, an immortal warlord commanding an unyielding horde of petrified soldiers.',
    ],
    'Crystal Queen': [
      'Kragmor the Earth-Crusher, subterranean titan seeking to pulverize the sacred geode spires for gravel.',
      'The Fractured Opal Coven, dark geomancers who corrupt crystalline harmonic resonance into sonic blades.',
      'Malice of the Deep Chasm, a primordial entity of absolute darkness that devours iridescent light.',
    ],
  };

  const achievementMap: Record<string, string[]> = {
    'Fire Queen': [
      `Single-handedly turned the tide at the Siege of the Sun-Gate by erupting a protective magma moat that saved 40,000 citizens.`,
      `Resurrected the sacred Hearth of Pyroth after an icy blight threatened to starve the northern dominions.`,
      `Tamed the Primordial Salamander Brood and forged the sacred Solar Concordat without spilling a single drop of blood.`,
    ],
    'Ice Queen': [
      `Froze an advancing volcanic tsunami solid mid-crest, transforming a disaster into the shimmering Crystal Fjord.`,
      `Created the Grand Permafrost Vaults, preserving rare celestial flora and healing herbs across four brutal famines.`,
      `Defeated the Fire-Drake Broodmother in single combat atop the summit of Frostfang using only her frozen rapier.`,
    ],
    'Moon Queen': [
      `Realignment of the Lunar Tide Wells, curing a thousand-year drought across seven coastal vassal states.`,
      `Banished the Astral Void Fiends back through the Great Eclipse Rift using the sacred Crescent Scepter.`,
      `Deciphered the Celestial Starlight Tapestry to foresee and peacefully neutralize an imperial coup.`,
    ],
    'Dragon Queen': [
      `Bonded with Vermithrax the Elder Dragon at age sixteen, ending four centuries of devastating wyrm wars.`,
      `Formed the Imperial Dragon-Rider Vanguard, liberating the southern provinces from an iron-fisted warlord.`,
      `Forged the Great Draconic Lex, establishing an enduring era of chivalric harmony between mankind and elder wyrms.`,
    ],
    'Warrior Queen': [
      `Held the narrow pass at the Obsidian Bastion against an invading army of ten thousand with only eighty knights.`,
      `Unified the squabbling feudal warlords under the Lioncrest banner, initiating thirty years of unbroken prosperity.`,
      `Slew the Bloodthorn Behemoth with her Damascus broadsword, freeing the iron mining cities from terror.`,
    ],
    'Crystal Queen': [
      `Awakened the slumbering Great Geode Matrix beneath Cristalla, illuminating an entire underground civilization with clean bioluminescence.`,
      `Synthesized an unbreakable diamond barrier during the Great Tectonic Tremor, sheltering thousands of deep-cavern families.`,
      `Discovered the Resonance Frequency of Quartz Healing, neutralizing a devastating subterranean plague.`,
    ],
  };

  const missionMap: Record<string, string> = {
    'Fire Queen': `To ignite the sacred Beacon of Eternal Dawn and unite all scorched realmlands into an unbreakable empire of warmth and justice.`,
    'Ice Queen': `To preserve the ancient memories of the First Era frozen within the Great Glacial Core and defend the silent polar sanctum from corruption.`,
    'Moon Queen': `To restore the balance of celestial tides and guide lost wanderers through the darkest cosmic eclipses into dawn.`,
    'Dragon Queen': `To hatch the legendary Gold Dragon Sovereign Egg and inaugurate the Golden Sky Concordat across all continents.`,
    'Warrior Queen': `To erect an adamantine shield around all defenseless realms and forge an era where honor, not brute force, governs the land.`,
    'Crystal Queen': `To cleanse all fractured, corrupted crystals throughout the subterranean deep and refract universal harmony to the surface world.`,
  };

  const enemies = enemyMap[queenClass] || enemyMap['Moon Queen'];
  const achievements = achievementMap[queenClass] || achievementMap['Moon Queen'];
  const mission = missionMap[queenClass] || missionMap['Moon Queen'];

  return {
    originStory: `Born during the celestial alignment when the stars whispered secrets of the First Sovereigns, ${name} was cradled in the sacred sanctuary of ${kingdom}. From infancy, she displayed an intrinsic bond with the elemental soul of her lineage, learning to master ${magicalPower} while other heirs were still learning courtly etiquette. Guided by her ancestor's legacy and wielding ${relic}, she ascended the throne by sovereign acclamation after passing the trials of the Imperial Coronation.`,
    kingdomAndFamily: `She rules ${kingdom}, a sovereign realm steeped in ancient traditions and majestic architectural marvels. Her royal house traces its lineage through twelve unbroken generations of monarchs, supported by the High Council of Realm Wardens and her loyal royal kin who guard the realm's sacred boundaries.`,
    magicalPowers: `Her primary mastery is ${magicalPower}. She channels raw elemental energies through ${relic}, enabling her to bend ambient frequencies, erect impenetrable barriers, and bestow sovereign blessings upon her realm's champions.`,
    greatestEnemy: enemies[Math.floor(Math.random() * enemies.length)],
    biggestAchievement: achievements[Math.floor(Math.random() * achievements.length)],
    royalMission: mission,
  };
}

// API endpoint to generate Queen's Story
app.post('/api/generate-story', async (req, res) => {
  try {
    const { queen } = req.body;
    if (!queen || !queen.name || !queen.queenClass) {
      return res.status(400).json({ error: 'Missing queen details' });
    }

    // If Gemini client is available, attempt AI generation with gemini-3.8-flash
    if (aiClient) {
      try {
        const prompt = `You are the master chronicler of QUEENVERSE, a rich high-fantasy royal universe.
Generate a creative, epic, and highly detailed fantasy backstory for the following sovereign queen:
- Name: ${queen.name}
- Title: ${queen.royalTitle}
- Class: ${queen.queenClass}
- Kingdom: ${queen.kingdom}
- Signature Power: ${queen.magicalPower} (${queen.powerDescription || ''})
- Imperial Relic: ${queen.relic}
- Royal Decree: ${queen.royalDecree}
- Signature Outfit: White fitted royal coat, royal blue diagonal sash, long flowing blue cape, silver chains and moon shoulder ornament, white trousers, knee-high white boots.

You MUST respond strictly with a valid JSON object (no markdown, no backticks, just raw JSON) containing the following 6 keys:
1. "originStory": A vivid 3-4 sentence chronicle of her birth, awakening of powers, and ascension to the throne.
2. "kingdomAndFamily": A 2-3 sentence overview of her kingdom, royal dynasty lineage, and loyal kin.
3. "magicalPowers": A 2-3 sentence explanation of how she channels her signature magical power and arcane artifacts.
4. "greatestEnemy": A 2 sentence description of her most formidable arch-nemesis or rival faction and why they clash.
5. "biggestAchievement": A 2-3 sentence epic account of her greatest conquest, miraculous defense, or historic triumph.
6. "royalMission": A 2 sentence declaration of her overarching sacred quest and imperial destiny.`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            temperature: 0.8,
          },
        });

        const text = response.text?.trim() || '';
        if (text) {
          const parsed = JSON.parse(text);
          return res.json({
            backstory: {
              originStory: parsed.originStory,
              kingdomAndFamily: parsed.kingdomAndFamily,
              magicalPowers: parsed.magicalPowers,
              greatestEnemy: parsed.greatestEnemy,
              biggestAchievement: parsed.biggestAchievement,
              royalMission: parsed.royalMission,
              generatedByAI: true,
            },
          });
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed or timed out, falling back to procedural engine:', geminiError);
      }
    }

    // Procedural fallback
    const backstory = generateProceduralBackstory(queen);
    return res.json({
      backstory: {
        ...backstory,
        generatedByAI: false,
      },
    });
  } catch (err: unknown) {
    console.error('Error generating story:', err);
    return res.status(500).json({ error: 'Failed to generate queen story' });
  }
});

// Setup Vite in development or serve static build in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`QUEENVERSE server listening on port ${port}`);
  });
}

startServer();
