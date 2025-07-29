import { ValueObject } from '../../../core/value-object';

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
   * @returns A validated Percent instance
   * @throws Error if percent is not a valid number in the 0–100 range
   */
  public static create(percent: number): Percent {
    if (typeof percent === 'number' && percent >= 0 && percent <= 100) {
      return new Percent({ value: Number(percent.toFixed(3)) });
    }
    throw new Error('Percent must be a number between 0 and 100.');
  }
}
