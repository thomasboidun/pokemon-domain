import { PokemonLeadStats } from './pokemon-lead-stats';
import { Rank } from '../../../value-objects/smogon/rank/rank';
import { Name } from '../../../value-objects/shared/name';
import { Percent } from '../../../value-objects/shared/percent';
import { CountAndPercent } from '../../../value-objects/shared/count-and-percent';
import { IPokemonLeadStats } from '../../../domain/smogon/stats-file/lead-stats-file.interface';

describe('PokemonLeadStats', () => {
  const validLead: IPokemonLeadStats = {
    rank: 1,
    name: 'Garchomp',
    overallPercent: 25.3,
    raw: {
      count: 10234,
      percent: 21.4,
    },
  };

  it('should create a PokemonLeadStats instance', () => {
    const stats = PokemonLeadStats.create(validLead);
    expect(stats).toBeInstanceOf(PokemonLeadStats);
    expect(stats.rank).toBeInstanceOf(Rank);
    expect(stats.name).toBeInstanceOf(Name);
    expect(stats.overallPercent).toBeInstanceOf(Percent);
    expect(stats.raw).toBeInstanceOf(CountAndPercent);
  });

  it('should return the correct values through getters', () => {
    const stats = PokemonLeadStats.create(validLead);
    expect(stats.rank.value).toBe(validLead.rank);
    expect(stats.name.value).toBe(validLead.name);
    expect(stats.overallPercent.value).toBe(validLead.overallPercent);
    expect(stats.raw.toObject()).toEqual(validLead.raw);
  });

  it('should serialize to the original object', () => {
    const stats = PokemonLeadStats.create(validLead);
    expect(stats.toObject()).toEqual(validLead);
  });

  it('should be immutable', () => {
    const stats = PokemonLeadStats.create(validLead);
    expect(() => {
      // @ts-expect-error
      stats.rank = Rank.create(2);
    }).toThrow();
  });
});
