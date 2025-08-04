import { INDIVIDUAL_VALUES } from './individual-values.data';

/**
 * Type representing all valid Pokémon Individual Values (IVs).
 * Corresponds to one of the numbers defined in the {@link INDIVIDUAL_VALUES} constant,
 * that is, an integer between 0 and 31 inclusive.
 */
export type IndividualValueValue = (typeof INDIVIDUAL_VALUES)[number];
