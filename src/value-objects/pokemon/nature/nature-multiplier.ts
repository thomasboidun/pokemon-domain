import { ValueObject } from "../../../core/value-object";
import { NATURE_MULTIPLIERS } from "../../../domain/pokemon/nature/nature.data";
import { NatureMultiplierValue } from "../../../domain/pokemon/nature/nature.type";

/**
 * Props for the NatureMultiplier value object.
 * Represents a valid nature multiplier value (0.9, 1, or 1.1).
 */
export interface NatureMultiplierProps {
  /** The numeric multiplier value applied to a stat by a Pokémon's nature. */
  value: NatureMultiplierValue;
}

/**
 * Value Object representing a single stat multiplier from a Pokémon nature.
 * This multiplier can be 0.9 (decreased stat), 1.0 (neutral), or 1.1 (boosted stat).
 */
export class NatureMultiplier extends ValueObject<NatureMultiplierProps> {
  private static _all: NatureMultiplier[] = NATURE_MULTIPLIERS.map(value => new NatureMultiplier({ value }));

  public static get all(): readonly NatureMultiplier[] {
    return this._all;
  }

  private constructor(props: NatureMultiplierProps) {
    super(props);
  }

  /** The raw multiplier value (0.9, 1.0, or 1.1). */
  get value() {
    return this.props.value;
  }

  public static getByValue(multiplier: NatureMultiplierValue) {
    if (!NATURE_MULTIPLIERS.includes(multiplier)) {
      throw new Error(`Nature multiplier must be one of: ${NATURE_MULTIPLIERS.join(', ')}`);
    }
    const found = this.all.find(m => m.value === multiplier);

    if (!found) {
      throw new Error(``);
    }

    return found;
  }
}
