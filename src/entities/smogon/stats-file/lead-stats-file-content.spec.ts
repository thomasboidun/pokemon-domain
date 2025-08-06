import { LeadStatsFileContent } from './lead-stats-file-content';
import { ILeadStatsFileContent } from '../../../domain/smogon/stats-file/lead-stats-file.interface';
import { PokemonLeadStats } from './pokemon-lead-stats';

describe('LeadStatsFileContent', () => {
  const mockContent: ILeadStatsFileContent = {
    totalLeads: 12345,
    pokemons: [
      {
        rank: 1,
        name: 'Garchomp',
        overallPercent: 25.3,
        raw: {
          count: 10234,
          percent: 21.4,
        },
      },
      {
        rank: 2,
        name: 'Landorus-Therian',
        overallPercent: 18.7,
        raw: {
          count: 8450,
          percent: 17.2,
        },
      },
    ],
  };

  it('should create a LeadStatsFileContent instance', () => {
    const stats = LeadStatsFileContent.create(mockContent);
    expect(stats).toBeInstanceOf(LeadStatsFileContent);
    expect(stats.totalLeads.value).toBe(mockContent.totalLeads);
    expect(stats.pokemons.length).toBe(2);
    expect(stats.pokemons[0]).toBeInstanceOf(PokemonLeadStats);
  });

  it('should serialize to the original object', () => {
    const stats = LeadStatsFileContent.create(mockContent);
    expect(stats.toObject()).toEqual(mockContent);
  });

  it('should be immutable', () => {
    const stats = LeadStatsFileContent.create(mockContent);
    expect(() => {
      // @ts-expect-error
      stats.totalLeads = undefined;
    }).toThrow();
    expect(() => {
      // @ts-expect-error
      stats.pokemons = [];
    }).toThrow();
  });
});
