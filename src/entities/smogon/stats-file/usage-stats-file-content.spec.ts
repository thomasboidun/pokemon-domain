import { UsageStatsFileContent } from './usage-stats-file-content';
import { IUsageStatsFileContent } from '../../../domain/smogon/stats-file/usage-stats-file.interface';

describe('UsageStatsFileContent', () => {
  const rawContent: IUsageStatsFileContent = {
    totalBattles: 123456,
    avgWeightTeam: 1520.67,
    pokemons: [
      {
        rank: 1,
        name: 'Garchomp',
        overallPercent: 25.3,
        raw: { count: 90000, percent: 27.1 },
        real: { count: 80000, percent: 26.4 },
      },
      {
        rank: 2,
        name: 'Landorus-Therian',
        overallPercent: 22.0,
        raw: { count: 75000, percent: 23.4 },
        real: { count: 70000, percent: 22.8 },
      },
    ],
  };

  it('should create a valid UsageStatsFileContent instance', () => {
    const content = UsageStatsFileContent.create(rawContent);

    expect(content.totalBattles.value).toBe(rawContent.totalBattles);
    expect(content.avgWeightTeam).toBeCloseTo(rawContent.avgWeightTeam);
    expect(content.pokemons).toHaveLength(rawContent.pokemons.length);
    expect(content.pokemons[0].name.value).toBe(rawContent.pokemons[0].name);
  });

  it('should convert back to raw object with toObject()', () => {
    const content = UsageStatsFileContent.create(rawContent);
    expect(content.toObject()).toEqual(rawContent);
  });

  it('should return readonly array for pokemons property', () => {
    const content = UsageStatsFileContent.create(rawContent);
    expect(() => {
      (content.pokemons as any).push(content.pokemons[0]);
    }).toThrow();

    expect(() => {
      (content.pokemons[0] as any).name = 'Hacked';
    }).toThrow();
  });
});
