import { EloRating } from './elo-rating';
import { ELO_RATINGS } from '../../../domain/smogon/elo-rating/elo-rating.data';

describe('EloRating', () => {
  it('should create all predefined instances', () => {
    const all = EloRating.all;
    expect(all).toHaveLength(ELO_RATINGS.length);
    expect(all.map((elo) => elo.value)).toEqual(ELO_RATINGS);
  });

  it('should return correct instance for valid values', () => {
    for (const elo of ELO_RATINGS) {
      const instance = EloRating.getByValue(elo);
      expect(instance.value).toBe(elo);
    }
  });

  it('should return the same instance for identical values (singleton)', () => {
    const a = EloRating.getByValue(ELO_RATINGS[0]);
    const b = EloRating.getByValue(ELO_RATINGS[0]);
    expect(a).toBe(b); // same reference
  });

  it('should throw if value is invalid', () => {
    expect(() => EloRating.getByValue('AZ' as any)).toThrow();
    expect(() => EloRating.getByValue(1 as any)).toThrow();
  });

  it('should not allow mutation of the all array', () => {
    expect(() => {
      (EloRating.all as EloRating[]).push(EloRating.getByValue(ELO_RATINGS[0]));
    }).toThrow();
  });

  it('should return the string representation of the regulation set', () => {
    for (const elo of ELO_RATINGS) {
      const instance = EloRating.getByValue(elo);
      expect(instance.toString()).toBe(elo.toString());
    }
  });
});
