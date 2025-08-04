import { INatureMutipliers } from "../../../domain/pokemon/nature/nature.interface";
import { NatureMultipliers } from "./nature-multipliers";

describe('NatureMultipliers', () => {
  it('should create a valid NatureMultipliers object', () => {
    const props = {
      hp: 1,
      atk: 1,
      def: 1,
      spa: 0.9,
      spd: 1,
      spe: 1.1,
    } as INatureMutipliers;

    const instance = NatureMultipliers.create(props);
    expect(instance).toBeInstanceOf(NatureMultipliers);
    expect(instance.toObject()).toEqual({
      hp: 1,
      atk: 1,
      def: 1,
      spa: 0.9,
      spd: 1,
      spe: 1.1,
    });
  });

  it('should be equal when multipliers are the same', () => {
    const props1 = {
      hp: 1,
      atk: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1,
    } as INatureMutipliers;

    const props2 = { ...props1 };

    const a = NatureMultipliers.create(props1);
    const b = NatureMultipliers.create(props2);

    expect(a.equals(b)).toBe(true);
  });
});
