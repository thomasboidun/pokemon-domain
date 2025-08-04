import { NatureMultiplierValue, NatureNameValue, NatureSummaryValue } from './nature.type';

/**
 * Raw representation of nature multipliers for each stat.
 * These are primitive values (1, 0.9, or 1.1) directly mapped from the nature.
 */
export interface INatureMutipliers {
  /** Multiplier applied to HP (Hit Points) according to nature. Always 1. */
  hp?: 1;

  /** Multiplier applied to Attack according to nature. */
  atk: NatureMultiplierValue;

  /** Multiplier applied to Defense according to nature. */
  def: NatureMultiplierValue;

  /** Multiplier applied to Special Attack according to nature. */
  spa: NatureMultiplierValue;

  /** Multiplier applied to Special Defense according to nature. */
  spd: NatureMultiplierValue;

  /** Multiplier applied to Speed according to nature. */
  spe: NatureMultiplierValue;
}

/**
 * Interface describing the raw shape of a Nature.
 */
export interface INature {
  /** Nature name */
  name: NatureNameValue;

  /** Multipliers applied to each stat */
  multipliers: INatureMutipliers;

  /** Summary of stat modifications */
  summary: NatureSummaryValue;
}
