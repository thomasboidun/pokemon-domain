import { ValueObject } from "../../../core/value-object";
import { EFFORT_VALUES } from "../../../domain/pokemon/effort-values/effort-values.data";
import { EffortValueValue } from "../../../domain/pokemon/effort-values/effort-values.type";

/**
 * Properties for EffortValue value object
 */
export interface EffortValueProps {
  /** The effort value, must be an integer between 0 and 252 */
  value: EffortValueValue;
}

/**
 * Value Object representing a Pokémon Effort Value (EV).
 * EVs are integer values between 0 and 252 inclusive.
 * This class enforces validation on creation.
 */
export class EffortValue extends ValueObject<EffortValueProps> {
  /**
   * Gets the effort value number.
   */
  get value(): EffortValueValue {
    return this.props.value;
  }

  /**
   * Private constructor to enforce usage of the factory method.
   * @param props EffortValue properties
   */
  private constructor(props: EffortValueProps) {
    super(props);
  }

  /**
   * Factory method to create a valid EffortValue instance.
   * Throws an error if the value is invalid.
   * @param ev Effort value to create (integer between 0 and 252)
   * @returns EffortValue instance
   * @throws Error if ev is not an integer between 0 and 252 inclusive
   */
  public static create(ev: EffortValueValue): EffortValue {
    const min = Math.min(...EFFORT_VALUES);
    const max = Math.max(...EFFORT_VALUES);
    if (typeof ev === 'number' && ev >= min && ev <= max && Number.isInteger(ev)) {
      return new EffortValue({ value: ev });
    } else {
      throw new Error(`Effort value must be an integer number between ${min} and ${max}.`);
    }
  }
}
