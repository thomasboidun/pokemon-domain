import { IndividualValueValue } from './individual-values.type';

/**
 * Interface displaying Individual Values (IV) for each Pokémon stat.
 * Each property corresponds to a specific statistic and must be a valid integer value.
 */
export interface IIndividualValues {
  /** Individual Value for Hit Points (HP) */
  hp: IndividualValueValue;

  /** Individual Value for Attack */
  atk: IndividualValueValue;

  /** Individual Value for Defense */
  def: IndividualValueValue;

  /** Individual Value for Special Attack */
  spa: IndividualValueValue;

  /** Individual Value for Special Defense */
  spd: IndividualValueValue;

  /** Individual Value for Speed */
  spe: IndividualValueValue;
}
