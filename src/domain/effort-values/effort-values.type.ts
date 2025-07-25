import { EFFORT_VALUES } from "./effort-values.data";

/**
 * Type representing all valid Pokémon Effort Values (EVs).
 * Correspond à un nombre parmi ceux définis dans la constante EFFORT_VALUES,
 * c’est-à-dire un entier entre 0 et 252 inclus.
 */
export type EffortValueValue = typeof EFFORT_VALUES[number];
