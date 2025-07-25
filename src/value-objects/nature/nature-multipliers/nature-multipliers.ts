import { ValueObject } from "../../../core/value-object";
import { INatureMutipliers } from "../../../domain/nature";
import { NatureMultiplier } from "./nature-multiplier/nature-multiplier";

/**
 * Internal props for the NatureMultipliers value object.
 * Each stat is wrapped in a NatureMultiplier VO.
 */
export interface NatureMultipliersProps {
  hp: NatureMultiplier;
  atk: NatureMultiplier;
  def: NatureMultiplier;
  spa: NatureMultiplier;
  spd: NatureMultiplier;
  spe: NatureMultiplier;
}

/**
 * Value Object representing all stat multipliers affected by a Pokémon's nature.
 * Each stat (except HP) may be increased (1.1), decreased (0.9), or remain neutral (1.0).
 */
export class NatureMultipliers extends ValueObject<NatureMultipliersProps> {
  /** Multiplier applied to HP (Hit Points) according to nature. Always 1. */
  get hp(): NatureMultiplier {
    return this.props.hp;
  }

  /** Multiplier applied to Attack according to nature. */
  get atk(): NatureMultiplier {
    return this.props.atk;
  }

  /** Multiplier applied to Defense according to nature. */
  get def(): NatureMultiplier {
    return this.props.def;
  }

  /** Multiplier applied to Special Attack according to nature. */
  get spa(): NatureMultiplier {
    return this.props.spa;
  }

  /** Multiplier applied to Special Defense according to nature. */
  get spd(): NatureMultiplier {
    return this.props.spd;
  }

  /** Multiplier applied to Speed according to nature. */
  get spe(): NatureMultiplier {
    return this.props.spe;
  }

  private constructor(props: NatureMultipliersProps) {
    super(props);
  }

  /**
   * Factory method to create a NatureMultipliers instance from primitive values.
   * @param multipliers - The raw stat multipliers for each stat.
   * @returns A fully constructed NatureMultipliers value object.
   */
  public static create(multipliers: INatureMutipliers): NatureMultipliers {
    return new NatureMultipliers({
      hp: NatureMultiplier.create(1),
      atk: NatureMultiplier.create(multipliers.atk),
      def: NatureMultiplier.create(multipliers.def),
      spa: NatureMultiplier.create(multipliers.spa),
      spd: NatureMultiplier.create(multipliers.spd),
      spe: NatureMultiplier.create(multipliers.spe),
    });
  }

  /**
   * Converts this value object to its raw primitive representation.
   * @returns A plain object with numeric multipliers for each stat.
   */
  public toObject(): INatureMutipliers {
    return {
      hp: 1,
      atk: this.atk.value,
      def: this.def.value,
      spa: this.spa.value,
      spd: this.spd.value,
      spe: this.spe.value,
    };
  }
}
