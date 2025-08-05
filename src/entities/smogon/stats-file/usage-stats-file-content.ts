import { IUsageStatsFileContent } from '../../../domain/smogon/stats-file/usage-stats-file.interface';
import { Count } from '../../../value-objects/shared/count';
import { PokemonUsageStats } from './pokemon-usage-stats';

/**
 * Props required to build a {@link UsageStatsFileContent} instance.
 */
export interface UsageStatsFileContentProps {
  /** Total number of battles recorded in the file. */
  totalBattles: Count;
  /** Average team weight as calculated by Smogon. */
  avgWeightTeam: number;
  /** Array of usage stats for each Pokémon. */
  pokemons: readonly PokemonUsageStats[];
}

/**
 * Aggregate representing the content of a Smogon usage stats file.
 * Wraps the total number of battles, the average team weight,
 * and a list of individual Pokémon usage stats.
 */
export class UsageStatsFileContent {
  /** Total number of battles (wrapped in {@link Count}). */
  public get totalBattles(): Count {
    return this.props.totalBattles;
  }

  /** Average team weight (float). */
  public get avgWeightTeam(): number {
    return this.props.avgWeightTeam;
  }

  /** Immutable list of Pokémon usage stats. */
  public get pokemons(): readonly PokemonUsageStats[] {
    return this.props.pokemons;
  }

  /** Private constructor: use {@link create} instead. */
  private constructor(private readonly props: UsageStatsFileContentProps) {}

  /**
   * Factory method to create an instance from raw parsed data.
   * @param content Raw usage stats content (e.g., parsed from file)
   */
  public static create(content: IUsageStatsFileContent): UsageStatsFileContent {
    return new UsageStatsFileContent({
      totalBattles: Count.create(content.totalBattles),
      avgWeightTeam: content.avgWeightTeam,
      pokemons: Object.freeze(content.pokemons.map((pkm) => PokemonUsageStats.create(pkm))),
    });
  }

  /**
   * Returns the plain object representation for serialization.
   */
  public toObject(): IUsageStatsFileContent {
    return {
      totalBattles: this.totalBattles.value,
      avgWeightTeam: this.avgWeightTeam,
      pokemons: this.pokemons.map((pkm) => pkm.toObject()),
    };
  }
}
