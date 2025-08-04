import { GenerationShorthand } from './generation-shorthand';
import { GENERATION_SHORTHANDS } from '../../../domain/smogon/generation/generation.data';

describe('GenerationShorthand', () => {
  it('should create all predefined instances', () => {
    const all = GenerationShorthand.all;
    expect(all).toHaveLength(GENERATION_SHORTHANDS.length);
    expect(all.map((g) => g.value)).toEqual(GENERATION_SHORTHANDS);
  });

  it('should return correct instance for valid values', () => {
    for (const shorthand of GENERATION_SHORTHANDS) {
      const instance = GenerationShorthand.getByValue(shorthand);
      expect(instance.value).toBe(shorthand);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = GenerationShorthand.getByValue(GENERATION_SHORTHANDS[0]);
    const b = GenerationShorthand.getByValue(GENERATION_SHORTHANDS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => GenerationShorthand.getByValue('AZ' as any)).toThrow();
    expect(() => GenerationShorthand.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (GenerationShorthand.all as GenerationShorthand[]).push(GenerationShorthand.getByValue(GENERATION_SHORTHANDS[0]));
    }).toThrow();
  });

  it('should return the string representation of the generation shorthand', () => {
    for (const shorthand of GENERATION_SHORTHANDS) {
      const instance = GenerationShorthand.getByValue(shorthand);
      expect(instance.toString()).toBe(shorthand);
    }
  });
});
