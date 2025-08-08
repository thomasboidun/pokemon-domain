import { ValueObject } from '../../core/value-object';

/**
 * Properties required to create a Percent value object.
 */
export interface PercentProps {
  value: number;
}

/**
 * Value Object representing a percentage between 0 and 100, rounded to 3 decimals.
 */
export class Percent extends ValueObject<PercentProps> {
  /** The numeric value of the percent (0 ≤ value ≤ 100, rounded to 3 decimals) */
  public get value(): number {
    return this.props.value;
  }

  /**
   * Private constructor to enforce validation through factory method.
   * @param props Percent properties
   */
  private constructor(props: PercentProps) {
    super(props);
  }

  /**
   * Factory method to create a Percent instance.
   * @param percent A number between 0 and 100
   * @param decimals The number of digits after the decimal point
   * @returns A validated Percent instance
   * @throws Error if percent is not a valid number in the 0–100 range
   */
  public static create(percent: number, decimals: number = 3): Percent {
    if (decimals < 0 || !Number.isInteger(decimals)) {
      throw new Error('The number of digits after the decimal point must be an integer greater than or equal to zero.');
    }

    if (typeof percent === 'number' && percent >= 0 && percent <= 100) {
      return new Percent({ value: Number(percent.toFixed(decimals)) });
    }

    throw new Error('Percent must be a number between 0 and 100.');
  }

  public toString(): string {
    return this.value + '%';
  }
}
