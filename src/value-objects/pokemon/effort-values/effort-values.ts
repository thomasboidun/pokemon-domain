import { ValueObject } from '../../../core/value-object';
import { IEffortValues } from '../../../domain/pokemon/effort-values/effort-values.interface';
import { EffortValue } from './effort-value';

/**
 * Properties required to create an EffortValues value object.
 */
export interface EffortValuesProps {
  hp: EffortValue;
  atk: EffortValue;
  def: EffortValue;
  spa: EffortValue;
  spd: EffortValue;
  spe: EffortValue;
}

/**
 * Value Object representing all Effort Values (EVs) of a Pokémon.
 * Validates the total sum of EVs does not exceed 510.
 */
export class EffortValues extends ValueObject<EffortValuesProps> {
  /** Effort Value for Hit Points (HP) */
  public get hp(): EffortValue {
    return this.props.hp;
  }

  /** Effort Value for Attack */
  public get atk(): EffortValue {
    return this.props.atk;
  }

  /** Effort Value for Defense */
  public get def(): EffortValue {
    return this.props.def;
  }

  /** Effort Value for Special Attack */
  public get spa(): EffortValue {
    return this.props.spa;
  }

  /** Effort Value for Special Defense */
  public get spd(): EffortValue {
    return this.props.spd;
  }

  /** Effort Value for Speed */
  public get spe(): EffortValue {
    return this.props.spe;
  }

  /**
   * Private constructor to enforce creation via the factory method.
   * @param props EffortValues properties
   */
  private constructor(props: EffortValuesProps) {
    super(props);
  }

  /**
   * Factory method to create an EffortValues instance.
   * Validates the sum of all EVs does not exceed 510.
   * @param evs Object with EV numbers for each stat
   * @returns EffortValues instance
   * @throws TypeError if total EV sum exceeds 510
   */
  public static create(evs: IEffortValues): EffortValues {
    if (this.getSum(evs) <= 510) {
      return new EffortValues({
        hp: EffortValue.create(evs.hp),
        atk: EffortValue.create(evs.atk),
        def: EffortValue.create(evs.def),
        spa: EffortValue.create(evs.spa),
        spd: EffortValue.create(evs.spd),
        spe: EffortValue.create(evs.spe),
      });
    } else {
      throw new TypeError(`Effort values sum must not exceed 510.`);
    }
  }

  /**
   * Calculates the sum of given EV values.
   * @param evs Object with EV numbers for each stat
   * @returns Sum of all EVs
   */
  public static getSum(evs: IEffortValues): number {
    const { hp, atk, def, spa, spd, spe } = evs;
    const values = [hp, atk, def, spa, spd, spe];
    return values.reduce((partialSum: number, ev) => partialSum + ev, 0);
  }

  /**
   * Calculates the sum of this EffortValues instance's EVs.
   * @returns Sum of all EVs
   */
  public sum(): number {
    return EffortValues.getSum(this.toObject());
  }

  /**
   * Returns a plain object representation of the EffortValues.
   * @returns Object with EV numbers for each stat
   */
  public toObject(): IEffortValues {
    return {
      hp: this.hp.value,
      atk: this.atk.value,
      def: this.def.value,
      spa: this.spa.value,
      spd: this.spd.value,
      spe: this.spe.value,
    };
  }

  public toString(): string {
    const { hp, atk, def, spa, spd, spe } = this.toObject();
    return `${hp}/${atk}/${def}/${spa}/${spd}/${spe}`;
  }
}
