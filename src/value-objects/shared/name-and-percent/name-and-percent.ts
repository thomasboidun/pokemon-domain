import { ValueObject } from '../../../core/value-object';
import { INameAndPercent } from '../../../domain/name-and-percent/name-and-percent.interface';
import { Name } from '../name/name';
import { Percent } from '../percent/percent';

/**
 * Properties required to create a NameAndPercent value object.
 */
export interface NameAndPercentProps {
  /** Name value object */
  name: Name;

  /** Percent value object */
  percent: Percent;
}

/**
 * Value Object representing a combination of a name and a percentage value.
 * Provides validation, parsing, and conversion utilities.
 */
export class NameAndPercent extends ValueObject<NameAndPercentProps> {
  /** Gets the Name value object */
  public get name(): Name {
    return this.props.name;
  }

  /** Gets the Percent value object */
  public get percent(): Percent {
    return this.props.percent;
  }

  /** Private constructor to enforce creation via static factory methods */
  private constructor(props: NameAndPercentProps) {
    super(props);
  }

  /**
   * Factory method to create a NameAndPercent value object from raw values.
   * @param nameAndPercent Object containing raw name string and percent number.
   * @returns A new NameAndPercent instance with validated values.
   */
  public static create(nameAndPercent: INameAndPercent): NameAndPercent {
    return new NameAndPercent({
      name: Name.create(nameAndPercent.name),
      percent: Percent.create(nameAndPercent.percent),
    });
  }

  /**
   * Parses a string of format "Name 50%", "Name 50.1%", or "Name 50.123%" 
   * into a NameAndPercent value object.
   * @param str Input string to parse (e.g. "Overgrow 12.345%").
   * @returns A NameAndPercent instance parsed from the string.
   * @throws TypeError if the input string does not match the expected format.
   */
  public static fromString(str: string): NameAndPercent {
    const regex = /(.+?)\s(\d{1,3}(?:\.\d{1,3})?)%/;
    const match = str.match(regex);
    if (!match) throw new Error('Invalid format for NameAndPercent string.');
    const name = match[1].trim();
    const percent = parseFloat(match[2]);
    return this.create({ name, percent });
  }

  /**
   * Converts the NameAndPercent value object to a plain object.
   * @returns An object with name as string and percent as number.
   */
  public toObject(): INameAndPercent {
    return {
      name: this.props.name.value,
      percent: this.props.percent.value,
    };
  }
}
