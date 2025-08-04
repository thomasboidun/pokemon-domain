import { IEffortValues } from '../../../domain/pokemon/effort-values/effort-values.interface';
import { EffortValues } from './effort-values';

describe('EffortValues', () => {
  const validEvs: IEffortValues = {
    hp: 100,
    atk: 100,
    def: 100,
    spa: 50,
    spd: 30,
    spe: 30,
  };

  it('should create an instance with valid EVs', () => {
    const evs = EffortValues.create(validEvs);
    expect(evs).toBeInstanceOf(EffortValues);
    expect(evs.hp.value).toBe(validEvs.hp);
    expect(evs.atk.value).toBe(validEvs.atk);
  });

  it('should throw if sum of EVs exceeds 510', () => {
    const invalidEvs: IEffortValues = {
      hp: 200,
      atk: 200,
      def: 200,
      spa: 0,
      spd: 0,
      spe: 0,
    };
    expect(() => EffortValues.create(invalidEvs)).toThrow(TypeError);
  });

  it('should correctly sum EV values statically', () => {
    const sum = EffortValues.getSum(validEvs);
    expect(sum).toBe(validEvs.hp + validEvs.atk + validEvs.def + validEvs.spa + validEvs.spd + validEvs.spe);
  });

  it('should correctly sum EV values via instance method', () => {
    const evs = EffortValues.create(validEvs);
    expect(evs.sum()).toBe(validEvs.hp + validEvs.atk + validEvs.def + validEvs.spa + validEvs.spd + validEvs.spe);
  });

  it('should convert to object correctly', () => {
    const evs = EffortValues.create(validEvs);
    expect(evs.toObject()).toEqual(validEvs);
  });
});
