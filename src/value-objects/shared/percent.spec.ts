import { Percent } from './percent';

describe('Percent', () => {
  it('should create a valid Percent instance with correct value', () => {
    const percent1 = Percent.create(42.12345, 3);
    expect(percent1).toBeInstanceOf(Percent);
    expect(percent1.value).toBe(42.123); // rounded to 3 decimal places

    const percent2 = Percent.create(42.12345, 2);
    expect(percent2).toBeInstanceOf(Percent);
    expect(percent2.value).toBe(42.12); // rounded to 2 decimal places
  });

  it('should throw if value is negative', () => {
    expect(() => Percent.create(-5)).toThrow('Percent must be a number between 0 and 100.');
  });

  it('should throw if value is greater than 100', () => {
    expect(() => Percent.create(101)).toThrow('Percent must be a number between 0 and 100.');
  });

  it('should throw if value is not a number', () => {
    expect(() => Percent.create(NaN)).toThrow('Percent must be a number between 0 and 100.');
  });

  it('should throw if decimals is lower than 0', () => {
    expect(() => Percent.create(100, -1)).toThrow('The number of digits after the decimal point must be an integer greater than or equal to zero.');
  });

  it('should throw if decimals parameter is float', () => {
    expect(() => Percent.create(100, 3.3)).toThrow('The number of digits after the decimal point must be an integer greater than or equal to zero.');
  });

  it('should consider two Percents with same value as equal', () => {
    const p1 = Percent.create(50.4567);
    const p2 = Percent.create(50.4567);
    expect(p1.equals(p2)).toBe(true);
  });

  it('should consider two Percents with different values as not equal', () => {
    const p1 = Percent.create(30);
    const p2 = Percent.create(31);
    expect(p1.equals(p2)).toBe(false);
  });

  it('should round values to 3 decimal places', () => {
    const p = Percent.create(99.99999);
    expect(p.value).toBe(100); // rounded to 3 decimal places => 100.000
  });
});
