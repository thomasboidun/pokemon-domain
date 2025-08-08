import { IMovesetStatsFileContent } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";
import { PokemonMovesetStats } from "./pokemon-moveset-stats";

/**
 * Properties required to instantiate a {@link MovesetStatsFileContent}.
 */
export interface MovesetStatsFileContentProps {
  /** List of Pokémon moveset statistics */
  pokemons: PokemonMovesetStats[];
}

/**
 * Represents the parsed content of a Smogon movesets stats file.
 */
export class MovesetStatsFileContent {
  /** List of Pokémon moveset statistics */
  public get pokemons(): PokemonMovesetStats[] {
    return this.props.pokemons;
  }

  /** Private constructor: use {@link create} instead. */
  private constructor(private readonly props: MovesetStatsFileContentProps) { }

    /**
   * Factory method to create an instance from raw parsed data.
   * @param content Raw moveset stats content (e.g., parsed from file)
   */
  public static create(content: IMovesetStatsFileContent): MovesetStatsFileContent {
    return new MovesetStatsFileContent({
      pokemons: content.pokemons.map(pkm => PokemonMovesetStats.create(pkm))
    });
  }

  /**
   * Returns the plain object representation for serialization.
   */
  public toObject(): IMovesetStatsFileContent {
    return {
      pokemons: this.pokemons.map(pkm => pkm.toObject())
    };
  }
}