import { NameAndPercent } from './name-and-percent';
import { Name } from '../name/name';
import { Percent } from '../percent/percent';

describe('NameAndPercent', () => {
  describe('create()', () => {
    it('should create a valid NameAndPercent instance', () => {
      const data = { name: 'Overgrow', percent: 12.345 };
      const nap = NameAndPercent.create(data);

      expect(nap).toBeInstanceOf(NameAndPercent);
      expect(nap.name).toBeInstanceOf(Name);
      expect(nap.percent).toBeInstanceOf(Percent);
      expect(nap.name.value).toBe(data.name);
      expect(nap.percent.value).toBeCloseTo(data.percent, 3);
    });

    it('should throw if name is invalid', () => {
      expect(() => NameAndPercent.create({ name: '', percent: 50 })).toThrow();
    });

    it('should throw if percent is invalid', () => {
      expect(() => NameAndPercent.create({ name: 'Test', percent: -1 })).toThrow();
      expect(() => NameAndPercent.create({ name: 'Test', percent: 101 })).toThrow();
    });
  });

  describe('fromString()', () => {
    it('should parse a valid string', () => {
      const nap = NameAndPercent.fromString('Overgrow 12.345%');
      expect(nap.name.value).toBe('Overgrow');
      expect(nap.percent.value).toBeCloseTo(12.345, 3);
    });

    it('should parse integer percentage', () => {
      const nap = NameAndPercent.fromString('Blaze 50%');
      expect(nap.name.value).toBe('Blaze');
      expect(nap.percent.value).toBe(50);
    });

    it('should throw Error for invalid format', () => {
      expect(() => NameAndPercent.fromString('InvalidString')).toThrow(Error);
      expect(() => NameAndPercent.fromString('Name 1234%')).toThrow(Error);
    });
  });

  describe('toObject()', () => {
    it('should return plain object representation', () => {
      const data = { name: 'Torrent', percent: 33.333 };
      const nap = NameAndPercent.create(data);

      expect(nap.toObject()).toEqual(data);
    });
  });
});
