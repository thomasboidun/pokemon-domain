import { EffortValueValue } from "../../../domain/pokemon/effort-values/effort-values.type";
import { NATURE_NAMES } from "../../../domain/pokemon/nature/nature.data";
import { NatureNameValue } from "../../../domain/pokemon/nature/nature.type";
import { ISpreadStat } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";
import { EffortValues } from "../../../value-objects/pokemon/effort-values/effort-values";
import { NatureName } from "../../../value-objects/pokemon/nature/nature-name";
import { Percent } from "../../../value-objects/shared/percent";

export interface SpreadStatProps {
  nature: NatureName;
  evs: EffortValues;
  percent: Percent;
}

export class SpreadStat {
  get nature(): NatureName {
    return this.props.nature;
  }

  get evs(): EffortValues {
    return this.props.evs;
  }

  get percent(): Percent {
    return this.props.percent;
  }

  private constructor(private readonly props: SpreadStatProps) { }

  public static create(spread: ISpreadStat): SpreadStat {
    return new SpreadStat({
      nature: NatureName.getByValue(spread.nature),
      evs: EffortValues.create(spread.evs),
      percent: Percent.create(spread.percent),
    });
  }

  public static fromString(str: string): SpreadStat | null {
    if (str.startsWith('Other')) return null;

    const [natureRaw, evString, percentRaw] = str.trim().split(' ');
    if (!NATURE_NAMES.includes(natureRaw as any)) return null;
    const nature = natureRaw as NatureNameValue;

    const evParts = evString.split('/').map(Number);
    if (evParts.length !== 6 || evParts.some(isNaN)) return null;
    const [hp, atk, def, spa, spd, spe] = evParts as EffortValueValue[];
    const evs = { hp, atk, def, spa, spd, spe };

    const percent = parseFloat(percentRaw.replace('%', ''));
    if (isNaN(percent)) return null;

    return SpreadStat.create({ nature, evs, percent });
  }

  public toObject(): ISpreadStat {
    return {
      nature: this.nature.value,
      evs: this.evs.toObject(),
      percent: this.percent.value,
    };
  }

  /**
   * Return a human-readable string representation of the moveset spread stat (e.g., Adamant 4/252/0/0/0/252 100%)
   */
  public toString(): string {
    return `${this.nature.value} ${this.evs} ${this.percent}`;
  }
}
