import { RegulationSet } from './regulation-set';
import { REGULATION_SETS } from '../../../domain/smogon/regulation-set/regulation-set.data';

describe('RegulationSet', () => {
  it('should create all predefined instances', () => {
    const all = RegulationSet.all;
    expect(all).toHaveLength(REGULATION_SETS.length);
    expect(all.map((reg) => reg.value)).toEqual(REGULATION_SETS);
  });

  it('should return correct instance for valid values', () => {
    for (const shorthand of REGULATION_SETS) {
      const instance = RegulationSet.getByValue(shorthand);
      expect(instance.value).toBe(shorthand);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = RegulationSet.getByValue(REGULATION_SETS[0]);
    const b = RegulationSet.getByValue(REGULATION_SETS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => RegulationSet.getByValue('AZ' as any)).toThrow();
    expect(() => RegulationSet.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (RegulationSet.all as RegulationSet[]).push(RegulationSet.getByValue(REGULATION_SETS[0]));
    }).toThrow();
  });

  it('should return the string representation of the regulation set', () => {
    for (const shorthand of REGULATION_SETS) {
      const instance = RegulationSet.getByValue(shorthand);
      expect(instance.toString()).toBe(shorthand);
    }
  });
});
