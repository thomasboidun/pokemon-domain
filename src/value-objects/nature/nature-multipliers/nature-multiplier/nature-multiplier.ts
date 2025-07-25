import { ValueObject } from "../../../../core/value-object";
import { NatureMultiplierValue, NATURE_MULTIPLIERS } from "../../../../domain/nature";

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
  /** The raw multiplier value (0.9, 1.0, or 1.1). */
  get value() {
    return this.props.value;
  }

  private constructor(props: NatureMultiplierProps) {
    super(props);
  }

  /**
   * Factory method to create a NatureMultiplier from a primitive value.
   * @param multiplier - A number representing the nature effect on a stat.
   * Must be one of the allowed values in NATURE_MULTIPLIERS.
   * @returns A NatureMultiplier instance if valid.
   * @throws If the provided multiplier is not allowed.
   */
  public static create(multiplier: NatureMultiplierValue) {
    if (NATURE_MULTIPLIERS.includes(multiplier)) {
      return new NatureMultiplier({ value: multiplier });
    } else {
      throw new Error(`Nature multiplier must be one of: ${NATURE_MULTIPLIERS.join(', ')}`);
    }
  }
}
