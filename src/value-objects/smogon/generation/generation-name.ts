import { ValueObject } from '../../../core/value-object';
import { GENERATION_NAMES } from '../../../domain/smogon/generation/generation.data';
import { GenerationNameValue } from '../../../domain/smogon/generation/generation.type';

/**
 * Props for the GenerationName value object.
 * Contains a valid Smogon generation name as defined in {@link GENERATION_NAMES}.
 */
export interface GenerationNameProps {
  /** The name of the generation (e.g. "Red/Blue", "Gold/Silver", etc.) */
  value: GenerationNameValue;
}

/**
 * Value Object representing a valid Smogon generation name.
 * Validates that the name is among the official Smogon generation names.
 */
export class GenerationName extends ValueObject<GenerationNameProps> {
  private static _all: readonly GenerationName[] = Object.freeze(GENERATION_NAMES.map((value) => new GenerationName({ value })));

  /** Retrieve all predefined GenerationName instances */
  public static get all(): readonly GenerationName[] {
    return this._all;
  }

  private constructor(props: GenerationNameProps) {
    super(props);
  }

  /** The raw generation name value */
  public get value(): GenerationNameValue {
    return this.props.value;
  }

  /**
   * Find a GenerationName by its exact name.
   * @throws If the name is invalid or not found.
   */
  public static getByValue(name: GenerationNameValue): GenerationName {
    if (!GENERATION_NAMES.includes(name)) {
      throw new Error(`Invalid generation name "${name}". Must be one of ${GENERATION_NAMES.join(', ')}.`);
    }

    const found = this.all.find((g) => g.value === name);

    if (!found) {
      throw new Error(`Generation with name "${name}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
