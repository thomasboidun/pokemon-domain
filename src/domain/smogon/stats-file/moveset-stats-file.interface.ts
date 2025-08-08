import { IEffortValues } from "../../pokemon/effort-values/effort-values.interface";
import { NatureNameValue } from "../../pokemon/nature/nature.type";
import { INameAndPercent } from "../../shared/name-and-percent.interface";
import { IStatsFileMetadata } from "./stats-file-metadata.interface";

/**
 * Represents a parsed moveset statistics file with its origin and metadata.
 */
export interface IMovesetStatsFile {
  /** Original Smogon TXT file URL */
  rawUrl: string;
  /** Local path to the parsed JSON file */
  parsedFilePath: string;
  /** Structured moveset statistics content */
  content: IMovesetStatsFileContent;
  /** Metadata describing the stats file */
  metadata: IStatsFileMetadata;
}

/**
 * Container for the Pokémon moveset statistics in the file.
 */
export interface IMovesetStatsFileContent {
  /** List of Pokémon moveset statistics */
  pokemons: IPokemonMovesetStats[];
}

/**
 * Represents detailed statistics for a single Pokémon's moveset.
 */
export interface IPokemonMovesetStats {
  /** Pokémon name */
  name: string;
  /** Number of battles in which this Pokémon appeared */
  rawCount: number;
  /** Average battle weight based on Smogon's weighting system */
  avgWeight: number;
  /** Upper bound of the Pokémon’s viability across formats */
  viabilityCeiling: number;
  /** Usage percentages of abilities */
  abilities: INameAndPercent[];
  /** Usage percentages of held items */
  items: INameAndPercent[];
  /** Common nature/EV spreads */
  spreads: ISpreadStat[];
  /** Usage percentages of moves */
  moves: INameAndPercent[];
  /** Usage percentages of Terastallization types */
  teraTypes: INameAndPercent[];
  /** Common teammates and their usage percentages */
  teammates: INameAndPercent[];
  /** List of checks and counters with related statistics */
  checksAndCounters: ICheckAndCounterStats[];
}

/**
 * Represents a specific spread of nature and EVs used by a Pokémon.
 */
export interface ISpreadStat {
  /** Nature used in this spread */
  nature: NatureNameValue;
  /** EV distribution for the spread */
  evs: IEffortValues;
  /** Usage percentage of this spread */
  percent: number;
}

/**
 * Represents the checks and counters statistics for a Pokémon moveset.
 */
export interface ICheckAndCounterStats {
  /** Name of the Pokémon acting as a check or counter */
  name: string;
  /** Statistical weight metrics representing the importance or influence of the check/counter */
  weight: ICheckAndCounterWeight;
  /** Percent of battles where this Pokémon knocked out the moveset Pokémon */
  KOed: number;
  /** Percent of battles where this Pokémon caused the moveset Pokémon to switch out */
  switchedOut: number;
}

/**
 * Statistical weight metrics for a check or counter.
 */
export interface ICheckAndCounterWeight {
  /** Aggregate weighted score reflecting the overall impact */
  score: number;
  /** Average value of the weight metric */
  avg: number;
  /** Standard deviation indicating variability in the weight */
  stdDev: number;
}
