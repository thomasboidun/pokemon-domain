import { ValueObject } from "../../../core/value-object";
import { IIndividualValues } from "../../../domain/pokemon/individual-values/individual-values.interface";
import { IndividualValue } from "./individual-value";

/**
 * Properties required to create an IndividualValues value object.
 */
export interface IndivualValuesProps {
  hp: IndividualValue;
  atk: IndividualValue;
  def: IndividualValue;
  spa: IndividualValue;
  spd: IndividualValue;
  spe: IndividualValue;
}

/**
 * Value Object representing all Individual Values (IVs) of a Pokémon.
 */
export class IndividualValues extends ValueObject<IndivualValuesProps> {
  /** Individual Value for Hit Points (HP) */
  public get hp(): IndividualValue {
    return this.props.hp;
  }

  /** Individual Value for Attack */
  public get atk(): IndividualValue {
    return this.props.atk;
  }

  /** Individual Value for Defense */
  public get def(): IndividualValue {
    return this.props.def;
  }

  /** Individual Value for Special Attack */
  public get spa(): IndividualValue {
    return this.props.spa;
  }

  /** Individual Value for Special Defense */
  public get spd(): IndividualValue {
    return this.props.spd;
  }

  /** Individual Value for Speed */
  public get spe(): IndividualValue {
    return this.props.spe;
  }

  /**
   * Private constructor to enforce creation via the factory method.
   * @param props IndividualValues properties
   */
  private constructor(props: IndivualValuesProps) {
    super(props);
  }

  /**
   * Factory method to create an IndividualValues instance.
   * @param ivs Object with IV numbers for each stat
   * @returns IndividualValues instance
   */
  public static create(ivs: IIndividualValues): IndividualValues {
    return new IndividualValues({
      hp: IndividualValue.create(ivs.hp),
      atk: IndividualValue.create(ivs.atk),
      def: IndividualValue.create(ivs.def),
      spa: IndividualValue.create(ivs.spa),
      spd: IndividualValue.create(ivs.spd),
      spe: IndividualValue.create(ivs.spe),
    });
  }

  /**
   * Returns a plain object representation of the IndividualValues.
   * @returns Object with IV numbers for each stat
   */
  public toObject(): IIndividualValues {
    return {
      hp: this.hp.value,
      atk: this.atk.value,
      def: this.def.value,
      spa: this.spa.value,
      spd: this.spd.value,
      spe: this.spe.value,
    };
  }
}
