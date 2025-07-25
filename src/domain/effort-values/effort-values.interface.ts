import { EffortValueValue } from "./effort-values.type";

/**
 * Interface représentant les valeurs d'effort (Effort Values - EV) pour chaque statistique d'un Pokémon.
 * Chaque propriété correspond à une statistique spécifique et doit être un entier valide d'EV.
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
