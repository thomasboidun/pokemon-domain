import { CheckAndCounterWeight } from './check-and-counter-weight';
import { ICheckAndCounterWeight } from '../../../domain/smogon/stats-file/moveset-stats-file.interface';

describe('CheckAndCounterWeight', () => {
  const rawWeight: ICheckAndCounterWeight = {
    score: 1.23456,
    avg: 0.98765,
    stdDev: 0.12345
  };

  it('should create an instance with rounded values', () => {
    const weight = CheckAndCounterWeight.create(rawWeight);
    expect(weight.score).toBe(1.235); // Rounded to 3 decimals
    expect(weight.avg).toBe(0.99);    // Rounded to 2 decimals
    expect(weight.stdDev).toBe(0.12); // Rounded to 2 decimals
  });

  it('should return the correct object via toObject()', () => {
    const weight = CheckAndCounterWeight.create(rawWeight);
    expect(weight.toObject()).toEqual({
      score: 1.235,
      avg: 0.99,
      stdDev: 0.12
    });
  });

  it('should return the correct string via toString()', () => {
    const weight = CheckAndCounterWeight.create(rawWeight);
    expect(weight.toString()).toBe('1.235 (0.99±0.12)');
  });

  it('should handle already rounded values without modification', () => {
    const roundedWeight: ICheckAndCounterWeight = {
      score: 2.111,
      avg: 1.22,
      stdDev: 0.33
    };
    const weight = CheckAndCounterWeight.create(roundedWeight);
    expect(weight.score).toBe(2.111);
    expect(weight.avg).toBe(1.22);
    expect(weight.stdDev).toBe(0.33);
  });
});
