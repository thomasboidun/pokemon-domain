import { ValueObject } from '../../../core/value-object';
import { REGULATION_SETS } from '../../../domain/smogon/regulation-set/regulation-set.data';
import { RegulationSetValue } from '../../../domain/smogon/regulation-set/regulation-set.type';

export interface RegulationSetProps {
  value: RegulationSetValue;
}

export class RegulationSet extends ValueObject<RegulationSetProps> {
  public static _all: readonly RegulationSet[] = Object.freeze(REGULATION_SETS.map((value) => new RegulationSet({ value })));

  public static get all(): readonly RegulationSet[] {
    return this._all;
  }

  private constructor(props: RegulationSetProps) {
    super(props);
  }

  public get value(): RegulationSetValue {
    return this.props.value;
  }

  public static getByValue(regulationSet: RegulationSetValue): RegulationSet {
    if (!REGULATION_SETS.includes(regulationSet)) {
      throw new Error(`Invalid regulation set "${regulationSet}". Must be one of ${REGULATION_SETS.join(', ')}.`);
    }

    const found = this.all.find((rs) => rs.value === regulationSet);

    if (!found) {
      throw new Error(`Regulation set "${regulationSet}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value;
  }
}
