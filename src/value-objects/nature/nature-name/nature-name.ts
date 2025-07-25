import { ValueObject } from '../../../core/value-object';
import { NATURE_NAMES, NatureNameValue } from '../../../domain/nature';

/**
 * Props for the NatureName value object.
 * Contains a valid Pokémon nature name as defined in {@link NATURE_NAMES}.
 */
export interface NatureNameProps {
  /** The name of the Pokémon nature (e.g. "Adamant", "Timid", etc.) */
  value: NatureNameValue;
}

/**
 * Value Object representing a valid Pokémon nature name.
 * Validates that the name is among the official nature names.
 */
export class NatureName extends ValueObject<NatureNameProps> {
  /** The raw nature name value */
  get value(): NatureNameValue {
    return this.props.value;
  }

  private constructor(props: NatureNameProps) {
    super(props);
  }

  /**
   * Factory method to create a NatureName instance from a string.
   * @param name - The nature name to validate and wrap.
   * @returns A NatureName instance if valid.
   * @throws If the provided name is not in the allowed list.
   */
  public static create(name: NatureNameValue): NatureName {
    if (NATURE_NAMES.includes(name)) {
      return new NatureName({ value: name });
    } else {
      throw new Error(
        `Nature name must be one of: ${NATURE_NAMES.map((n) => `"${n}"`).join(' or ')}`
      );
    }
  }
}
