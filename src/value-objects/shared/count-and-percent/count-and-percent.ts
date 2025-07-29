import { ValueObject } from '../../../core/value-object';
import { ICountAndPercent } from '../../../domain/count-and-percent';
import { Count } from '../count/count';
import { Percent } from '../percent/percent';

/**
 * Properties required to create a CountAndPercent value object.
 */
export interface CountAndPercentProps {
  /** Count value object */
  count: Count;
  
  /** Percent value object */
  percent: Percent;
}

/**
 * Value Object representing a pair of count and percent values.
 * Ensures validation and encapsulation of the primitive values.
 */
export class CountAndPercent extends ValueObject<CountAndPercentProps> {
  /** Gets the Count value object */
  public get count(): Count {
    return this.props.count;
  }

  /** Gets the Percent value object */
  public get percent(): Percent {
    return this.props.percent;
  }

  /** Private constructor to enforce creation via the static factory method */
  private constructor(props: CountAndPercentProps) {
    super(props);
  }

  /**
   * Factory method to create a CountAndPercent value object from raw values.
   * @param countAndPercent Object containing raw count and percent numbers.
   * @returns A new CountAndPercent instance with validated values.
   */
  public static create(countAndPercent: ICountAndPercent): CountAndPercent {
    return new CountAndPercent({
      count: Count.create(countAndPercent.count),
      percent: Percent.create(countAndPercent.percent),
    });
  }

  /**
   * Converts the CountAndPercent value object back to a plain object with raw numbers.
   * @returns An object containing count and percent primitive values.
   */
  public toObject(): ICountAndPercent {
    return {
      count: this.count.value,
      percent: this.percent.value,
    };
  }
}
