import { ValueObject } from '../../../core/value-object';
import { PERIODS } from '../../../domain/smogon/period/period.data';
import { PeriodValue } from '../../../domain/smogon/period/period.type';

export interface PeriodProps {
  value: PeriodValue;
}

export class Period extends ValueObject<PeriodProps> {
  private static _all: readonly Period[] = Object.freeze(PERIODS.map((value) => new Period({ value })));

  public static get all(): readonly Period[] {
    return this._all;
  }

  private constructor(props: PeriodProps) {
    super(props);
  }

  public get value(): PeriodValue {
    return this.props.value;
  }

  public static getByValue(period: PeriodValue): Period {
    if (!PERIODS.includes(period)) {
      throw new Error(``);
    }

    const found = this.all.find((p) => p.value === period);

    if (!found) {
      throw new Error(``);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
