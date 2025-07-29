import { ValueObject } from "../../../core/value-object";
import { INDIVIDUAL_VALUES, IndividualValueValue } from "../../../domain/individual-values";

/**
 * Properties for IndividualValue value object
 */
export interface IndividualValueProps {
  /** The effort value, must be an integer between 0 and 31 */
  value: IndividualValueValue;
}

/**
 * Value Object representing a Pokémon Individual Value (IV).
 * IVs are integer values between 0 and 31 inclusive.
 * This class enforces validation on creation.
 */
export class IndividualValue extends ValueObject<IndividualValueProps> {
  /**
   * Gets the effort value number.
   */
  public get value(): IndividualValueValue {
    return this.props.value;
  }

  /**
   * Private constructor to enforce usage of the factory method.
   * @param props IndividualValue properties
   */
  private constructor(props: IndividualValueProps) {
    super(props);
  }

  /**
   * Factory method to create a valid IndividualValue instance.
   * Throws an error if the value is invalid.
   * @param iv Individual value to create (integer between 0 and 31)
   * @returns IndividualValue instance
   * @throws Error if iv is not an integer between 0 and 31 inclusive
   */
  public static create(iv: number): IndividualValue {
    const min = Math.min(...INDIVIDUAL_VALUES);
    const max = Math.max(...INDIVIDUAL_VALUES);
    if (typeof iv === 'number' && iv >= min && iv <= max && Number.isInteger(iv)) {
      const value = iv as IndividualValueValue;
      return new IndividualValue({ value });
    }
    throw new TypeError(`Individual value must be an integer number between ${min} and ${max}.`);
  }
}
