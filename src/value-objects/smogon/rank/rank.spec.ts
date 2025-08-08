import { Rank } from './rank';

describe('Rank', () => {
  it('should create a valid Rank instance', () => {
    const rank = Rank.create(5);
    expect(rank).toBeInstanceOf(Rank);
    expect(rank.value).toBe(5);
  });

  it('should throw errorif rank is negative', () => {
    expect(() => Rank.create(-1)).toThrow();
  });

  it('should throw error if rank is not an integer', () => {
    expect(() => Rank.create(3.14)).toThrow();
  });

  it('should throw error if rank is not a number', () => {
    expect(() => Rank.create(NaN)).toThrow();
  });

  it('should consider two Rank instances with same value as equal', () => {
    const c1 = Rank.create(10);
    const c2 = Rank.create(10);
    expect(c1.equals(c2)).toBe(true);
  });

  it('should consider two Rank instances with different values as not equal', () => {
    const c1 = Rank.create(10);
    const c2 = Rank.create(11);
    expect(c1.equals(c2)).toBe(false);
  });
});
