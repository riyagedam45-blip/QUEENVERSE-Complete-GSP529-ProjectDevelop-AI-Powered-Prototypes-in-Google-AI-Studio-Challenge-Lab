import { Queen, QueenClass } from '../types/queen';

export const QUEEN_CLASSES: QueenClass[] = [
  'Fire Queen',
  'Ice Queen',
  'Moon Queen',
  'Dragon Queen',
  'Warrior Queen',
  'Crystal Queen',
];

export const SIGNATURE_COSTUME_SPEC = {
  coat: 'White fitted royal coat with silver filigree buttons and tailored cuffs',
  sash: 'Royal blue diagonal sash draped across chest from shoulder to hip',
  cape: 'Long flowing royal blue velvet cape cascading down the back',
  shoulderOrnament: 'Silver chains and crescent moon shoulder ornament on epaulet',
  trousersAndBoots: 'Tailored white trousers and knee-high white leather boots',
  description: 'Signature White & Royal Blue Imperial Regalia',
};

export const CLASS_METADATA: Record<QueenClass, {
  portraitUrl: string;
  portraitVariants: string[];
  sigil: string;
  themeDescription: string;
  elementColor: {
    primary: string;
    secondary: string;
    border: string;
    glow: string;
    text: string;
  };
}> = {
  'Fire Queen': {
    portraitUrl: '/src/assets/images/queen_fire_signature_1794390012962.jpg',
    portraitVariants: [
      '/src/assets/images/queen_fire_signature_1794390012962.jpg',
      '/src/assets/images/queen_fire_signature_v2_1794390040258.jpg',
    ],
    sigil: '🔥',
    themeDescription: 'Ruler of eternal embers, solar flares, and volcanic resurgence.',
    elementColor: {
      primary: '#dc2626',
      secondary: '#f97316',
      border: 'border-red-500/50',
      glow: 'shadow-red-500/20',
      text: 'text-amber-400',
    },
  },
  'Ice Queen': {
    portraitUrl: '/src/assets/images/queen_ice_signature_1794390014506.jpg',
    portraitVariants: [
      '/src/assets/images/queen_ice_signature_1794390014506.jpg',
      '/src/assets/images/queen_ice_signature_v2_1794390041177.jpg',
    ],
    sigil: '❄️',
    themeDescription: 'Monarch of permafrost citadels, glacial tears, and absolute stillness.',
    elementColor: {
      primary: '#0284c7',
      secondary: '#38bdf8',
      border: 'border-sky-400/50',
      glow: 'shadow-sky-400/20',
      text: 'text-cyan-300',
    },
  },
  'Moon Queen': {
    portraitUrl: '/src/assets/images/queen_moon_signature_1794390015359.jpg',
    portraitVariants: [
      '/src/assets/images/queen_moon_signature_1794390015359.jpg',
      '/src/assets/images/queen_moon_signature_v2_1794390042928.jpg',
    ],
    sigil: '🌙',
    themeDescription: 'Weaver of astral tides, crescent omens, and starlight veils.',
    elementColor: {
      primary: '#7c3aed',
      secondary: '#a855f7',
      border: 'border-purple-400/50',
      glow: 'shadow-purple-500/25',
      text: 'text-purple-300',
    },
  },
  'Dragon Queen': {
    portraitUrl: '/src/assets/images/queen_dragon_signature_1794390015853.jpg',
    portraitVariants: [
      '/src/assets/images/queen_dragon_signature_1794390015853.jpg',
      '/src/assets/images/queen_dragon_signature_v2_1794390064478.jpg',
    ],
    sigil: '🐉',
    themeDescription: 'High Matriarch of the ancient wyrmflights, molten gold, and wyvern bloodlines.',
    elementColor: {
      primary: '#b45309',
      secondary: '#eab308',
      border: 'border-amber-500/50',
      glow: 'shadow-amber-500/25',
      text: 'text-amber-300',
    },
  },
  'Warrior Queen': {
    portraitUrl: '/src/assets/images/queen_warrior_signature_1794390015572.jpg',
    portraitVariants: [
      '/src/assets/images/queen_warrior_signature_1794390015572.jpg',
      '/src/assets/images/queen_warrior_signature_v2_1794390041265.jpg',
    ],
    sigil: '⚔️',
    themeDescription: 'Vanguard sovereign of the lioncrest, unbreakable aegis, and immortal legions.',
    elementColor: {
      primary: '#475569',
      secondary: '#d97706',
      border: 'border-yellow-600/50',
      glow: 'shadow-yellow-600/20',
      text: 'text-yellow-400',
    },
  },
  'Crystal Queen': {
    portraitUrl: '/src/assets/images/queen_crystal_signature_1794390017198.jpg',
    portraitVariants: [
      '/src/assets/images/queen_crystal_signature_1794390017198.jpg',
      '/src/assets/images/queen_crystal_signature_v2_1794390064368.jpg',
    ],
    sigil: '💎',
    themeDescription: 'Illuminator of subterranean geode halls, refraction sorcery, and radiant quartz.',
    elementColor: {
      primary: '#9333ea',
      secondary: '#ec4899',
      border: 'border-fuchsia-400/50',
      glow: 'shadow-fuchsia-500/25',
      text: 'text-fuchsia-300',
    },
  },
};

interface ClassLorePool {
  firstNames: string[];
  houseNames: string[];
  titles: string[];
  kingdoms: string[];
  powers: { name: string; description: string }[];
  relics: string[];
  decrees: string[];
  loreParagraphs: string[];
}

export const CLASS_LORE: Record<QueenClass, ClassLorePool> = {
  'Fire Queen': {
    firstNames: [
      'Aurelia', 'Ignitia', 'Pyra', 'Valestria', 'Lyrith', 'Solara', 'Vespera',
      'Seraphina', 'Emberlyn', 'Calida', 'Kaelina', 'Azaria', 'Mireille', 'Nymeria'
    ],
    houseNames: [
      'Dawnfire', 'Cinderheart', 'Ignis', 'Ashfall', 'Solarium', 'Emberthorne',
      'Pyroth', 'Flameborne', 'Solaris', 'Vanguard-Ash', 'Sovereign-Pyre'
    ],
    titles: [
      'Sovereign of the Infernal Spires',
      'High Empress of the Solar Flare',
      'Matriarch of the Eternal Hearth',
      'Archon of the Conflagration Plains',
      'Queen of the Molten Dawn',
      'Guardian of the Phoenix Flame',
      'Grand Marshall of the Ashen Crest'
    ],
    kingdoms: [
      'The Ember Caldera of Pyroth',
      'The Obsidian Spires of Sol-Kar',
      'The Sunshard Oasis of Azuria',
      'The Hearthfall Dominion',
      'The Basalt Basin of Cindermarch',
      'The Golden Pyre of Ignara'
    ],
    powers: [
      {
        name: 'Phoenix Resurgence & Solar Corona',
        description: 'Unleashes waves of white-hot celestial fire that incinerates enemy malice while rejuvenating wounded allies in golden sparks.'
      },
      {
        name: 'Pyroclastic Surge & Lava Bloom',
        description: 'Commands molten basalt from subterranean fissures to erect impenetrable glowing ramparts and molten barriers.'
      },
      {
        name: 'Sunfire Crown of Thousand Dawns',
        description: 'Channels the primordial thermal pulse of the world, blinding hostile armies and igniting sovereign banners with divine blaze.'
      },
      {
        name: 'Infernal Ash Reconstitution',
        description: 'Dissolves bodily into drifting embers to evade fatal strikes before reforming instantaneously behind adversaries.'
      }
    ],
    relics: [
      'The Phoenix Scepter of High Noon',
      'Crown of Ever-Burning Rubies',
      'Cinder-Veil Cloak of the Solar Wyrm',
      'Talisman of the Basalt Heart'
    ],
    decrees: [
      '"From our ashes, an empire of eternal dawn shall rise unyielding."',
      '"Let any who threaten our borders test their steel against our sacred flame."',
      '"We do not inherit the flame; the flame submits to our command."',
      '"Courage is not the absence of scorched earth, but the resolve to bloom upon it."'
    ],
    loreParagraphs: [
      'Born during the great convergence of twin suns, she commanded the hearthfires before speaking her first word. When the northern barbarians besieged the Caldera, she walked into the magma springs and emerged cloaked in solar radiance, turning the battlefield into glass.',
      'Sovereign of the scorched highlands, she unified the divided clans of Pyroth through unmatched thermal mastery and diplomatic magnanimity. Her throne is carved from black meteorite and rings with the song of sleeping volcanoes.',
      'Chroniclers record that her heart beats in harmony with the mantle of the earth. Wherever her slippers touch barren loam, wild flame-orchids sprout in her wake.'
    ]
  },

  'Ice Queen': {
    firstNames: [
      'Frostveil', 'Elowen', 'Astrid', 'Isolde', 'Borealia', 'Sylvanna', 'Glacielle',
      'Rimehart', 'Elira', 'Freydis', 'Kallisto', 'Yvaine', 'Nevara', 'Thalassa'
    ],
    houseNames: [
      'Winterspire', 'Frostveil', 'Rimewind', 'Glaciara', 'Nivalis', 'Palepeak',
      'Silverchill', 'Blizzardborn', 'Cryocrest', 'Hailthorne', 'Permafrost'
    ],
    titles: [
      'Empress of the Glacial Spire',
      'High Archon of the Absolute Zero',
      'Matriarch of the Everfrozen Seas',
      'Sovereign of the Aurora Borealis',
      'Queen of the Pale Silence',
      'Keeper of the Eternal Permafrost',
      'Mistress of the Howling Blizzards'
    ],
    kingdoms: [
      'The Everfrost Citadel of Nivalis',
      'The Pale Glacier of Frostfang',
      'The Aurora Fjord Dominion',
      'The Rimewind Spires of Kael-Varn',
      'The Frozen Shallows of Isola',
      'The Crystalline Tundra of Skadi'
    ],
    powers: [
      {
        name: 'Glacial Absolute Zero & Time Stasis',
        description: 'Drops the ambient temperature to absolute zero in seconds, arresting physical momentum, magic, and arrows mid-flight.'
      },
      {
        name: 'Aurora Shard Tempest',
        description: 'Condenses the polar northern lights into hyper-dense razor ice needles that pierce armor like gossamer.'
      },
      {
        name: 'Soul Permafrost Sanctuary',
        description: 'Encases allies in shimmering diamond ice that wards off all negative enchantments and regenerates vigor.'
      },
      {
        name: 'Glacier Colossus Sculpting',
        description: 'Shapes living sentinels of pure glacial crystal from the snow to patrol mountain borders with relentless vigilance.'
      }
    ],
    relics: [
      'The Crown of Weeping Glaciers',
      'Frostfang Rapier of the Silver Maiden',
      'Chalice of the Northwind',
      'Mirror of the Polar Dawn'
    ],
    decrees: [
      '"Patience as cold as deep permafrost; strike swifter than the sudden avalanche."',
      '"Passion melts flesh; absolute composure carves eternity."',
      '"No blade can sunder what the ice has claimed for its sanctuary."',
      '"Let the howling wind deliver our silence to those who doubt our throne."'
    ],
    loreParagraphs: [
      'Deep in the mountain fortresses where breath crystallizes into frost, she ascended the throne by freezing an advancing avalanche with a solitary wave of her staff. Her people know no hunger, for her ice vaults preserve harvests across centuries.',
      'Daughter of the Northern Aurora, her hair glints with diamond dust and her gaze commands the loyalty of mountain frost-drakes. Treaties penned in her presence freeze into unbreakable sapphire tablets.',
      'Legend whispers that her tears do not fall—they crystallize into enchanted pale gems that emit soothing light throughout the endless winter night.'
    ]
  },

  'Moon Queen': {
    firstNames: [
      'Selene', 'Lunara', 'Astraea', 'Nocturna', 'Lyra', 'Celestia', 'Diana',
      'Vesperia', 'Moonveil', 'Nyx', 'Serena', 'Illyria', 'Cassiopeia', 'Morrigan'
    ],
    houseNames: [
      'Lunamere', 'Silverveil', 'Nightfall', 'Astra', 'Starweaver', 'Crescent',
      'Shadowglow', 'Nocturne', 'Starlight', 'Eclipse', 'Moonshadow'
    ],
    titles: [
      'High Archon of the Astral Eclipse',
      'Sovereign of the Celestial Tide',
      'Matriarch of the Midnight Vault',
      'Queen of the Crescent Omens',
      'Weaver of the Starlight Tapestry',
      'Guardian of the Moonwell Sanctuary',
      'Empress of the Silver Horizon'
    ],
    kingdoms: [
      'The Astral Sanctuary of Lunaria',
      'The Silverveil Glade of Nocturn',
      'The Moonpool Citadel of Elyria',
      'The Twilight Spires of Selenis',
      'The Celestial Archipelago of Cygnus',
      'The Eclipse Basin of Starfall'
    ],
    powers: [
      {
        name: 'Gravitational Lunar Tides & Astral Pull',
        description: 'Manipulates localized gravity to crush enemy weaponry or elevate royal battlements above incoming war machines.'
      },
      {
        name: 'Crescent Moon Beam of True Vision',
        description: 'Casts a beam of pure lunar luminescence that dispels illusions, reveals treachery, and blinds malicious spirits.'
      },
      {
        name: 'Veil of the Starless Night',
        description: 'Envelops entire armies in a cloak of gentle starlight silence, rendering movements soundless and invisible to enemy eyes.'
      },
      {
        name: 'Eclipse Dreamweaving',
        description: 'Communicates across thousand-league distances through dreams, inspiring allies with royal prophecies and divine courage.'
      }
    ],
    relics: [
      'The Crescent Scepter of Starlight',
      'Tiara of the Eclipse Pearl',
      'Veil of the Silver Nebula',
      'Astrolabe of the Thousand Constellations'
    ],
    decrees: [
      '"The sun may conquer the day, but eternity belongs to the velvet night."',
      '"Look up when shadows lengthen; in darkness our vigilance shines brightest."',
      '"By the crescent blade and starlight decree, truth shall pierce all deceit."',
      '"We govern not by brute force, but by the gravitational certainty of fate."'
    ],
    loreParagraphs: [
      'She was discovered slumbering atop the Sacred Moonwell during a once-in-a-millennium planetary alignment. When she awoke, tides bowed to her gestures and owls whispered the secret whispers of foreign courts into her ears.',
      'Sovereign of the celestial observatory towers, she tracks the movement of astral comets to anticipate wars before armies even march. Her silver gown trails starlight like morning mist over mountain rivers.',
      'Under her sovereign reign, the Kingdom of Lunaria became the haven of astronomers, mystic cartographers, and poet-knights who pledge their shields to the silver maiden of the night.'
    ]
  },

  'Dragon Queen': {
    firstNames: [
      'Dracarys', 'Rhaenira', 'Kalynda', 'Vaeloria', 'Drakaina', 'Ignis-Vae',
      'Tiamatha', 'Drakara', 'Valyria', 'Zaphira', 'Aurelia-Rex', 'Sarkany', 'Helia'
    ],
    houseNames: [
      'Wyrmwing', 'Drakespire', 'Scalebreaker', 'Dragonheart', 'Bloodwyrm',
      'Volcanus', 'Crimson-Fang', 'Drakon-Zul', 'Wyverncrest', 'Goldscale'
    ],
    titles: [
      'High Matriarch of the Wyrmflight',
      'Sovereign of the Obsidian Throne',
      'Mistress of the Molten Brood',
      'High Queen of the Dragon-Riders',
      'Empress of the Golden Roar',
      'Keeper of the Elder Drakon Pact',
      'Commander of the Sky-Scourge'
    ],
    kingdoms: [
      'The Volcanic Bastion of Drakon-Zul',
      'The Dragonmount Spires of Ignis-Roc',
      'The Caldera Aerie of Vael-Nok',
      'The Wyrmcliff Dominion',
      'The Molten Gorges of Pyroth-Wyrm',
      'The Skyreach Roost of Vermithrax'
    ],
    powers: [
      {
        name: 'Ancient Draconic Flame & Scale Synthesis',
        description: 'Hardens skin into iridescent golden scales that deflect ballista bolts while exhaling incinerating sovereign dragonfire.'
      },
      {
        name: 'Wyrm-Call Command & Sky Dominance',
        description: 'Emits a resonance frequency that summons colossal elder drakes from mountain crags to blanket the sky in thunderous wings.'
      },
      {
        name: 'Molten Gold Transmutation',
        description: 'Heats iron and bronze into flowing golden plasma, reshaping enemy weapons into glittering molten slag.'
      },
      {
        name: 'Apex Predator Roar of Dread',
        description: 'Unleashes a primordial sonic roar that shatters enemy siege towers and breaks the morale of invading cavalry.'
      }
    ],
    relics: [
      'The Dragon-Tooth Great-Glaive',
      'Crown of Molten Wyrm-Scales',
      'The Golden Drakon Orb of Sovereignty',
      'Gauntlets of the Primordial Broodmother'
    ],
    decrees: [
      '"Our blood is forged in the belly of volcanoes; our reign rides on dragon wings."',
      '"Bend the knee to the sky sovereigns, or become fuel for the great fires."',
      '"Dragons bow to no king—yet they cradle our crown in their claws."',
      '"Honor is gold, courage is iron, and loyalty is paid in fire."'
    ],
    loreParagraphs: [
      'Ascending the legendary smoking peaks of Drakon-Zul alone at age sixteen, she confronted Vermithrax the Elder and bonded her soul with the beast through sheer iron willpower. They returned to the capital as one, reclaiming her usurped throne in a tempest of golden flame.',
      'Her royal armor is hammered from the shed scales of three generations of imperial dragons, inlaid with volcanic rubies that pulse with living draconic vitality. Her armies strike from above with terrifying precision.',
      'Sovereign of both men and mythical wyrms, she established the Great Draconic Lex: a royal treaty that made dragons companions of chivalry rather than scourge of the countryside.'
    ]
  },

  'Warrior Queen': {
    firstNames: [
      'Valeria', 'Brynhild', 'Aegis', 'Freja', 'Morrighan', 'Sigrid', 'Althea',
      'Gwenhwyfar', 'Boudicca', 'Thorgunna', 'Kalliope', 'Vanguardia', 'Hildr'
    ],
    houseNames: [
      'Steelheart', 'Lioncrest', 'Ironforged', 'Warbound', 'Bloodthorn', 'Shield-Breaker',
      'Valgard', 'Stormguard', 'Aegisborn', 'Gryphon-Blade', 'Battle-Song'
    ],
    titles: [
      'Warlord-Queen of the Obsidian Bastion',
      'High Marshall of the Lioncrest Host',
      'Empress of the Iron Vanguard',
      'Sovereign of the Thousand Shields',
      'Mistress of the Unyielding Bastion',
      'Queen-Protector of the Realm',
      'Champion of the Sacred Battlegrounds'
    ],
    kingdoms: [
      'The Aegis Stronghold of Valgard',
      'The Ironforge Citadel of Grim-Tor',
      'The Lionheart Basin of High-Reach',
      'The Ramparts of the North Vanguard',
      'The Gryphon Bastion of Oakhaven',
      'The Shieldwall Valleys of Kar-Drak'
    ],
    powers: [
      {
        name: 'Unbreakable War Aegis & Shield-Barrier',
        description: 'Projects a luminous golden barrier that deflects artillery and siege magics, shielding her entire vanguard without a crack.'
      },
      {
        name: 'Battle Cry of Sovereign Valor',
        description: 'Imbues her warriors with relentless stamina, doubling movement speed and removing terror or fatigue from their ranks.'
      },
      {
        name: 'Blade-Storm Execution & Damascus Cleave',
        description: 'Swings her ancestral broadsword with superhuman velocity, slicing through stone gates and armor like parchment.'
      },
      {
        name: 'Tactical Foresight & Warlord Aura',
        description: 'Instinctively perceives tactical weaknesses in enemy formations and commands strategic counter-offensives in milliseconds.'
      }
    ],
    relics: [
      'The Lionheart Broadsword of Kings',
      'Aegis Shield of the Adamantine Wall',
      'Cuirass of the Immortal Vanguard',
      'War-Horn of the Thunderous March'
    ],
    decrees: [
      '"Our crowns are forged in fire and defended in blood; retreat is an alien tongue."',
      '"Stand firm upon the parapets! Not one stone of this citadel shall yield."',
      '"The measure of a queen is not her throne, but the shield she raises for her people."',
      '"When honor calls, let steel answer with thunderous conviction."'
    ],
    loreParagraphs: [
      'She fought on the front lines in seventeen pitched battles and never once retired to the royal pavilion while her soldiers held the field. Her shield bears the marks of sixty enemy war-hammers, each one a testament to her unyielding defense.',
      'Elected Sovereign-General by acclamation of seven noble houses after the fall of the old monarchy, she rebuilt the ruined citadel with her own hands and instituted a military chivalry code that protects common folk from marauding warlords.',
      'Her tactical treatises are studied across all continents. It is said that when she raises her damascus blade, even fierce storms pause as though honoring her sovereign decree.'
    ]
  },

  'Crystal Queen': {
    firstNames: [
      'Caelia', 'Prismara', 'Opalia', 'Amethyste', 'Diamonda', 'Gemma', 'Iris',
      'Seraphite', 'Vitreous', 'Smaragdina', 'Berylla', 'Alabastra', 'Corunda'
    ],
    houseNames: [
      'Prismata', 'Shardgale', 'Geodeheart', 'Amethyst-Sovereign', 'Gemveil',
      'Radiance', 'Quartzborn', 'Vitreus', 'Crystalline', 'Facet-Crown'
    ],
    titles: [
      'Matriarch of the Resonant Prisms',
      'Empress of the Subterranean Geodes',
      'Sovereign of the Amethyst Spires',
      'High Priestess of the Radiant Quartz',
      'Illuminator of the Deep Chasms',
      'Queen of the Refraction Matrix',
      'Lady of the Opaline Throne'
    ],
    kingdoms: [
      'The Shimmering Geodes of Cristalla',
      'The Amethyst Caverns of Lith-Varn',
      'The Quartz Spires of Prism-Deep',
      'The Diamond Vaults of Orefall',
      'The Subterranean Grotto of Iris-Deep',
      'The Luminescent Chasm of Beryl-Tor'
    ],
    powers: [
      {
        name: 'Prismatic Refraction & Light-Splitting Beam',
        description: 'Splits raw light into seven lethal spectral lasers that ricochet off subterranean crystal faces to strike hidden foes.'
      },
      {
        name: 'Resonant Crystal Armor & Shard Bloom',
        description: 'Erects walls of jagged amethyst crystals that shatter incoming spells into harmless glittering dust.'
      },
      {
        name: 'Harmonic Geode Healing & Vibration Restoration',
        description: 'Chants at the resonant frequency of pure quartz, healing fractured bones and purifying poisoned waters instantly.'
      },
      {
        name: 'Mirror-Form Holographic Facets',
        description: 'Generates dozens of identical crystal reflections of herself and her regalia, baffling adversaries with kaleidoscopic brilliance.'
      }
    ],
    relics: [
      'The Heart-Diamond Diadem of Cristalla',
      'Scepter of the Resonant Quartz',
      'Opaline Mirror of Seven Reflections',
      'Amethyst Prism of the Deep Mother'
    ],
    decrees: [
      '"Under deep subterranean pressure, plain carbon awakens as unbreakable diamonds."',
      '"Truth is like raw light: only through clean crystal is its full spectrum revealed."',
      '"Let our enemies strike; like tempered quartz, we only ring clearer with every blow."',
      '"Every fracture in the stone is merely an opening for our luminescent dawn."'
    ],
    loreParagraphs: [
      'Deep beneath the mountain ranges where sunlight never reaches, she rules a subterranean empire that glows with bioluminescent amethyst and towering geode pillars. Her palace mirrors sparkle with eternal lilac brilliance.',
      'Able to hear the subtle geological vibrations of tectonic plates, she accurately predicts tremors months before they shake the surface kingdoms, saving millions of miners and cave-dwellers.',
      'Her royal garments are woven from flexible spun-quartz thread and powdered diamonds, catching every ray of candlelight to illuminate her council chamber like a celestial constellation.'
    ]
  }
};

// Memory of last generated queens to guarantee a different queen on every click
let lastGeneratedId = '';
let lastGeneratedName = '';

/**
 * Generate a unique female queen with names, royal title, kingdom, and magical power.
 * Guarantees a different queen on each invocation.
 */
export function generateQueen(preferredClass?: QueenClass | 'ALL'): Queen {
  // Select class
  let selectedClass: QueenClass;
  if (!preferredClass || preferredClass === 'ALL') {
    // Pick randomly from the 6 classes
    const classes = QUEEN_CLASSES;
    selectedClass = classes[Math.floor(Math.random() * classes.length)];
  } else {
    selectedClass = preferredClass;
  }

  const lore = CLASS_LORE[selectedClass];
  const meta = CLASS_METADATA[selectedClass];

  let firstName: string;
  let houseName: string;
  let fullName: string;
  let attempts = 0;

  // Generate unique name combination distinct from previous
  do {
    firstName = lore.firstNames[Math.floor(Math.random() * lore.firstNames.length)];
    houseName = lore.houseNames[Math.floor(Math.random() * lore.houseNames.length)];
    fullName = `${firstName} of House ${houseName}`;
    attempts++;
  } while (fullName === lastGeneratedName && attempts < 15);

  lastGeneratedName = fullName;

  const royalTitle = lore.titles[Math.floor(Math.random() * lore.titles.length)];
  const kingdom = lore.kingdoms[Math.floor(Math.random() * lore.kingdoms.length)];
  const powerObj = lore.powers[Math.floor(Math.random() * lore.powers.length)];
  const relic = lore.relics[Math.floor(Math.random() * lore.relics.length)];
  const royalDecree = lore.decrees[Math.floor(Math.random() * lore.decrees.length)];
  const loreChronicle = lore.loreParagraphs[Math.floor(Math.random() * lore.loreParagraphs.length)];

  // Class-influenced RPG Player Stats (0 - 100)
  let baseHealth = Math.floor(Math.random() * 15) + 80;
  let baseMana = Math.floor(Math.random() * 15) + 80;
  let baseStrength = Math.floor(Math.random() * 15) + 80;
  let baseIntelligence = Math.floor(Math.random() * 15) + 80;

  if (selectedClass === 'Fire Queen') {
    baseStrength += 8;
    baseMana += 6;
  } else if (selectedClass === 'Ice Queen') {
    baseHealth += 10;
    baseIntelligence += 8;
  } else if (selectedClass === 'Moon Queen') {
    baseMana += 12;
    baseIntelligence += 10;
  } else if (selectedClass === 'Dragon Queen') {
    baseStrength += 12;
    baseHealth += 10;
  } else if (selectedClass === 'Warrior Queen') {
    baseStrength += 14;
    baseHealth += 12;
    baseMana -= 5;
  } else if (selectedClass === 'Crystal Queen') {
    baseIntelligence += 12;
    baseMana += 10;
  }

  // Cap between 1 and 100
  const stats = {
    health: Math.min(100, Math.max(10, baseHealth)),
    mana: Math.min(100, Math.max(10, baseMana)),
    strength: Math.min(100, Math.max(10, baseStrength)),
    intelligence: Math.min(100, Math.max(10, baseIntelligence)),
    arcanePotency: Math.floor(Math.random() * 20) + 80,
    royalInfluence: Math.floor(Math.random() * 20) + 80,
    battleProwess: Math.floor(Math.random() * 25) + 75,
    elementalAffinity: Math.floor(Math.random() * 15) + 85,
  };

  const id = `queen_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  lastGeneratedId = id;

  // Pick portrait from signature variants
  const chosenPortrait = meta.portraitVariants[Math.floor(Math.random() * meta.portraitVariants.length)] || meta.portraitUrl;

  return {
    id,
    name: fullName,
    royalTitle,
    queenClass: selectedClass,
    kingdom,
    magicalPower: powerObj.name,
    specialMagicalAbility: powerObj.name,
    powerDescription: powerObj.description,
    relic,
    royalDecree,
    loreChronicle,
    stats,
    portraitUrl: chosenPortrait,
    portraitVariants: meta.portraitVariants,
    sigil: meta.sigil,
    signatureCostume: SIGNATURE_COSTUME_SPEC,
    elementColor: meta.elementColor,
    summonedAt: Date.now(),
  };
}
