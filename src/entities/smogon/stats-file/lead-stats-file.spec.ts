import { LeadStatsFile } from './lead-stats-file';
import { LeadStatsFileContent } from './lead-stats-file-content';
import { StatsFileMetadata } from '../../../value-objects/smogon/stats-file/stats-file-metadata';
import { ILeadStatsFile } from '../../../domain/smogon/stats-file/lead-stats-file.interface';

describe('LeadStatsFile', () => {
  const rawUrl = 'https://www.smogon.com/stats/2025-07/gen9ou-1500.txt';
  const parsedFilePath = 'data/stats/2025-07/leads/gen9ou-1500.json';

  const mockFile: ILeadStatsFile = {
    rawUrl,
    parsedFilePath,
    metadata: {
      period: '2025-07',
      generation: 9,
      format: 'ou',
      eloRating: 1500,
      tag: 'leads',
    },
    content: {
      totalLeads: 2207976,
      pokemons: [
        {
          rank: 1,
          name: 'Landorus-Therian',
          overallPercent: 4.215,
          raw: {
            count: 81603,
            percent: 3.696,
          },
        },
      ],
    },
  };

  it('should create a valid LeadStatsFile from valid input', () => {
    const file = LeadStatsFile.create(mockFile);

    expect(file.rawUrl).toBe(rawUrl);
    expect(file.parsedFilePath).toBe(parsedFilePath);
    expect(file.metadata).toBeInstanceOf(StatsFileMetadata);
    expect(file.content).toBeInstanceOf(LeadStatsFileContent);
  });

  it('should throw an error if metadata.tag is not "leads"', () => {
    const invalid: ILeadStatsFile = { ...mockFile, metadata: { ...mockFile.metadata, tag: 'movesets' } };

    expect(() => LeadStatsFile.create(invalid)).toThrow('[LeadStatsFile] Invalid metadata tag: moves');
  });

  it('should convert back to ILeadStatsFile via toObject()', () => {
    const file = LeadStatsFile.create(mockFile);
    const plain = file.toObject();

    expect(plain).toEqual(mockFile);
  });
});
