import { IIndividualValues } from '../../../domain/pokemon/individual-values/individual-values.interface';
import { IndividualValue } from './individual-value';
import { IndividualValues } from './individual-values';

describe('IndividualValues', () => {
  const validIVs: IIndividualValues = {
    hp: 31,
    atk: 30,
    def: 29,
    spa: 28,
    spd: 27,
    spe: 26,
  };

  describe('create()', () => {
    it('should create an IndividualValues instance with valid IVs', () => {
      const ivs = IndividualValues.create(validIVs);

      expect(ivs.hp).toBeInstanceOf(IndividualValue);
      expect(ivs.atk.value).toBe(validIVs.atk);
      expect(ivs.def.value).toBe(validIVs.def);
      expect(ivs.spa.value).toBe(validIVs.spa);
      expect(ivs.spd.value).toBe(validIVs.spd);
      expect(ivs.spe.value).toBe(validIVs.spe);
    });

    it('should return the correct object with toObject()', () => {
      const ivs = IndividualValues.create(validIVs);
      expect(ivs.toObject()).toEqual(validIVs);
    });

    it('should throw if one stat is invalid', () => {
      const invalidIVs: IIndividualValues = {
        ...validIVs,
        atk: 40 as any, // invalid (>31)
      };
      expect(() => IndividualValues.create(invalidIVs)).toThrow('Individual value must be an integer number between 0 and 31.');
    });
  });
});
