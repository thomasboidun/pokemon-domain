import { IUsageStatsFile } from '../../../domain/smogon/stats-file/usage-stats-file.interface';
import { Count } from '../../../value-objects/shared/count';
import { EloRating } from '../../../value-objects/smogon/elo-rating/elo-rating';
import { FormatShorthand } from '../../../value-objects/smogon/format/format-shorthand';
import { GenerationNumber } from '../../../value-objects/smogon/generation/generation-number';
import { Period } from '../../../value-objects/smogon/period/period';
import { RegulationSet } from '../../../value-objects/smogon/regulation-set/regulation-set';
import { StatsFileMetadata } from '../../../value-objects/smogon/stats-file/stats-file-metadata';
import { StatsFileTag } from '../../../value-objects/smogon/stats-file/stats-file-tag';
import { UsageStatsFile } from './usage-stats-file';
import { UsageStatsFileContent } from './usage-stats-file-content';

describe('UsageStatsFile', () => {
  const mockFile: IUsageStatsFile = {
    rawUrl: 'https://www.smogon.com/stats/2025-07/gen9bssregi-1500.txt',
    parsedFilePath: '2025-07/usages/gen9bssregi-1500.json',
    content: { totalBattles: 40093, avgWeightTeam: 0.627, pokemons: [] },
    metadata: {
      period: '2025-07',
      generation: 9,
      format: 'bss',
      regulationSet: 'i',
      eloRating: 1500,
      tag: 'usages',
    },
  };

  it('should create a UsageStatsFile from raw data', () => {
    const file = UsageStatsFile.create(mockFile);

    expect(file.rawUrl).toBe(mockFile.rawUrl);
    expect(file.parsedFilePath).toBe(mockFile.parsedFilePath);
    expect(file.content).toBeInstanceOf(UsageStatsFileContent);
    expect(file.content.totalBattles).toBeInstanceOf(Count);
    expect(file.content.totalBattles.value).toBe(mockFile.content.totalBattles);
    expect(file.content.avgWeightTeam).toBe(mockFile.content.avgWeightTeam);
    expect(file.content.pokemons.length).toBe(mockFile.content.pokemons.length);
    expect(file.metadata).toBeInstanceOf(StatsFileMetadata);
    expect(file.metadata.period).toBeInstanceOf(Period);
    expect(file.metadata.period.value).toBe(mockFile.metadata.period);
    expect(file.metadata.generation).toBeInstanceOf(GenerationNumber);
    expect(file.metadata.generation.value).toBe(mockFile.metadata.generation);
    expect(file.metadata.format).toBeInstanceOf(FormatShorthand);
    expect(file.metadata.format.value).toBe(mockFile.metadata.format);
    expect(file.metadata.regulationSet).toBeInstanceOf(RegulationSet);
    expect(file.metadata.regulationSet!.value).toBe(mockFile.metadata.regulationSet);
    expect(file.metadata.eloRating).toBeInstanceOf(EloRating);
    expect(file.metadata.eloRating.value).toBe(mockFile.metadata.eloRating);
    expect(file.metadata.tag).toBeInstanceOf(StatsFileTag);
    expect(file.metadata.tag.value).toBe(mockFile.metadata.tag);
  });

  it('should convert to a plain object', () => {
    const file = UsageStatsFile.create(mockFile);
    const obj = file.toObject();
    expect(obj).toEqual(mockFile);
  });

  it('toString should return parsed file path', () => {
    const file = UsageStatsFile.create(mockFile);
    expect(file.toString()).toBe(mockFile.parsedFilePath);
  });
});
