export const SS_MIN_BASE_MONTHLY = 1323.00;
export const SS_MAX_BASE_MONTHLY = 4720.50;

export const SS_RATES = {
  commonContingencies: 0.0470,
  unemploymentIndefinite: 0.0155,
  unemploymentTemporary: 0.0160,
  professionalTraining: 0.0010,
  mei: 0.0070
};

export const PERSONAL_MINIMUM_BASE = 5550;
export const CHILDREN_MINIMUMS = [2400, 2700, 4000, 4500];
export const DISABILITY_MINIMUMS = { 0: 0, 33: 3000, 65: 9000 };
export const GENERAL_WORK_EXPENSES = 2000;

export interface TaxBracket {
  limit: number;
  rate: number;
}

export const STATE_TAX_BRACKETS: TaxBracket[] = [
  { limit: 12450, rate: 0.095 },
  { limit: 20200, rate: 0.120 },
  { limit: 35200, rate: 0.150 },
  { limit: 60000, rate: 0.185 },
  { limit: 300000, rate: 0.225 },
  { limit: Infinity, rate: 0.245 }
];

export const DEFAULT_REGIONAL_TAX_BRACKETS: TaxBracket[] = [
  { limit: 12450, rate: 0.095 },
  { limit: 20200, rate: 0.120 },
  { limit: 35200, rate: 0.150 },
  { limit: 60000, rate: 0.185 },
  { limit: 300000, rate: 0.225 },
  { limit: Infinity, rate: 0.245 }
];

export const REGIONAL_TAX_BRACKETS: Record<string, TaxBracket[]> = {
  'Madrid': [
    { limit: 13362, rate: 0.085 },
    { limit: 19004, rate: 0.107 },
    { limit: 35425, rate: 0.128 },
    { limit: 57320, rate: 0.174 },
    { limit: Infinity, rate: 0.205 }
  ],
  'Cataluña': [
    { limit: 12450, rate: 0.105 },
    { limit: 17707, rate: 0.120 },
    { limit: 21000, rate: 0.140 },
    { limit: 33007, rate: 0.150 },
    { limit: 53407, rate: 0.188 },
    { limit: 90000, rate: 0.215 },
    { limit: 120000, rate: 0.235 },
    { limit: 175000, rate: 0.245 },
    { limit: Infinity, rate: 0.255 }
  ],
  'Andalucía': [
    { limit: 13000, rate: 0.095 },
    { limit: 21100, rate: 0.120 },
    { limit: 35200, rate: 0.150 },
    { limit: 60000, rate: 0.185 },
    { limit: Infinity, rate: 0.225 }
  ],
  'Comunidad Valenciana': [
    { limit: 12000, rate: 0.090 },
    { limit: 22000, rate: 0.120 },
    { limit: 32000, rate: 0.150 },
    { limit: 42000, rate: 0.175 },
    { limit: 52000, rate: 0.200 },
    { limit: 65000, rate: 0.225 },
    { limit: 72000, rate: 0.250 },
    { limit: Infinity, rate: 0.295 }
  ]
};

export interface CommunityInfo {
  name: string;
  slug: string;
}

export const COMMUNITIES_LIST: CommunityInfo[] = [
  { name: 'Andalucía', slug: 'andalucia' },
  { name: 'Aragón', slug: 'aragon' },
  { name: 'Asturias', slug: 'asturias' },
  { name: 'Baleares', slug: 'baleares' },
  { name: 'Canarias', slug: 'canarias' },
  { name: 'Cantabria', slug: 'cantabria' },
  { name: 'Castilla-La Mancha', slug: 'castilla-la-mancha' },
  { name: 'Castilla y León', slug: 'castilla-y-leon' },
  { name: 'Cataluña', slug: 'cataluna' },
  { name: 'Comunidad Valenciana', slug: 'comunidad-valenciana' },
  { name: 'Extremadura', slug: 'extremadura' },
  { name: 'Galicia', slug: 'galicia' },
  { name: 'La Rioja', slug: 'la-rioja' },
  { name: 'Madrid', slug: 'madrid' },
  { name: 'Murcia', slug: 'murcia' },
  { name: 'Navarra', slug: 'navarra' },
  { name: 'País Vasco', slug: 'pais-vasco' }
];