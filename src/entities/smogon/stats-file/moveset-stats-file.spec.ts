import { MovesetStatsFile } from './moveset-stats-file';
import { MovesetStatsFileContent } from './moveset-stats-file-content';
import { StatsFileMetadata } from '../../../value-objects/smogon/stats-file/stats-file-metadata';
import { IMovesetStatsFile } from '../../../domain/smogon/stats-file/moveset-stats-file.interface';

describe('MovesetStatsFile', () => {
  const rawFileMock: IMovesetStatsFile = {
    rawUrl: 'https://smogon.com/stats/2025-07/gen9ou-1500.txt',
    parsedFilePath: '/2025-07/movesets/gen9ou-1500.json',
    content: {
      pokemons: []
    },
    metadata: {
      period: '2025-07',
      format: 'ou',
      generation: 9,
      eloRating: 1500,
      tag: 'movesets'
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create an instance from raw file data', () => {
    const instance = MovesetStatsFile.create(rawFileMock);

    expect(instance).toBeInstanceOf(MovesetStatsFile);
    expect(instance.rawUrl).toBe(rawFileMock.rawUrl);
    expect(instance.parsedFilePath).toBe(rawFileMock.parsedFilePath);
    expect(instance.content).toBeInstanceOf(MovesetStatsFileContent);
    expect(instance.metadata).toBeInstanceOf(StatsFileMetadata);
  });

  it('toObject() should return correct plain object', () => {
    const instance = MovesetStatsFile.create(rawFileMock);
    const obj = instance.toObject();

    expect(obj.rawUrl).toBe(rawFileMock.rawUrl);
    expect(obj.parsedFilePath).toBe(rawFileMock.parsedFilePath);
    expect(obj.content).toEqual(instance.content.toObject());
    expect(obj.metadata).toEqual(instance.metadata.toObject());
  });

  it('toString() should return rawUrl', () => {
    const instance = MovesetStatsFile.create(rawFileMock);
    expect(instance.toString()).toBe(rawFileMock.rawUrl);
  });
});
