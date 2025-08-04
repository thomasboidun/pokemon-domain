export const GENERATION_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export const GENERATION_NAMES = [
  'Red/Blue',
  'Gold/Silver',
  'Ruby/Sapphire',
  'Diamond/Pearl',
  'Black/White',
  'X/Y',
  'Sun/Moon',
  'Sword/Shield',
  'Scarlet/Violet',
] as const;

export const GENERATION_SHORTHANDS = ['RB', 'GS', 'RS', 'DP', 'BW', 'XY', 'SM', 'SS', 'SV'] as const;

/**
 * List of all Pokémon generations.
 */
export const GENERATIONS = [
  { number: 1, name: 'Red/Blue', shorthand: 'RB' },
  { number: 2, name: 'Gold/Silver', shorthand: 'GS' },
  { number: 3, name: 'Ruby/Sapphire', shorthand: 'RS' },
  { number: 4, name: 'Diamond/Pearl', shorthand: 'DP' },
  { number: 5, name: 'Black/White', shorthand: 'BW' },
  { number: 6, name: 'X/Y', shorthand: 'XY' },
  { number: 7, name: 'Sun/Moon', shorthand: 'SM' },
  { number: 8, name: 'Sword/Shield', shorthand: 'SS' },
  { number: 9, name: 'Scarlet/Violet', shorthand: 'SV' },
] as const;
