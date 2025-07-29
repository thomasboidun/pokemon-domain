import { Name } from './name';

describe('Name', () => {
  it('should create a valid Name instance', () => {
    const name = Name.create(' Pikachu ');
    expect(name).toBeInstanceOf(Name);
    expect(name.value).toBe('Pikachu'); // trims whitespace
  });

  it('should throw if name is an empty string', () => {
    expect(() => Name.create('')).toThrow(TypeError);
    expect(() => Name.create('')).toThrow('Name must be a string longer than 0.');
  });

  it('should throw if name is only whitespace', () => {
    expect(() => Name.create('   ')).toThrow(TypeError);
  });

  it('should throw if name is not a string', () => {
    expect(() => Name.create(undefined as any)).toThrow(TypeError);
    expect(() => Name.create(null as any)).toThrow(TypeError);
    expect(() => Name.create(123 as any)).toThrow(TypeError);
  });

  it('should consider two Name instances with same value as equal', () => {
    const n1 = Name.create('Eevee');
    const n2 = Name.create('Eevee');
    expect(n1.equals(n2)).toBe(true);
  });

  it('should consider two Name instances with different values as not equal', () => {
    const n1 = Name.create('Charmander');
    const n2 = Name.create('Charmeleon');
    expect(n1.equals(n2)).toBe(false);
  });
});
