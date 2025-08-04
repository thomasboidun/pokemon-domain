import { FormatShorthand } from './format-shorthand';
import { FORMAT_SHORTHANDS } from '../../../domain/smogon/format/format.data';

describe('FormatShorthand', () => {
  it('should create all predefined instances', () => {
    const all = FormatShorthand.all;
    expect(all).toHaveLength(FORMAT_SHORTHANDS.length);
    expect(all.map((g) => g.value)).toEqual(FORMAT_SHORTHANDS);
  });

  it('should return correct instance for valid values', () => {
    for (const shorthand of FORMAT_SHORTHANDS) {
      const instance = FormatShorthand.getByValue(shorthand);
      expect(instance.value).toBe(shorthand);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = FormatShorthand.getByValue(FORMAT_SHORTHANDS[0]);
    const b = FormatShorthand.getByValue(FORMAT_SHORTHANDS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => FormatShorthand.getByValue('AZ' as any)).toThrow();
    expect(() => FormatShorthand.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (FormatShorthand.all as FormatShorthand[]).push(FormatShorthand.getByValue(FORMAT_SHORTHANDS[0]));
    }).toThrow();
  });

  it('should return the string representation of the format shorthand', () => {
    for (const shorthand of FORMAT_SHORTHANDS) {
      const instance = FormatShorthand.getByValue(shorthand);
      expect(instance.toString()).toBe(shorthand);
    }
  });
});
