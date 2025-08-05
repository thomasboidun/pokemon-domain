import { StatsFileMetadata } from './stats-file-metadata';
import { Period } from '../period/period';
import { GenerationNumber } from '../generation/generation-number';
import { FormatShorthand } from '../format/format-shorthand';
import { RegulationSet } from '../regulation-set/regulation-set';
import { EloRating } from '../elo-rating/elo-rating';
import { StatsFileTag } from './stats-file-tag';
import { IStatsFileMetadata } from '../../../domain/smogon/stats-file/stats-file-metadata.interface';

describe('StatsFileMetadata', () => {
  const validMetadata: IStatsFileMetadata = {
    period: '2025-07',
    generation: 9,
    format: 'bss',
    regulationSet: 'i',
    eloRating: 1500,
    tag: 'usages',
  };

  it('should create a StatsFileMetadata instance from valid data', () => {
    const metadata = StatsFileMetadata.create(validMetadata);

    expect(metadata.period).toBeInstanceOf(Period);
    expect(metadata.generation).toBeInstanceOf(GenerationNumber);
    expect(metadata.format).toBeInstanceOf(FormatShorthand);
    expect(metadata.regulationSet).toBeInstanceOf(RegulationSet);
    expect(metadata.eloRating).toBeInstanceOf(EloRating);
    expect(metadata.tag).toBeInstanceOf(StatsFileTag);
  });

  it('should convert back to the original raw object', () => {
    const metadata = StatsFileMetadata.create(validMetadata);
    expect(metadata.toObject()).toEqual(validMetadata);
  });

  it('should provide a valid string representation', () => {
    const metadata = StatsFileMetadata.create(validMetadata);
    expect(metadata.toString()).toBe('2025-07/usages/gen9bssregi-1500');
  });

  it('should handle undefined regulationSet', () => {
    const { regulationSet, ...partial } = validMetadata;
    const metadata = StatsFileMetadata.create({ ...partial, format: 'ou' });

    expect(metadata.regulationSet).toBeUndefined();
    expect(metadata.toObject().regulationSet).toBeUndefined();
    expect(metadata.toString()).toBe('2025-07/usages/gen9ou-1500');
  });
});
