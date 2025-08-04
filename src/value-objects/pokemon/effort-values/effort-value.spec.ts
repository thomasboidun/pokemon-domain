import { EffortValueValue } from '../../../domain/pokemon/effort-values/effort-values.type';
import { EffortValue } from './effort-value';

describe('EffortValue', () => {
  it('should create a valid EffortValue for valid inputs', () => {
    const validValues = [0, 50, 100, 252];
    for (const val of validValues) {
      const ev = EffortValue.create(val as EffortValueValue);
      expect(ev.value).toBe(val);
    }
  });

  it('should throw for invalid values', () => {
    const invalidValues = [-1, 253, 3.14, NaN, Infinity, -Infinity, null as any, undefined as any, '100' as any];
    for (const val of invalidValues) {
      expect(() => EffortValue.create(val)).toThrow();
    }
  });

  it('should be equal if two EffortValues have the same value', () => {
    const ev1 = EffortValue.create(100);
    const ev2 = EffortValue.create(100);
    expect(ev1.equals(ev2)).toBe(true);
  });

  it('should not be equal if two EffortValues have different values', () => {
    const ev1 = EffortValue.create(100);
    const ev2 = EffortValue.create(50);
    expect(ev1.equals(ev2)).toBe(false);
  });
});
