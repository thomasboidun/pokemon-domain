import { NATURES, NATURE_NAMES, NATURE_SUMMARIES, INature } from "../../domain/nature";
import { NatureName, NatureMultipliers, NatureSummary } from "../../value-objects/nature";

/**
 * Props used internally by Nature entity.
 */
export interface NatureProps {
  name: NatureName;
  multipliers: NatureMultipliers;
  summary: NatureSummary;
}

/**
 * Entity representing a Pokémon Nature.
 * It holds identity (name) and behavior (multipliers, summary).
 */
export class Nature {
  private static _all: Nature[] = NATURES.map(
    (n) =>
      new Nature({
        name: NatureName.create(n.name),
        multipliers: NatureMultipliers.create(n.multipliers),
        summary: NatureSummary.create(n.summary),
      })
  );

  /** Retrieve all predefined Nature instances */
  public static get all(): readonly Nature[] {
    return this._all;
  }

  private constructor(private readonly props: NatureProps) { }

  /** The Nature's name (identity) */
  public get name(): NatureName {
    return this.props.name;
  }

  /** Stat multipliers defined by this Nature */
  public get multipliers(): NatureMultipliers {
    return this.props.multipliers;
  }

  /** Summary describing this Nature's effect */
  public get summary(): NatureSummary {
    return this.props.summary;
  }

  /**
   * Find a Nature by its exact name.
   * @throws If the name is invalid or not found.
   */
  public static getByName(name: (typeof NATURE_NAMES)[number]): Nature {
    if (!NATURE_NAMES.includes(name)) {
      throw new Error(`Invalid nature name "${name}". Must be one of: ${NATURE_NAMES.join(', ')}`);
    }
    const found = this._all.find((n) => n.name.value === name);
    if (!found) {
      throw new Error(`Nature with name "${name}" not found.`);
    }
    return found;
  }

  /**
   * Find a Nature by its summary string.
   * @throws If the summary is invalid or not found.
   */
  public static getBySummary(summary: (typeof NATURE_SUMMARIES)[number]): Nature {
    if (!NATURE_SUMMARIES.includes(summary)) {
      throw new Error(`Invalid nature summary "${summary}". Must be one of: ${NATURE_SUMMARIES.join(', ')}`);
    }
    const found = this._all.find((n) => n.summary.value === summary);
    if (!found) {
      throw new Error(`Nature with summary "${summary}" not found.`);
    }
    return found;
  }

  /**
   * Export the raw data representation.
   */
  public toObject(): INature {
    return {
      name: this.name.value,
      multipliers: this.multipliers.toObject(),
      summary: this.summary.value,
    };
  }

  /**
   * Return a human-readable string representation of the Nature.
   */
  public toString(): string {
    return this.name.value + (this.summary.value !== '' ? ` (${this.summary.value})` : '');
  }
}
