import { PokemonMovesetStats } from './pokemon-moveset-stats';
import { IPokemonMovesetStats } from '../../../domain/smogon/stats-file/moveset-stats-file.interface';

/** First moveset appeared in {@link https://www.smogon.com/stats/2025-07/movesets/gen9ou-1500.txt} file */
const mockData: IPokemonMovesetStats = {
  name: 'Great Tusk',
  rawCount: 650397,
  avgWeight: 0.6476746991470402,
  viabilityCeiling: 96,
  abilities: [
    { name: 'Protosynthesis', percent: 100.0 }
  ],
  items: [
    { name: 'Heavy-Duty Boots', percent: 31.337 },
    { name: 'Rocky Helmet', percent: 23.935 },
    { name: 'Booster Energy', percent: 22.475 },
    { name: 'Leftovers', percent: 11.806 },
    { name: 'Assault Vest', percent: 5.152 },
    { name: 'Choice Scarf', percent: 2.171 },
  ],
  spreads: [
    { nature: 'Jolly', evs: { hp: 0, atk: 252, def: 0, spa: 0, spd: 4, spe: 252 }, percent: 25.179 },
    { nature: 'Jolly', evs: { hp: 252, atk: 4, def: 0, spa: 0, spd: 0, spe: 252 }, percent: 18.557 },
    { nature: 'Jolly', evs: { hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252 }, percent: 18.112 },
    { nature: 'Jolly', evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 }, percent: 2.595 },
    { nature: 'Impish', evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 }, percent: 1.986 },
    { nature: 'Impish', evs: { hp: 252, atk: 0, def: 92, spa: 0, spd: 0, spe: 164 }, percent: 1.531 },
  ],
  moves: [
    { name: 'Rapid Spin', percent: 96.081 },
    { name: 'Headlong Rush', percent: 85.302 },
    { name: 'Ice Spinner', percent: 80.601 },
    { name: 'Stealth Rock', percent: 40.937 },
    { name: 'Close Combat', percent: 26.599 },
    { name: 'Knock Off', percent: 26.204 },
    { name: 'Bulk Up', percent: 13.589 },
    { name: 'Earthquake', percent: 11.528 },
  ],
  teraTypes: [
    { name: 'Steel', percent: 29.292 },
    { name: 'Fire', percent: 13.609 },
    { name: 'Water', percent: 11.688 },
    { name: 'Ground', percent: 11.248 },
    { name: 'Ice', percent: 8.364 },
    { name: 'Ghost', percent: 7.118 },
    { name: 'Poison', percent: 6.274 },
    { name: 'Fighting', percent: 2.763 },
    { name: 'Electric', percent: 2.658 },
    { name: 'Electric', percent: 2.658 },
    { name: 'Fairy', percent: 2.539 },
  ],
  teammates: [
    { name: 'Kingambit', percent: 22.344 },
    { name: 'Gholdengo', percent: 21.546 },
    { name: 'Dragapult', percent: 20.763 },
    { name: 'Ogerpon-Wellspring', percent: 19.190 },
    { name: 'Slowking-Galar', percent: 18.743 },
    { name: 'Dragonite', percent: 17.181 },
    { name: 'Raging Bolt', percent: 16.029 },
    { name: 'Walking Wake', percent: 13.829 },
    { name: 'Hatterene', percent: 13.037 },
    { name: 'Iron Valiant', percent: 12.390 },
    { name: 'Iron Moth', percent: 11.976 },
  ],
  checksAndCounters: [
    { name: 'Serperior', weight: { score: 80.024, avg: 82.75, stdDev: 0.68 }, KOed: 33.7, switchedOut: 49.1 },
    { name: 'Sinistcha', weight: { score: 78.990, avg: 80.92, stdDev: 0.48 }, KOed: 14.9, switchedOut: 66.0 },
    { name: 'Walking Wake', weight: { score: 78.744, avg: 80.35, stdDev: 0.40 }, KOed: 40.5, switchedOut: 39.9 },
    { name: 'Manaphy', weight: { score: 78.566, avg: 83.28, stdDev: 1.18 }, KOed: 49.4, switchedOut: 33.9 },
    { name: 'Iron Valiant', weight: { score: 77.298, avg: 78.68, stdDev: 0.35 }, KOed: 39.5, switchedOut: 39.2 },
    { name: 'Enamorus', weight: { score: 75.236, avg: 77.10, stdDev: 0.47 }, KOed: 34.1, switchedOut: 43.0 },
    { name: 'Latias', weight: { score: 74.704, avg: 78.98, stdDev: 1.07 }, KOed: 38.4, switchedOut: 40.6 },
    { name: 'Deoxys-Speed', weight: { score: 74.403, avg: 76.82, stdDev: 0.60 }, KOed: 32.3, switchedOut: 44.5 },
    { name: 'Ogerpon-Wellspring', weight: { score: 73.749, avg: 74.86, stdDev: 0.28 }, KOed: 30.7, switchedOut: 44.2 },
    { name: 'Greninja', weight: { score: 72.792, avg: 76.87, stdDev: 1.02 }, KOed: 33.0, switchedOut: 43.9 },
    { name: 'Polteageist', weight: { score: 71.670, avg: 76.30, stdDev: 1.16 }, KOed: 46.9, switchedOut: 29.4 },
    { name: 'Yanmega', weight: { score: 71.484, avg: 81.25, stdDev: 2.44 }, KOed: 44.8, switchedOut: 36.5 },
  ]
};

describe('PokemonMovesetStats', () => {
  it('should create a valid instance from raw data', () => {
    const stats = PokemonMovesetStats.create(mockData);
    expect(stats.name.value).toBe('Great Tusk');
    expect(stats.rawCount.value).toBe(650397);
    expect(stats.avgWeight).toBe(0.6476746991470402);
    expect(stats.viabilityCeiling).toBe(96);
    expect(stats.abilities[0].name.value).toBe('Protosynthesis');
    expect(stats.abilities[0].percent.value).toBe(100);
    expect(stats.items[0].name.value).toBe('Heavy-Duty Boots');
    expect(stats.items[0].percent.value).toBe(31.337);
    expect(stats.spreads[0].nature.value).toBe('Jolly');
    expect(stats.spreads[0].percent.value).toBe(25.179);
    expect(stats.moves[0].name.value).toBe('Rapid Spin');
    expect(stats.moves[0].percent.value).toBe(96.081);
    expect(stats.teraTypes[0].name.value).toBe('Steel');
    expect(stats.teraTypes[0].percent.value).toBe(29.292);
    expect(stats.teammates[0].name.value).toBe('Kingambit');
    expect(stats.teammates[0].percent.value).toBe(22.344);
    expect(stats.checksAndCounters[0].name.value).toBe('Serperior');
    expect(stats.checksAndCounters[0].KOed.value).toBe(33.7);
    expect(stats.checksAndCounters[0].switchedOut.value).toBe(49.1);
  });

  it('should convert to raw object correctly', () => {
    const stats = PokemonMovesetStats.create(mockData);
    const obj = stats.toObject();
    expect(obj).toEqual(mockData);
  });

  it('should generate a readable toString output', () => {
    const stats = PokemonMovesetStats.create(mockData);
    const text = stats.toString();
    expect(typeof text).toBe('string');
    expect(text).toContain('Great Tusk');
    expect(text).toContain('Abilities:');
    expect(text).toContain('Protosynthesis 100%');
    expect(text).toContain('Items:');
    expect(text).toContain('Heavy-Duty Boots 31.337%');
    expect(text).toContain('Spreads:');
    expect(text).toContain('Jolly 0/252/0/0/4/252 25.179%');
    expect(text).toContain('Moves:');
    expect(text).toContain('Rapid Spin 96.081%');
    expect(text).toContain('Tera types:');
    expect(text).toContain('Steel 29.292%');
    expect(text).toContain('Teammates:');
    expect(text).toContain('Kingambit 22.344%');
    expect(text).toContain('Checks and counters:');
    expect(text).toContain('Serperior 80.024 (82.75±0.68)');
  });
});
