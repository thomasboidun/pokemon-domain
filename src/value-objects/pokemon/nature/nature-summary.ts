import { ValueObject } from '../../../core/value-object';
import { NATURE_SUMMARIES } from '../../../domain/pokemon/nature/nature.data';
import { NatureSummaryValue } from '../../../domain/pokemon/nature/nature.type';

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
  private static _all: NatureSummary[] = NATURE_SUMMARIES.map((value) => new NatureSummary({ value }));

  /** Retrieve all predefined NatureSummary instances */
  public static get all(): readonly NatureSummary[] {
    return this._all;
  }

  private constructor(props: NatureSummaryProps) {
    super(props);
  }

  /** The raw nature summary string (e.g., "+SpA, -Spe"). */
  get value(): NatureSummaryValue {
    return this.props.value;
  }

  /**
   * Find a NatureSummary by its exact summary.
   * @throws If the summary is invalid or not found.
   */
  public static getByValue(summary: NatureSummaryValue): NatureSummary {
    if (!NATURE_SUMMARIES.includes(summary)) {
      throw new Error(`Invalid nature summary "${summary}". Must be one of ${NATURE_SUMMARIES.join(', ')}.`);
    }

    const found = this.all.find((g) => g.value === summary);

    if (!found) {
      throw new Error(`Nature with summary "${summary}" not found.`);
    }

    return found;
  }
}
