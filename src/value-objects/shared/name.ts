import { ValueObject } from '../../core/value-object';

/**
 * Properties required to create a Name value object.
 */
export interface NameProps {
  value: string;
}

/**
 * Value Object representing a non-empty, trimmed string name.
 */
export class Name extends ValueObject<NameProps> {
  /** The string value of the name */
  get value(): string {
    return this.props.value;
  }

  /**
   * Private constructor to enforce instantiation via factory.
   * @param props Name properties
   */
  private constructor(props: NameProps) {
    super(props);
  }

  /**
   * Factory method to create a Name instance.
   * @param name A non-empty string
   * @returns A validated Name instance
   * @throws TypeError if the name is not a non-empty string
   */
  public static create(name: string): Name {
    if (typeof name === 'string' && name.trim().length > 0) {
      return new Name({ value: name.trim() });
    } else {
      throw new TypeError('Name must be a string longer than 0.');
    }
  }
}
