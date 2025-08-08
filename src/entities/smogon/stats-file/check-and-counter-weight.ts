import { ICheckAndCounterWeight } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";

/**
 * Properties required to instantiate a {@link CheckAndCounterWeight}.
 */
export interface CheckAndCounterWeightProps {
  /** Aggregate weighted score reflecting the overall impact */
  score: number;
  /** Average value of the weight metric */
  avg: number;
  /** Standard deviation indicating variability in the weight */
  stdDev: number;
}

/**
 * Represents statistical weight metrics for a Pokémon check or counter.
 */
export class CheckAndCounterWeight {
  /** Aggregate weighted score reflecting the overall impact */
  public get score(): number {
    return this.props.score;
  }

  /** Average value of the weight metric */
  public get avg(): number {
    return this.props.avg;
  }

  /** Standard deviation indicating variability in the weight */
  public get stdDev(): number {
    return this.props.stdDev;
  }

  /**
   * Creates a new instance of {@link CheckAndCounterWeight}.
   * @param props - The raw weight values.
   */
  private constructor(private readonly props: CheckAndCounterWeightProps) { }

  /**
   * Factory method to create a new {@link CheckAndCounterWeight} instance.
   * @param weight - The weight metrics from parsed stats data.
   * @returns A new {@link CheckAndCounterWeight} instance.
   */
  public static create(weight: ICheckAndCounterWeight): CheckAndCounterWeight {
    return new CheckAndCounterWeight({
      score: Number(weight.score.toFixed(3)),
      avg: Number(weight.avg.toFixed(2)),
      stdDev: Number(weight.stdDev.toFixed(2)),
    });
  }

  /**
   * Converts the instance back to a plain {@link ICheckAndCounterWeight} object.
   * @returns A plain object representation of the weight metrics.
   */
  public toObject(): ICheckAndCounterWeight {
    return {
      score: this.score,
      avg: this.avg,
      stdDev: this.stdDev,
    };
  }

  /**
   * Return a human-readable string representation of the check and counter weight.
   * @example
   * ```ts
   * const weight = CheckAndCounterWeight.create({ score: 1.23456, avg: 0.9876, stdDev: 0.12345 });
   * console.log(weight.toString()); // "1.235 (0.99±0.12)"
   * ```
   */
  public toString(): string {
    return `${this.score} (${this.avg}±${this.stdDev})`;
  }
}
