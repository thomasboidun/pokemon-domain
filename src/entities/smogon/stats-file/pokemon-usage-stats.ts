import { IPokemonUsageStats } from '../../../domain/smogon/stats-file/usage-stats-file.interface';
import { CountAndPercent } from '../../../value-objects/shared/count-and-percent';
import { Name } from '../../../value-objects/shared/name';
import { Percent } from '../../../value-objects/shared/percent';
import { Rank } from '../../../value-objects/smogon/rank/rank';

export interface PokemonUsageStatsProps {
  rank: Rank;
  name: Name;
  overallPercent: Percent;
  raw: CountAndPercent;
  real: CountAndPercent;
}

/**
 * Value Object representing the usage statistics of a single Pokémon in a Smogon stats file.
 * Includes its rank, name, overall usage percentage, and usage counts/percentages for raw and real battles.
 */
export class PokemonUsageStats {
  /** The ranking position of the Pokémon (e.g., 1, 2, ...) */
  public get rank(): Rank {
    return this.props.rank;
  }

  /** The name of the Pokémon (e.g., 'Garchomp') */
  public get name(): Name {
    return this.props.name;
  }

  /** The overall usage percentage across all battles */
  public get overallPercent(): Percent {
    return this.props.overallPercent;
  }

  /** Usage data for raw count and percentage (i.e., team preview appearances) */
  public get raw(): CountAndPercent {
    return this.props.raw;
  }

  /** Usage data for real count and percentage (i.e., actual battle appearances) */
  public get real(): CountAndPercent {
    return this.props.real;
  }

  /**
   * Private constructor; use the static `create` method to instantiate.
   * @param props Validated props for the usage statistics
   */
  private constructor(private readonly props: PokemonUsageStatsProps) {}

  /**
   * Factory method to create a PokemonUsageStats instance from raw interface data.
   * @param usage Raw usage stats as received from parsing
   */
  public static create(usage: IPokemonUsageStats): PokemonUsageStats {
    return new PokemonUsageStats({
      rank: Rank.create(usage.rank),
      name: Name.create(usage.name),
      overallPercent: Percent.create(usage.overallPercent),
      raw: CountAndPercent.create(usage.raw),
      real: CountAndPercent.create(usage.real),
    });
  }

  /**
   * Converts the value object back into its raw DTO form.
   */
  public toObject(): IPokemonUsageStats {
    return {
      rank: this.rank.value,
      name: this.name.value,
      overallPercent: this.overallPercent.value,
      raw: this.raw.toObject(),
      real: this.real.toObject(),
    };
  }
}
