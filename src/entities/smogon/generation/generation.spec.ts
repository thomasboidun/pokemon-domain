import { Generation } from './generation';
import { GENERATIONS, GENERATION_NAMES, GENERATION_NUMBERS, GENERATION_SHORTHANDS } from '../../../domain/smogon/generation/generation.data';
import { GenerationNumberValue, GenerationNameValue, GenerationShorthandValue } from '../../../domain/smogon/generation/generation.type';

describe('Generation', () => {
  it('should expose all generations statically', () => {
    expect(Generation.all).toHaveLength(GENERATIONS.length);
  });

  it('should return the same instance for the same generation number (singleton)', () => {
    const a = Generation.getByNumber(1);
    const b = Generation.getByName(a.name.value);
    const c = Generation.getByShorthand(a.shorthand.value);

    expect(a).toBe(b);
    expect(a).toBe(c);
  });

  it('should get generation by number', () => {
    for (const number of GENERATION_NUMBERS) {
      const gen = Generation.getByNumber(number);
      expect(gen.number.value).toBe(number);
    }
  });

  it('should throw if generation number is invalid', () => {
    expect(() => Generation.getByNumber(99 as GenerationNumberValue)).toThrow();
  });

  it('should get generation by name', () => {
    for (const name of GENERATION_NAMES) {
      const gen = Generation.getByName(name);
      expect(gen.name.value).toBe(name);
    }

    for (const name of GENERATION_NAMES.flatMap((n) => n.split('/'))) {
      const gen = Generation.getByName(name as any);
      expect(gen.name.value.includes(name)).toBe(true);
    }
  });

  it('should throw if generation name is invalid', () => {
    expect(() => Generation.getByName('Invalid' as GenerationNameValue)).toThrow();
  });

  it('should get generation by shorthand', () => {
    for (const shorthand of GENERATION_SHORTHANDS) {
      const gen = Generation.getByShorthand(shorthand);
      expect(gen.shorthand.value).toBe(shorthand);
    }
  });

  it('should throw if generation shorthand is invalid', () => {
    expect(() => Generation.getByShorthand('XYZ' as GenerationShorthandValue)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    for (const gen of Generation.all) {
      expect(() => {
        (gen as any).number = 999;
      }).toThrow();

      expect(() => {
        Object.assign(gen, { name: 'Hacked' });
      }).toThrow();
    }

    expect(() => {
      (Generation.all as Generation[]).push(Generation.getByName(GENERATION_NAMES[0]));
    }).toThrow();
  });

  it('should return raw object with toObject()', () => {
    const gen = Generation.getByNumber(1);
    const obj = gen.toObject();

    expect(obj).toEqual({
      number: 1,
      name: gen.name.value,
      shorthand: gen.shorthand.value,
    });
  });

  it('should return human-readable string with toString()', () => {
    const gen = Generation.getByNumber(1);
    expect(gen.toString()).toBe(`GEN1: ${gen.name.value} (${gen.shorthand.value})`);
  });
});
