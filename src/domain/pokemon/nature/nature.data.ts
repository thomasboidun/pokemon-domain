/**
 * All valid Pokémon nature names.
 *
 * These correspond to official natures that affect stat growth.
 * Some are neutral (e.g. 'Hardy', 'Docile'), others increase one stat while decreasing another.
 */
export const NATURE_NAMES = [
  'Hardy',
  'Lonely',
  'Brave',
  'Adamant',
  'Naughty',
  'Bold',
  'Docile',
  'Relaxed',
  'Impish',
  'Lax',
  'Timid',
  'Hasty',
  'Serious',
  'Jolly',
  'Naive',
  'Modest',
  'Mild',
  'Quiet',
  'Bashful',
  'Rash',
  'Calm',
  'Gentle',
  'Sassy',
  'Careful',
  'Quirky',
] as const;

/**
 * Allowed multiplier values for Pokémon stats based on their nature.
 *
 * - `0.9`: Decreased stat
 * - `1`: Neutral stat (no change)
 * - `1.1`: Increased stat
 *
 * These values are applied to individual stats like Attack or Speed depending on the nature.
 */
export const NATURE_MULTIPLIERS = [0.9, 1, 1.1] as const;

/**
 * All possible summary strings describing how a Pokémon nature affects stats.
 *
 * - `''`: Neutral nature (no stat modified)
 * - `'+Atk, -Def'`: Attack increased, Defense decreased
 * - `'+SpA, -Spe'`: Special Attack increased, Speed decreased
 * - etc.
 *
 * These summaries are used for quick representation of the nature's stat effects.
 */
export const NATURE_SUMMARIES = [
  '',
  '+Atk, -Def',
  '+Atk, -SpA',
  '+Atk, -SpD',
  '+Atk, -Spe',
  '+Def, -Atk',
  '+Def, -SpA',
  '+Def, -SpD',
  '+Def, -Spe',
  '+SpA, -Atk',
  '+SpA, -Def',
  '+SpA, -SpD',
  '+SpA, -Spe',
  '+SpD, -Atk',
  '+SpD, -Def',
  '+SpD, -SpA',
  '+SpD, -Spe',
  '+Spe, -Atk',
  '+Spe, -Def',
  '+Spe, -SpA',
  '+Spe, -SpD',
] as const;

/**
 * List of all Pokémon natures with their stat multipliers and summaries.
 * Used to calculate stat modifications and display nature effects.
 */
export const NATURES = [
  { name: 'Adamant', multipliers: { hp: 1, atk: 1.1, def: 1, spa: 0.9, spd: 1, spe: 1 }, summary: '+Atk, -SpA' },
  { name: 'Bashful', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, summary: '' },
  { name: 'Bold', multipliers: { hp: 1, atk: 0.9, def: 1.1, spa: 1, spd: 1, spe: 1 }, summary: '+Def, -Atk' },
  { name: 'Brave', multipliers: { hp: 1, atk: 1.1, def: 1, spa: 1, spd: 1, spe: 0.9 }, summary: '+Atk, -Spe' },
  { name: 'Calm', multipliers: { hp: 1, atk: 0.9, def: 1, spa: 1, spd: 1.1, spe: 1 }, summary: '+SpD, -Atk' },
  { name: 'Careful', multipliers: { hp: 1, atk: 1, def: 1, spa: 0.9, spd: 1.1, spe: 1 }, summary: '+SpD, -SpA' },
  { name: 'Docile', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, summary: '' },
  { name: 'Gentle', multipliers: { hp: 1, atk: 1, def: 0.9, spa: 1, spd: 1.1, spe: 1 }, summary: '+SpD, -Def' },
  { name: 'Hardy', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, summary: '' },
  { name: 'Hasty', multipliers: { hp: 1, atk: 1, def: 0.9, spa: 1, spd: 1, spe: 1.1 }, summary: '+Spe, -Def' },
  { name: 'Impish', multipliers: { hp: 1, atk: 1, def: 1.1, spa: 0.9, spd: 1, spe: 1 }, summary: '+Def, -SpA' },
  { name: 'Jolly', multipliers: { hp: 1, atk: 1, def: 1, spa: 0.9, spd: 1, spe: 1.1 }, summary: '+Spe, -SpA' },
  { name: 'Lax', multipliers: { hp: 1, atk: 1, def: 1.1, spa: 1, spd: 0.9, spe: 1 }, summary: '+Def, -SpD' },
  { name: 'Lonely', multipliers: { hp: 1, atk: 1.1, def: 0.9, spa: 1, spd: 1, spe: 1 }, summary: '+Atk, -Def' },
  { name: 'Mild', multipliers: { hp: 1, atk: 1, def: 0.9, spa: 1.1, spd: 1, spe: 1 }, summary: '+SpA, -Def' },
  { name: 'Modest', multipliers: { hp: 1, atk: 0.9, def: 1, spa: 1.1, spd: 1, spe: 1 }, summary: '+SpA, -Atk' },
  { name: 'Naive', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 0.9, spe: 1.1 }, summary: '+Spe, -SpD' },
  { name: 'Naughty', multipliers: { hp: 1, atk: 1.1, def: 1, spa: 1, spd: 0.9, spe: 1 }, summary: '+Atk, -SpD' },
  { name: 'Quiet', multipliers: { hp: 1, atk: 1, def: 1, spa: 1.1, spd: 1, spe: 0.9 }, summary: '+SpA, -Spe' },
  { name: 'Quirky', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, summary: '' },
  { name: 'Rash', multipliers: { hp: 1, atk: 1, def: 1, spa: 1.1, spd: 0.9, spe: 1 }, summary: '+SpA, -SpD' },
  { name: 'Relaxed', multipliers: { hp: 1, atk: 1, def: 1.1, spa: 1, spd: 1, spe: 0.9 }, summary: '+Def, -Spe' },
  { name: 'Sassy', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1.1, spe: 0.9 }, summary: '+SpD, -Spe' },
  { name: 'Serious', multipliers: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, summary: '' },
  { name: 'Timid', multipliers: { hp: 1, atk: 0.9, def: 1, spa: 1, spd: 1, spe: 1.1 }, summary: '+Spe, -Atk' },
] as const;
