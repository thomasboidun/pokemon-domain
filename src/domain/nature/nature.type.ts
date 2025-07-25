import { NATURE_MULTIPLIERS, NATURE_NAMES, NATURE_SUMMARIES, NATURES } from "./nature.data";

/**
 * Type representing a valid Pokémon nature name.
 * This type matches one of the string values in {@link NATURE_NAMES}.
 */
export type NatureNameValue = typeof NATURE_NAMES[number];

/**
 * Type representing one of the valid multiplier values.
 * This type matches one of the string values in {@link NATURE_MULTIPLIERS}.
 * Used to type stat multipliers affected by a Pokémon's nature.
 */
export type NatureMultiplierValue = typeof NATURE_MULTIPLIERS[number];

/**
 * Type representing a valid Pokémon nature summary.
 * This type matches one of the string values in {@link NATURE_SUMMARIES}.
 */
export type NatureSummaryValue = typeof NATURE_SUMMARIES[number];

/** Type representing the name of any known Pokémon nature. */
export type NatureValue = (typeof NATURES)[number];