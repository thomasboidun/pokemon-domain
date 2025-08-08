import { ValueObject } from '../../../core/value-object';
import { GENERATION_SHORTHANDS } from '../../../domain/smogon/generation/generation.data';
import { GenerationShorthandValue } from '../../../domain/smogon/generation/generation.type';

/**
 * Props for the GenerationShorthand value object.
 * Contains a valid Smogon generation shorthand as defined in {@link GENERATION_SHORTHANDS}.
 */
export interface GenerationShorthandProps {
  /** The shorthand of the generation (e.g. "RB", "GS", etc.) */
  value: GenerationShorthandValue;
}

/**
 * Value Object representing a valid Smogon generation shorthand.
 * Validates that the shorthand is among the official Smogon generation shorthands.
 */
export class GenerationShorthand extends ValueObject<GenerationShorthandProps> {
  private static _all: readonly GenerationShorthand[] = Object.freeze(GENERATION_SHORTHANDS.map((value) => new GenerationShorthand({ value })));

  /** Retrieve all predefined GenerationShorthand instances */
  public static get all(): readonly GenerationShorthand[] {
    return this._all;
  }

  private constructor(props: GenerationShorthandProps) {
    super(props);
  }

  /** The raw generation shorthand value */
  public get value(): GenerationShorthandValue {
    return this.props.value;
  }

  /**
   * Find a GenerationShorthand by its exact shorthand.
   * @throws If the shorthand is invalid or not found.
   */
  public static getByValue(shorthand: GenerationShorthandValue): GenerationShorthand {
    if (!GENERATION_SHORTHANDS.includes(shorthand)) {
      throw new Error(`Invalid generation shorthand "${shorthand}". Must be one of ${GENERATION_SHORTHANDS.join(', ')}.`);
    }

    const found = this.all.find((s) => s.value === shorthand);

    if (!found) {
      throw new Error(`Generation with shorthand "${shorthand}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
