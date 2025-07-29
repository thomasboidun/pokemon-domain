import { ValueObject } from '../../../core/value-object';

/**
 * Properties required to create a Count value object.
 */
export interface CountProps {
  value: number;
}

/**
 * Value Object representing a non-negative integer count.
 * Used when a quantity must be validated as a whole number ≥ 0.
 */
export class Count extends ValueObject<CountProps> {
  /** The numeric value of the count */
  public get value(): number {
    return this.props.value;
  }

  /**
   * Private constructor to enforce validation through factory method.
   * @param props Count properties
   */
  private constructor(props: CountProps) {
    super(props);
  }

  /**
   * Factory method to create a Count instance.
   * @param count A non-negative integer
   * @returns A validated Count instance
   * @throws Error if count is not a non-negative integer
   */
  public static create(count: number): Count {
    if (typeof count === 'number' && count >= 0 && Number.isInteger(count)) {
      return new Count({ value: count });
    } else {
      throw new Error('Count must be an integer greater than or equal to 0.');
    }
  }
}
