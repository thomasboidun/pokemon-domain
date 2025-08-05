import { STATS_FILE_TAGS } from '../../../domain/smogon/stats-file/stats-file.data';
import { StatsFileTag } from './stats-file-tag';

describe('StatsFileTag', () => {
  it('should create all predefined instances', () => {
    const all = StatsFileTag.all;
    expect(all).toHaveLength(STATS_FILE_TAGS.length);
    expect(all.map((tag) => tag.value)).toEqual(STATS_FILE_TAGS);
  });

  it('should return correct instance for valid values', () => {
    for (const tag of STATS_FILE_TAGS) {
      const instance = StatsFileTag.getByValue(tag);
      expect(instance.value).toBe(tag);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = StatsFileTag.getByValue(STATS_FILE_TAGS[0]);
    const b = StatsFileTag.getByValue(STATS_FILE_TAGS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => StatsFileTag.getByValue('AZ' as any)).toThrow();
    expect(() => StatsFileTag.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (StatsFileTag.all as StatsFileTag[]).push(StatsFileTag.getByValue(STATS_FILE_TAGS[0]));
    }).toThrow();
  });

  it('should return the string representation of the stats file tag', () => {
    for (const tag of STATS_FILE_TAGS) {
      const instance = StatsFileTag.getByValue(tag);
      expect(instance.toString()).toBe(tag.toString());
    }
  });
});
