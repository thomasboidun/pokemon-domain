import { GenerationName } from './generation-name';
import { GENERATION_NAMES } from '../../../domain/smogon/generation/generation.data';

describe('GenerationName', () => {
  it('should create all predefined instances', () => {
    const all = GenerationName.all;
    expect(all).toHaveLength(GENERATION_NAMES.length);
    expect(all.map((g) => g.value)).toEqual(GENERATION_NAMES);
  });

  it('should return correct instance for valid values', () => {
    for (const name of GENERATION_NAMES) {
      const instance = GenerationName.getByValue(name);
      expect(instance.value).toBe(name);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = GenerationName.getByValue(GENERATION_NAMES[0]);
    const b = GenerationName.getByValue(GENERATION_NAMES[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => GenerationName.getByValue('Fake/Gen' as any)).toThrow();
    expect(() => GenerationName.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (GenerationName.all as GenerationName[]).push(GenerationName.getByValue(GENERATION_NAMES[0]));
    }).toThrow();
  });

  it('should return the string representation of the generation name', () => {
    for (const name of GENERATION_NAMES) {
      const instance = GenerationName.getByValue(name);
      expect(instance.toString()).toBe(name);
    }
  });
});
