import { ValueObject } from '../../../core/value-object';
import { NATURE_NAMES } from '../../../domain/pokemon/nature/nature.data';
import { NatureNameValue } from '../../../domain/pokemon/nature/nature.type';

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
  private static _all: NatureName[] = NATURE_NAMES.map((value) => new NatureName({ value }));

  /** Retrieve all predefined NatureName instances */
  public static get all(): readonly NatureName[] {
    return this._all;
  }

  private constructor(props: NatureNameProps) {
    super(props);
  }

  /** The raw nature name value */
  get value(): NatureNameValue {
    return this.props.value;
  }

  /**
   * Find a NatureName by its exact name.
   * @throws If the name is invalid or not found.
   */
  public static getByValue(name: NatureNameValue): NatureName {
    if (!NATURE_NAMES.includes(name)) {
      throw new Error(`Invalid nature name "${name}". Must be one of ${NATURE_NAMES.join(', ')}.`);
    }

    const found = this.all.find((g) => g.value === name);

    if (!found) {
      throw new Error(`Nature with name "${name}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
