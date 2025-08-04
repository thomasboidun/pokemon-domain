import { GENERATIONS, GENERATION_NUMBERS, GENERATION_NAMES, GENERATION_SHORTHANDS } from '../../../domain/smogon/generation/generation.data';
import { IGeneration } from '../../../domain/smogon/generation/generation.interface';
import { GenerationNumberValue, GenerationNameValue, GenerationShorthandValue } from '../../../domain/smogon/generation/generation.type';
import { GenerationName } from '../../../value-objects/smogon/generation/generation-name';
import { GenerationNumber } from '../../../value-objects/smogon/generation/generation-number';
import { GenerationShorthand } from '../../../value-objects/smogon/generation/generation-shorthand';

/**
 * Props used internally by Smogon Generation entity.
 */
export interface GenerationProps {
  number: GenerationNumber;
  name: GenerationName;
  shorthand: GenerationShorthand;
}

/**
 * Entity representing a Pokémon Generation from Smogon.
 * It holds identity (name) and associated data (number, shorthand).
 */
export class Generation {
  private static readonly _all: readonly Generation[] = Object.freeze(
    GENERATIONS.map(
      (props) =>
        new Generation({
          number: GenerationNumber.getByValue(props.number),
          name: GenerationName.getByValue(props.name),
          shorthand: GenerationShorthand.getByValue(props.shorthand),
        })
    )
  );

  /** Retrieve all predefined Generation instances */
  public static get all(): readonly Generation[] {
    return this._all;
  }

  private constructor(private readonly props: GenerationProps) {}

  /** The Generation's number */
  public get number(): GenerationNumber {
    return this.props.number;
  }

  /** The Generation's name (identity) */
  public get name(): GenerationName {
    return this.props.name;
  }

  /** The Generation's shorthand */
  public get shorthand(): GenerationShorthand {
    return this.props.shorthand;
  }

  /**
   * Find a Generation by its exact number.
   * @throws If the number is invalid or not found.
   */
  public static getByNumber(number: GenerationNumberValue): Generation {
    if (!GENERATION_NUMBERS.includes(number)) {
      const min = Math.min(...GENERATION_NUMBERS);
      const max = Math.max(...GENERATION_NUMBERS);
      throw new Error(`Generation number must be an integer number between ${min} and ${max}`);
    }

    const found = this.all.find((g) => g.number.value === number);

    if (!found) {
      throw new Error(`Generation with number "${number}" not found.`);
    }

    return found;
  }

  /**
   * Find a Generation by its name.
   * @throws If the name is invalid or not found.
   */
  public static getByName(name: GenerationNameValue): Generation {
    const found = this.all.find((g) => g.name.value === name);

    if (found) {
      return found;
    }

    const names = this.all.flatMap((g) => g.name.value.split('/'));

    if (names.includes(name)) {
      const predicate = (generation: Generation) => generation.name.value.includes(name);
      return this.all.find(predicate)!;
    }

    throw new Error(`Generation with name "${name}" not found.`);
  }

  /**
   * Find a Generation by its shorthand.
   * @throws If the shorthand is invalid or not found.
   */
  public static getByShorthand(shorthand: GenerationShorthandValue): Generation {
    if (!GENERATION_SHORTHANDS.includes(shorthand)) {
      throw new Error(`Invalid generation name "${shorthand}". Must be one of ${GENERATION_SHORTHANDS.join(', ')}.`);
    }

    const found = this.all.find((g) => g.shorthand.value === shorthand);

    if (!found) {
      throw new Error(`Generation with shorthand "${shorthand}" not found.`);
    }

    return found;
  }

  /**
   * Export the raw data representation.
   */
  public toObject(): IGeneration {
    return {
      number: this.number.value,
      name: this.name.value,
      shorthand: this.shorthand.value,
    };
  }

  /**
   * Return a human-readable string representation of the Generation.
   */
  public toString(): string {
    return `GEN${this.number.value}: ${this.name.value} (${this.shorthand.value})`;
  }
}
