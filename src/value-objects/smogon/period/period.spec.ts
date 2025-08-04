import { Period } from './period';
import { PERIODS } from '../../../domain/smogon/period/period.data';

describe('Period', () => {
  it('should create all predefined instances', () => {
    const all = Period.all;
    expect(all).toHaveLength(PERIODS.length);
    expect(all.map((g) => g.value)).toEqual(PERIODS);
  });

  it('should return correct instance for valid values', () => {
    for (const name of PERIODS) {
      const instance = Period.getByValue(name);
      expect(instance.value).toBe(name);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = Period.getByValue(PERIODS[0]);
    const b = Period.getByValue(PERIODS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => Period.getByValue('0000-00' as any)).toThrow();
    expect(() => Period.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (Period.all as Period[]).push(Period.getByValue(PERIODS[0]));
    }).toThrow();
  });

  it('should return the string representation of the generation name', () => {
    for (const name of PERIODS) {
      const instance = Period.getByValue(name);
      expect(instance.toString()).toBe(name);
    }
  });
});
