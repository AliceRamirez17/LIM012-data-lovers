import {
  coincidences,
  filterByType,
  orderAZ,
  orderZA,
  orderByMxCP,
  rounded,
} from '../src/data.js';

const data = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '94',
      'base-defense': '121',
      'base-stamina': '127',
      'max-cp': '946',
      'max-hp': '112',
    },
    'quick-move': [
      {
        name: 'bubble',
        type: 'water',
        'base-damage': '12',
        energy: '14',
        'move-duration-seg': '1.2',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'aqua tail',
        type: 'water',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.9',
      },
      {
        name: 'water pulse',
        type: 'water',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '3.2',
      },
    ],
  },
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '126',
      'base-defense': '155',
      'base-stamina': '153',
      'max-cp': '1488',
      'max-hp': '132',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

const output1 = [
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

const output2 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

const output3 = [
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
];

const output4 = [
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

const output5 = [
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '94',
      'base-defense': '121',
      'base-stamina': '127',
      'max-cp': '946',
      'max-hp': '112',
    },
    'quick-move': [
      {
        name: 'bubble',
        type: 'water',
        'base-damage': '12',
        energy: '14',
        'move-duration-seg': '1.2',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'aqua tail',
        type: 'water',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.9',
      },
      {
        name: 'water pulse',
        type: 'water',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '3.2',
      },
    ],
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
  },
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '126',
      'base-defense': '155',
      'base-stamina': '153',
      'max-cp': '1488',
      'max-hp': '132',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
];

const output6 = [
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '126',
      'base-defense': '155',
      'base-stamina': '153',
      'max-cp': '1488',
      'max-hp': '132',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '94',
      'base-defense': '121',
      'base-stamina': '127',
      'max-cp': '946',
      'max-hp': '112',
    },
    'quick-move': [
      {
        name: 'bubble',
        type: 'water',
        'base-damage': '12',
        energy: '14',
        'move-duration-seg': '1.2',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'aqua tail',
        type: 'water',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.9',
      },
      {
        name: 'water pulse',
        type: 'water',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '3.2',
      },
    ],
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
];

const output7 = [
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '126',
      'base-defense': '155',
      'base-stamina': '153',
      'max-cp': '1488',
      'max-hp': '132',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '94',
      'base-defense': '121',
      'base-stamina': '127',
      'max-cp': '946',
      'max-hp': '112',
    },
    'quick-move': [
      {
        name: 'bubble',
        type: 'water',
        'base-damage': '12',
        energy: '14',
        'move-duration-seg': '1.2',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'aqua tail',
        type: 'water',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.9',
      },
      {
        name: 'water pulse',
        type: 'water',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '3.2',
      },
    ],
  },
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

const output8 = [
  {
    num: '010',
    name: 'caterpie',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'bug',
    ],
    stats: {
      'base-attack': '55',
      'base-defense': '55',
      'base-stamina': '128',
      'max-cp': '437',
      'max-hp': '113',
    },
    'quick-move': [
      {
        name: 'bug bite',
        type: 'bug',
        'base-damage': '5',
        energy: '6',
        'move-duration-seg': '0.5',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'struggle',
        type: 'normal',
        'base-damage': '35',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '007',
    name: 'squirtle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '94',
      'base-defense': '121',
      'base-stamina': '127',
      'max-cp': '946',
      'max-hp': '112',
    },
    'quick-move': [
      {
        name: 'bubble',
        type: 'water',
        'base-damage': '12',
        energy: '14',
        'move-duration-seg': '1.2',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'aqua tail',
        type: 'water',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.9',
      },
      {
        name: 'water pulse',
        type: 'water',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '3.2',
      },
    ],
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '008',
    name: 'wartortle',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '126',
      'base-defense': '155',
      'base-stamina': '153',
      'max-cp': '1488',
      'max-hp': '132',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'aqua jet',
        type: 'water',
        'base-damage': '45',
        energy: '-33',
        'move-duration-seg': '2.6',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    stats: {
      'base-attack': '158',
      'base-defense': '126',
      'base-stamina': '151',
      'max-cp': '1653',
      'max-hp': '131',
    },
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'fire fang',
        type: 'fire',
        'base-damage': '11',
        energy: '8',
        'move-duration-seg': '0.9',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'fire punch',
        type: 'fire',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.2',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
  },
  {
    num: '009',
    name: 'blastoise',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'water',
    ],
    stats: {
      'base-attack': '171',
      'base-defense': '207',
      'base-stamina': '188',
      'max-cp': '2466',
      'max-hp': '160',
    },
    'quick-move': [
      {
        name: 'water gun',
        type: 'water',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
      {
        name: 'bite',
        type: 'dark',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flash cannon',
        type: 'steel',
        'base-damage': '100',
        energy: '-100',
        'move-duration-seg': '2.7',
      },
      {
        name: 'ice beam',
        type: 'ice',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '3.3',
      },
      {
        name: 'hydro pump',
        type: 'water',
        'base-damage': '130',
        energy: '-100',
        'move-duration-seg': '3.3',
      },
    ],
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
  },
  {
    num: '006',
    name: 'charizard',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
      'flying',
    ],
    stats: {
      'base-attack': '223',
      'base-defense': '173',
      'base-stamina': '186',
      'max-cp': '2889',
      'max-hp': '158',
    },
    'quick-move': [
      {
        name: 'fire spin',
        type: 'fire',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.1',
      },
      {
        name: 'air slash',
        type: 'flying',
        'base-damage': '14',
        energy: '10',
        'move-duration-seg': '1.2',
      },
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'wing attack',
        type: 'flying',
        'base-damage': '8',
        energy: '9',
        'move-duration-seg': '0.8',
      },
    ],
    'special-attack': [
      {
        name: 'fire blast',
        type: 'fire',
        'base-damage': '140',
        energy: '-100',
        'move-duration-seg': '4.2',
      },
      {
        name: 'dragon claw',
        type: 'dragon',
        'base-damage': '50',
        energy: '-33',
        'move-duration-seg': '1.7',
      },
      {
        name: 'overheat',
        type: 'fire',
        'base-damage': '160',
        energy: '-100',
        'move-duration-seg': '4',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
  },
];

describe('coincidences', () => {
  it('is a function', () => {
    expect(typeof coincidences).toBe('function');
  });

  it('Debería retornar un array con los elementos que empiecen por la letra c.', () => {
    expect(coincidences(data, 'c')).toEqual(output1);
  });

  it('Debería retornar un array con los elementos que contengan el número 1.', () => {
    expect(coincidences(data, '1')).toEqual(output2);
  });

  it('Debería retornar un array con los elementos que sean igual a BLASTOISE.', () => {
    expect(coincidences(data, 'BLASTOISE')).toEqual(output3);
  });
});

describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Debería retornar un array con los elementos que coincidan con tipo bug.', () => {
    expect(filterByType(data, 'type', 'bug')).toEqual(output4);
  });
});

describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('Debería retornar un array con todos los elementos ordenados de la a a la z.', () => {
    expect(orderAZ(data, 'a-z')).toEqual(output5);
  });
});

describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('Debería retornar un array con todos los elementos ordenados de la z a la z.', () => {
    expect(orderZA(data, 'z-a')).toEqual(output6);
  });
});
describe('orderByMxCP', () => {
  it('is a function', () => {
    expect(typeof orderByMxCP).toBe('function');
  });

  it('Debería retornar un array con todos los elementos ordenados de mayor a menor por max PC.', () => {
    expect(orderByMxCP(data, 'high-low')).toEqual(output7);
  });

  it('Debería retornar un array con todos los elementos ordenados de menor a mayor por max PC.', () => {
    expect(orderByMxCP(data, 'low-high')).toEqual(output8);
  });
});

describe('rounded', () => {
  it('is a function', () => {
    expect(typeof rounded).toBe('function');
  });

  it('Debería retornar "682.19" para "682.1917808219179"', () => {
    expect(rounded(682.1917808219179, 2)).toBe(682.19);
  });

  it('Debería retornar "5.3" para "5.333333333"', () => {
    expect(rounded(5.333333333, 1)).toBe(5.3);
  });
});
