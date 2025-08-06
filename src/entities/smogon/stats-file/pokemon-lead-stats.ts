import { IPokemonLeadStats } from '../../../domain/smogon/stats-file/lead-stats-file.interface';
import { CountAndPercent } from '../../../value-objects/shared/count-and-percent';
import { Name } from '../../../value-objects/shared/name';
import { Percent } from '../../../value-objects/shared/percent';
import { Rank } from '../../../value-objects/smogon/rank/rank';

export interface PokemonLeadStatsProps {
  rank: Rank;
  name: Name;
  overallPercent: Percent;
  raw: CountAndPercent;
}

/**
 * Represents the statistics of a lead Pokémon in a usage stats file.
 *
 * Encapsulates data such as its ranking, name, overall usage percentage, and raw stats.
 */
export class PokemonLeadStats {
  /**
   * The rank of the Pokémon in lead usage.
   */
  public get rank(): Rank {
    return this.props.rank;
  }

  /**
   * The name of the Pokémon.
   */
  public get name(): Name {
    return this.props.name;
  }

  /**
   * The overall usage percentage as a lead.
   */
  public get overallPercent(): Percent {
    return this.props.overallPercent;
  }

  /**
   * The raw usage count and its corresponding percentage.
   */
  public get raw(): CountAndPercent {
    return this.props.raw;
  }

  private constructor(private readonly props: PokemonLeadStatsProps) {}

  /**
   * Creates a new instance of PokemonLeadStats from a plain object.
   *
   * @param leads - Raw lead stats object.
   * @returns A new instance of PokemonLeadStats.
   */
  public static create(leads: IPokemonLeadStats): PokemonLeadStats {
    return new PokemonLeadStats({
      rank: Rank.create(leads.rank),
      name: Name.create(leads.name),
      overallPercent: Percent.create(leads.overallPercent),
      raw: CountAndPercent.create(leads.raw),
    });
  }

  /**
   * Serializes the instance back into a plain object.
   *
   * @returns A plain object conforming to IPokemonLeadStats.
   */
  public toObject(): IPokemonLeadStats {
    return {
      rank: this.rank.value,
      name: this.name.value,
      overallPercent: this.overallPercent.value,
      raw: this.raw.toObject(),
    };
  }
}
