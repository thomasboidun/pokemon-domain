import { IPokemonMovesetStats } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";
import { Count } from "../../../value-objects/shared/count";
import { Name } from "../../../value-objects/shared/name";
import { NameAndPercent } from "../../../value-objects/shared/name-and-percent";
import { CheckAndCounterStats } from "./check-and-counter-stats";
import { SpreadStat } from "./spread-stat";

export interface PokemonMovesetStatsProps {
  name: Name;
  rawCount: Count;
  avgWeight: number;
  viabilityCeiling: number;
  abilities: NameAndPercent[];
  items: NameAndPercent[];
  spreads: SpreadStat[];
  moves: NameAndPercent[];
  teraTypes: NameAndPercent[];
  teammates: NameAndPercent[];
  checksAndCounters: CheckAndCounterStats[];
}

/**
 * Represents detailed moveset statistics for a given Pokémon in a Smogon stats file.
 * This class encapsulates various battle usage metrics, including abilities, items,
 * spreads, moves, Tera types, teammates, and checks/counters.
 * 
 * It is designed as a domain model with strong typing and validation via value objects.
 */
export class PokemonMovesetStats {
  /** Pokémon name */
  public get name(): Name {
    return this.props.name;
  }

  /** Number of battles in which this Pokémon appeared */
  public get rawCount(): Count {
    return this.props.rawCount;
  }

  /** Average battle weight based on Smogon's weighting system */
  public get avgWeight(): number {
    return this.props.avgWeight;
  }

  /** Upper bound of the Pokémon’s viability across formats */
  public get viabilityCeiling(): number {
    return this.props.viabilityCeiling;
  }

  /** Usage percentages of abilities */
  public get abilities(): NameAndPercent[] {
    return this.props.abilities;
  }

  /** Usage percentages of held items */
  public get items(): NameAndPercent[] {
    return this.props.items;
  }

  /** Common nature/EV spreads */
  public get spreads(): SpreadStat[] {
    return this.props.spreads;
  }

  /** Usage percentages of moves */
  public get moves(): NameAndPercent[] {
    return this.props.moves;
  }

  /** Usage percentages of Terastallization types */
  public get teraTypes(): NameAndPercent[] {
    return this.props.teraTypes;
  }

  /** Common teammates and their usage percentages */
  public get teammates(): NameAndPercent[] {
    return this.props.teammates;
  }

  /** List of checks and counters with related statistics */
  public get checksAndCounters(): CheckAndCounterStats[] {
    return this.props.checksAndCounters;
  }

  private constructor(private readonly props: PokemonMovesetStatsProps) { }

  /**
   * Creates a new instance of `PokemonMovesetStats` from raw moveset data.
   * Performs validation and converts raw properties into value objects.
   *
   * @param movesets - Raw moveset statistics as extracted from the Smogon stats file.
   * @returns A fully validated `PokemonMovesetStats` instance.
   */
  public static create(movesets: IPokemonMovesetStats): PokemonMovesetStats {
    return new PokemonMovesetStats({
      name: Name.create(movesets.name),
      rawCount: Count.create(movesets.rawCount),
      avgWeight: movesets.avgWeight,
      viabilityCeiling: movesets.viabilityCeiling,
      abilities: movesets.abilities.map(a => NameAndPercent.create(a)),
      items: movesets.items.map(i => NameAndPercent.create(i)),
      spreads: movesets.spreads.map(s => SpreadStat.create(s)),
      moves: movesets.moves.map(m => NameAndPercent.create(m)),
      teraTypes: movesets.teraTypes.map(tt => NameAndPercent.create(tt)),
      teammates: movesets.teammates.map(tm => NameAndPercent.create(tm)),
      checksAndCounters: movesets.checksAndCounters.map(cc => CheckAndCounterStats.create(cc))
    });
  }

  /**
   * Converts the instance into a plain JavaScript object
   * matching the original Smogon stats file interface.
   *
   * @returns The plain object representation of the Pokémon moveset statistics.
   */
  public toObject(): IPokemonMovesetStats {
    return {
      name: this.name.value,
      rawCount: this.rawCount.value,
      avgWeight: this.avgWeight,
      viabilityCeiling: this.viabilityCeiling,
      abilities: this.abilities.map(a => a.toObject()),
      items: this.items.map(i => i.toObject()),
      moves: this.moves.map(m => m.toObject()),
      spreads: this.spreads.map(s => s.toObject()),
      teraTypes: this.teraTypes.map(tt => tt.toObject()),
      teammates: this.teammates.map(tm => tm.toObject()),
      checksAndCounters: this.checksAndCounters.map(cc => cc.toObject())
    };
  }

  /**
   * Returns a human-readable string representation of the moveset statistics.
   * Useful for debugging and logging.
   *
   * @returns A string containing the formatted moveset data.
   */
  public toString(): string {
    let text = `${this.name.value}\n`;
    text += `Raw count: ${this.rawCount.value}\n`;
    text += `Avg. weight: ${this.avgWeight}\n`;
    text += `Viability ceiling: ${this.viabilityCeiling}\n`;
    text += 'Abilities:\n';
    text += this.abilities.map(a => `\t${a}\n`).join('');
    text += 'Items:\n';
    text += this.items.map(i => `\t${i}\n`).join('');
    text += 'Spreads:\n';
    text += this.spreads.map(s => `\t${s}\n`).join('');
    text += 'Moves:\n';
    text += this.moves.map(m => `\t${m}\n`).join('');
    text += 'Tera types:\n';
    text += this.teraTypes.map(tt => `\t${tt}\n`).join('');
    text += 'Teammates:\n';
    text += this.teammates.map(tm => `\t${tm}\n`).join('');
    text += 'Checks and counters:\n';
    text += this.checksAndCounters.map(cc => `\t${cc}\n`).join('');
    return text;
  }
}