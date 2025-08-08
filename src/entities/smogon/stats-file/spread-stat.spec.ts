import { ISpreadStat } from '../../../domain/smogon/stats-file/moveset-stats-file.interface';
import { SpreadStat } from './spread-stat';

describe('SpreadStat', () => {
  const validSpread: ISpreadStat = {
    nature: 'Adamant' as const,
    evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
    percent: 100
  };

  describe('create()', () => {
    it('should create SpreadStat instance from valid ISpreadStat', () => {
      const spreadStat = SpreadStat.create(validSpread);
      expect(spreadStat).toBeInstanceOf(SpreadStat);
      expect(spreadStat.nature.value).toBe(validSpread.nature);
      expect(spreadStat.evs.toObject()).toEqual(validSpread.evs);
      expect(spreadStat.percent.value).toBe(validSpread.percent);
    });
  });

  describe('fromString()', () => {
    it('should parse valid string correctly', () => {
      const input = 'Adamant 4/252/0/0/0/252 100%';
      const spread = SpreadStat.fromString(input);
      expect(spread).toBeInstanceOf(SpreadStat);
      expect(spread?.nature.value).toBe('Adamant');
      expect(spread?.evs.toObject()).toEqual(validSpread.evs);
      expect(spread?.percent.value).toBe(100);
    });

    it('should return null if string starts with "Other"', () => {
      expect(SpreadStat.fromString('Other')).toBeNull();
    });

    it('should return null if nature is invalid', () => {
      expect(SpreadStat.fromString('InvalidNature 4/252/0/0/0/252 100%')).toBeNull();
    });

    it('should return null if EVs are invalid', () => {
      expect(SpreadStat.fromString('Adamant 4/252/0/0/252 100%')).toBeNull(); // only 5 values instead of 6
      expect(SpreadStat.fromString('Adamant 4/252/0/0/0/NaN 100%')).toBeNull();
    });

    it('should return null if percent is not a number', () => {
      expect(SpreadStat.fromString('Adamant 4/252/0/0/0/252 abc%')).toBeNull();
    });
  });

  describe('toObject()', () => {
    it('should return object matching ISpreadStat', () => {
      const spread = SpreadStat.create(validSpread);
      expect(spread.toObject()).toEqual(validSpread);
    });
  });

  describe('toString()', () => {
    it('should return formatted string', () => {
      const spread = SpreadStat.create(validSpread);
      const expected = 'Adamant 4/252/0/0/0/252 100%';
      expect(spread.toString()).toBe(expected);
    });
  });
});
