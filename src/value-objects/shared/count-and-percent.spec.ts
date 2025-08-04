import { Count } from './count';
import { CountAndPercent } from './count-and-percent';
import { Percent } from './percent';

describe('CountAndPercent', () => {
  describe('create()', () => {
    it('should create a valid CountAndPercent instance', () => {
      const data = { count: 10, percent: 25.5 };
      const cap = CountAndPercent.create(data);

      expect(cap).toBeInstanceOf(CountAndPercent);
      expect(cap.count).toBeInstanceOf(Count);
      expect(cap.percent).toBeInstanceOf(Percent);
      expect(cap.count.value).toBe(data.count);
      expect(cap.percent.value).toBeCloseTo(data.percent, 3);
    });

    it('should throw if Count is invalid', () => {
      expect(() => CountAndPercent.create({ count: -1, percent: 50 })).toThrow();
    });

    it('should throw if Percent is invalid', () => {
      expect(() => CountAndPercent.create({ count: 10, percent: 200 })).toThrow();
    });
  });

  describe('toObject()', () => {
    it('should return a plain object with primitive values', () => {
      const data = { count: 5, percent: 75 };
      const cap = CountAndPercent.create(data);

      const obj = cap.toObject();
      expect(obj).toEqual(data);
    });
  });
});
