import { Count } from './count';

describe('Count', () => {
  it('should create a valid Count instance', () => {
    const count = Count.create(5);
    expect(count).toBeInstanceOf(Count);
    expect(count.value).toBe(5);
  });

  it('should throw if count is negative', () => {
    expect(() => Count.create(-1)).toThrow('Count must be an integer greater than or equal to 0.');
  });

  it('should throw if count is not an integer', () => {
    expect(() => Count.create(3.14)).toThrow('Count must be an integer greater than or equal to 0.');
  });

  it('should throw if count is not a number', () => {
    expect(() => Count.create(NaN)).toThrow('Count must be an integer greater than or equal to 0.');
  });

  it('should consider two Count instances with same value as equal', () => {
    const c1 = Count.create(10);
    const c2 = Count.create(10);
    expect(c1.equals(c2)).toBe(true);
  });

  it('should consider two Count instances with different values as not equal', () => {
    const c1 = Count.create(10);
    const c2 = Count.create(11);
    expect(c1.equals(c2)).toBe(false);
  });
});
