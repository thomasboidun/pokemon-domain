import { ValueObject } from '../../../core/value-object';
import { IStatsFileMetadata } from '../../../domain/smogon/stats-file/stats-file-metadata.interface';
import { EloRating } from '../elo-rating/elo-rating';
import { FormatShorthand } from '../format/format-shorthand';
import { GenerationNumber } from '../generation/generation-number';
import { Period } from '../period/period';
import { RegulationSet } from '../regulation-set/regulation-set';
import { StatsFileTag } from './stats-file-tag';

export interface StatsFileMetadataProps {
  period: Period;
  generation: GenerationNumber;
  format: FormatShorthand;
  regulationSet?: RegulationSet;
  eloRating: EloRating;
  tag: StatsFileTag;
}

/**
 * Value Object representing the metadata associated with a Smogon stats file.
 * Combines several value objects to describe a unique file, including the time period,
 * generation, format, optional regulation set, Elo rating, and a tag.
 */
export class StatsFileMetadata extends ValueObject<StatsFileMetadataProps> {
  /** The month and year of the stats file (e.g., '2025-07') */
  public get period(): Period {
    return this.props.period;
  }

  /** The Pokémon generation number (1–9) */
  public get generation(): GenerationNumber {
    return this.props.generation;
  }

  /** The shorthand format (e.g., 'ou', 'ubers') */
  public get format(): FormatShorthand {
    return this.props.format;
  }

  /** Optional regulation set (e.g., 'i') */
  public get regulationSet(): RegulationSet | undefined {
    return this.props.regulationSet;
  }

  /** The Elo rating associated with the file (e.g., 1500) */
  public get eloRating(): EloRating {
    return this.props.eloRating;
  }

  /** A tag specifying the file type (e.g., 'usages', 'leads', 'movesets') */
  public get tag(): StatsFileTag {
    return this.props.tag;
  }

  /**
   * Private constructor enforcing use of the factory method `create`.
   * @param props Validated value object props.
   */
  private constructor(props: StatsFileMetadataProps) {
    super(props);
  }

  /**
   * Factory method to create a StatsFileMetadata instance from raw interface data.
   * @param metadata Raw metadata from parsed source or DTO.
   */
  public static create(metadata: IStatsFileMetadata): StatsFileMetadata {
    return new StatsFileMetadata({
      period: Period.getByValue(metadata.period),
      generation: GenerationNumber.getByValue(metadata.generation),
      format: FormatShorthand.getByValue(metadata.format),
      regulationSet: metadata.regulationSet ? RegulationSet.getByValue(metadata.regulationSet) : undefined,
      eloRating: EloRating.getByValue(metadata.eloRating),
      tag: StatsFileTag.getByValue(metadata.tag),
    });
  }

  /**
   * Converts the value object back into its raw data form.
   */
  public toObject(): IStatsFileMetadata {
    return {
      period: this.period.value,
      generation: this.generation.value,
      format: this.format.value,
      regulationSet: this.regulationSet ? this.regulationSet.value : undefined,
      eloRating: this.eloRating.value,
      tag: this.tag.value,
    };
  }

  /**
   * Returns a string representation of the metadata (e.g., "2025-07/usages/gen9bssregi-1500").
   */
  public toString(): string {
    let { period, generation, format, regulationSet, eloRating, tag } = this.toObject() as any;
    regulationSet = regulationSet ? `reg${regulationSet}` : '';
    return `${period}/${tag}/gen${generation}${format}${regulationSet}-${eloRating}`;
  }
}
