import { ILeadStatsFileContent } from '../../../domain/smogon/stats-file/lead-stats-file.interface';
import { Count } from '../../../value-objects/shared/count';
import { PokemonLeadStats } from './pokemon-lead-stats';

export interface LeadStatsFileContentProps {
  totalLeads: Count;
  pokemons: PokemonLeadStats[];
}

/**
 * Represents the parsed content of a Smogon lead stats file.
 *
 * Encapsulates the total number of leads and a list of Pokémon lead statistics.
 */
export class LeadStatsFileContent {
  /**
   * The total number of leads recorded.
   */
  public get totalLeads(): Count {
    return this.props.totalLeads;
  }

  /**
   * The list of Pokémon lead statistics.
   */
  public get pokemons(): readonly PokemonLeadStats[] {
    return this.props.pokemons;
  }

  private constructor(private readonly props: LeadStatsFileContentProps) {}

  /**
   * Creates a new LeadStatsFileContent instance from a raw file content object.
   *
   * @param content - Raw content of the lead stats file.
   * @returns A LeadStatsFileContent instance.
   */
  public static create(content: ILeadStatsFileContent): LeadStatsFileContent {
    return new LeadStatsFileContent({
      totalLeads: Count.create(content.totalLeads),
      pokemons: content.pokemons.map((pkm) => PokemonLeadStats.create(pkm)),
    });
  }

  /**
   * Serializes the instance to a plain object representation.
   *
   * @returns An object conforming to ILeadStatsFileContent.
   */
  public toObject(): ILeadStatsFileContent {
    return {
      totalLeads: this.totalLeads.value,
      pokemons: this.pokemons.map((pkm) => pkm.toObject()),
    };
  }
}
