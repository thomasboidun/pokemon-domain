import { ValueObject } from '../../../core/value-object';
import { FORMAT_SHORTHANDS } from '../../../domain/smogon/format/format.data';
import { FormatShorthandValue } from '../../../domain/smogon/format/format.type';

export interface FormatShorthandProps {
  value: FormatShorthandValue;
}

export class FormatShorthand extends ValueObject<FormatShorthandProps> {
  private static readonly _all: readonly FormatShorthand[] = Object.freeze(FORMAT_SHORTHANDS.map((value) => new FormatShorthand({ value })));

  public static get all(): readonly FormatShorthand[] {
    return this._all;
  }

  private constructor(props: FormatShorthandProps) {
    super(props);
  }

  public get value(): FormatShorthandValue {
    return this.props.value;
  }

  public static getByValue(shorthand: FormatShorthandValue): FormatShorthand {
    if (!FORMAT_SHORTHANDS.includes(shorthand)) {
      throw new Error(`Invalid format shorthand "${shorthand}". Must be one of ${FORMAT_SHORTHANDS.join(', ')}.`);
    }

    const found = this.all.find((s) => s.value === shorthand);

    if (!found) {
      throw new Error(`Format with shorthand "${shorthand}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
