import { PokemonUsageStats } from './pokemon-usage-stats';
import { IPokemonUsageStats } from '../../../domain/smogon/stats-file/usage-stats-file.interface';

describe('PokemonUsageStats', () => {
  const rawUsage: IPokemonUsageStats = {
    rank: 1,
    name: 'Garchomp',
    overallPercent: 25.3,
    raw: { count: 123456, percent: 27.1 },
    real: { count: 112233, percent: 26.4 },
  };

  it('should create a valid PokemonUsageStats instance', () => {
    const usage = PokemonUsageStats.create(rawUsage);

    expect(usage.rank.value).toBe(rawUsage.rank);
    expect(usage.name.value).toBe(rawUsage.name);
    expect(usage.overallPercent.value).toBe(rawUsage.overallPercent);
    expect(usage.raw.toObject()).toEqual(rawUsage.raw);
    expect(usage.real.toObject()).toEqual(rawUsage.real);
  });

  it('should convert back to raw object with toObject()', () => {
    const usage = PokemonUsageStats.create(rawUsage);
    expect(usage.toObject()).toEqual(rawUsage);
  });
});
