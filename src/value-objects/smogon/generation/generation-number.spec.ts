import { GenerationNumber } from './generation-number';
import { GENERATION_NUMBERS } from '../../../domain/smogon/generation/generation.data';

describe('GenerationNumber', () => {
  it('should create all predefined instances', () => {
    expect(GenerationNumber.all).toHaveLength(GENERATION_NUMBERS.length);
    const values = GenerationNumber.all.map((g) => g.value);
    expect(values).toEqual(GENERATION_NUMBERS);
  });

  it('should return correct instance for valid values', () => {
    for (const num of GENERATION_NUMBERS) {
      const instance = GenerationNumber.getByValue(num);
      expect(instance.value).toBe(num);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = GenerationNumber.getByValue(GENERATION_NUMBERS[0]);
    const b = GenerationNumber.getByValue(GENERATION_NUMBERS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => GenerationNumber.getByValue(0 as any)).toThrow();
    expect(() => GenerationNumber.getByValue(10 as any)).toThrow();
    expect(() => GenerationNumber.getByValue(1.5 as any)).toThrow();
    expect(() => GenerationNumber.getByValue('3' as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (GenerationNumber.all as GenerationNumber[]).push(GenerationNumber.getByValue(GENERATION_NUMBERS[0]));
    }).toThrow();
  });

  it('should return the string representation of the generation number', () => {
    for (const num of GENERATION_NUMBERS) {
      const instance = GenerationNumber.getByValue(num);
      expect(instance.toString()).toBe(num.toString());
    }
  });
});
