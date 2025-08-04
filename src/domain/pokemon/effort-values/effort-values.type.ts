import { EFFORT_VALUES } from "./effort-values.data";

/**
 * Type representing all valid Pokémon Effort Values (EVs).
 * Corresponds to one of the numbers defined in the {@link EFFORT_VALUES} constant,
 * that is, an integer between 0 and 252 inclusive.
 */
export type EffortValueValue = typeof EFFORT_VALUES[number];
