import { ValueObject } from '../../../core/value-object';
import { STATS_FILE_TAGS } from '../../../domain/smogon/stats-file/stats-file.data';
import { StatsFileTagValue } from '../../../domain/smogon/stats-file/stats-file.type';

export interface StatsFileTagProps {
  value: StatsFileTagValue;
}

export class StatsFileTag extends ValueObject<StatsFileTagProps> {
  private static _all: readonly StatsFileTag[] = Object.freeze(STATS_FILE_TAGS.map((value) => new StatsFileTag({ value })));

  public static get all(): readonly StatsFileTag[] {
    return this._all;
  }

  private constructor(props: StatsFileTagProps) {
    super(props);
  }

  public get value(): StatsFileTagValue {
    return this.props.value;
  }

  public static getByValue(tag: StatsFileTagValue): StatsFileTag {
    if (!STATS_FILE_TAGS.includes(tag)) {
      throw new Error(`Invalid stats file tag "${tag}". Must be one of ${STATS_FILE_TAGS.join(', ')}.`);
    }

    const found = this.all.find((t) => t.value === tag);

    if (!found) {
      throw new Error(`Stats file tag "${tag}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
