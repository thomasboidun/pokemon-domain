import { EffortValueValue } from "./effort-values.type";

/**
 * Interface displaying Effort Values (EV) for each Pokémon stat.
 * Each property corresponds to a specific statistic and must be a valid integer value.
 */
export interface IEffortValues {
  /** Effort Value for Hit Points (HP) */
  hp: EffortValueValue;

  /** Effort Value for Attack */
  atk: EffortValueValue;

  /** Effort Value for Defense */
  def: EffortValueValue;

  /** Effort Value for Special Attack */
  spa: EffortValueValue;

  /** Effort Value for Special Defense */
  spd: EffortValueValue;

  /** Effort Value for Speed */
  spe: EffortValueValue;
}
