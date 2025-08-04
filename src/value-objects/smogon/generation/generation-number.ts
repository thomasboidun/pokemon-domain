import { ValueObject } from '../../../core/value-object';
import { GENERATION_NUMBERS } from '../../../domain/smogon/generation/generation.data';
import { GenerationNumberValue } from '../../../domain/smogon/generation/generation.type';

/**
 * Props for the GenerationNumber value object.
 * Contains a valid Smogon generation number as defined in {@link GENERATION_NUMBERS}.
 */
export interface GenerationNumberProps {
  /** The number of the generation (e.g. 1, 2, 3, etc.) */
  value: GenerationNumberValue;
}

/**
 * Value Object representing a valid Smogon generation number.
 * Validates that the number is among the official Smogon generation numbers.
 */
export class GenerationNumber extends ValueObject<GenerationNumberProps> {
  private static _all: readonly GenerationNumber[] = Object.freeze(GENERATION_NUMBERS.map((value) => new GenerationNumber({ value })));

  /** Retrieve all predefined GenerationNumber instances */
  public static get all(): readonly GenerationNumber[] {
    return this._all;
  }

  private constructor(props: GenerationNumberProps) {
    super(props);
  }

  /** The raw generation number value */
  public get value(): GenerationNumberValue {
    return this.props.value;
  }

  /**
   * Find a GenerationNumber by its exact number.
   * @throws If the number is invalid or not found.
   */
  public static getByValue(num: GenerationNumberValue): GenerationNumber {
    if (!GENERATION_NUMBERS.includes(num)) {
      const min = Math.min(...GENERATION_NUMBERS);
      const max = Math.max(...GENERATION_NUMBERS);
      throw new Error(`Generation number must be an integer number between ${min} and ${max}`);
    }

    const found = this.all.find((g) => g.value === num);

    if (!found) {
      throw new Error(`Generation with number "${num}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value.toString();
  }
}
