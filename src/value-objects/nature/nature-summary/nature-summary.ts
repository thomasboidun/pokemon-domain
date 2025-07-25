import { ValueObject } from '../../../core/value-object';
import { NATURE_SUMMARIES, NatureSummaryValue } from '../../../domain/nature';

/**
 * Props for the NatureSummary value object.
 * Wraps a valid summary string representing stat changes from a Pokémon nature.
 */
export interface NatureSummaryProps {
  /** Summary string describing which stat is increased and which is decreased. */
  value: NatureSummaryValue;
}

/**
 * Value Object representing a summary of a Pokémon nature's effect.
 * Each summary describes one increased stat and one decreased stat (e.g., "+Atk, -Def").
 */
export class NatureSummary extends ValueObject<NatureSummaryProps> {
  /** The raw nature summary string (e.g., "+SpA, -Spe"). */
  get value(): NatureSummaryValue {
    return this.props.value;
  }

  private constructor(props: NatureSummaryProps) {
    super(props);
  }

  /**
   * Factory method to create a NatureSummary instance from a string.
   * @param summary - The nature summary to wrap.
   * @returns A NatureSummary instance if valid.
   * @throws If the summary is not in the list of allowed values.
   */
  public static create(summary: NatureSummaryValue): NatureSummary {
    if (NATURE_SUMMARIES.includes(summary)) {
      return new NatureSummary({ value: summary });
    } else {
      throw new Error(
        `Nature summary must be one of: ${NATURE_SUMMARIES.map((s) => `"${s}"`).join(' or ')}`
      );
    }
  }
}
