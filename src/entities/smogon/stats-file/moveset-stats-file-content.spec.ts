// moveset-stats-file-content.spec.ts
import { MovesetStatsFileContent } from './moveset-stats-file-content';
import { PokemonMovesetStats } from './pokemon-moveset-stats';
import { IMovesetStatsFileContent } from '../../../domain/smogon/stats-file/moveset-stats-file.interface';

// Créons un mock pour PokemonMovesetStats pour isoler le test
jest.mock('./pokemon-moveset-stats', () => ({
  PokemonMovesetStats: {
    create: jest.fn(),
  }
}));

describe('MovesetStatsFileContent', () => {
  let sampleData: IMovesetStatsFileContent;
  let mockPokemonInstance: any;

  beforeEach(() => {
    jest.clearAllMocks();

    // Données brutes simulées
    sampleData = {
      pokemons: [
        {
          name: 'Pikachu',
          rawCount: 123,
          avgWeight: 45.6,
          viabilityCeiling: 1692,
          abilities: [{ name: 'Static', percent: 90.5 }],
          items: [{ name: 'Light Ball', percent: 85.0 }],
          spreads: [
            { nature: 'Jolly', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 }, percent: 60.0 }
          ],
          moves: [{ name: 'Thunderbolt', percent: 95.0 }],
          teraTypes: [{ name: 'Electric', percent: 80.0 }],
          teammates: [{ name: 'Raichu', percent: 20.0 }],
          checksAndCounters: [
            {
              name: 'Garchomp',
              weight: { score: 3, avg: 60.5, stdDev: 5.0 },
              KOed: 70.0,
              switchedOut: 30.0
            }
          ]
        }
      ]
    };

    // On simule un objet PokemonMovesetStats avec une méthode toObject()
    mockPokemonInstance = { toObject: jest.fn(() => sampleData.pokemons[0]) };
    (PokemonMovesetStats.create as jest.Mock).mockReturnValue(mockPokemonInstance);
  });

  it('should create an instance with PokemonMovesetStats instances', () => {
    const fileContent = MovesetStatsFileContent.create(sampleData);

    expect(fileContent).toBeInstanceOf(MovesetStatsFileContent);
    expect(PokemonMovesetStats.create).toHaveBeenCalledTimes(1);
    expect(fileContent.pokemons[0]).toBe(mockPokemonInstance);
  });

  it('should return correct plain object from toObject()', () => {
    const fileContent = MovesetStatsFileContent.create(sampleData);
    const obj = fileContent.toObject();

    expect(mockPokemonInstance.toObject).toHaveBeenCalledTimes(1);
    expect(obj).toEqual(sampleData);
  });

  it('should expose pokemons getter correctly', () => {
    const fileContent = MovesetStatsFileContent.create(sampleData);

    expect(fileContent.pokemons).toHaveLength(1);
    expect(fileContent.pokemons[0]).toBe(mockPokemonInstance);
  });
});
