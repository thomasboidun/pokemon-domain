import { NATURE_MULTIPLIERS } from '../../../domain/pokemon/nature/nature.data';
import { NatureMultiplier } from './nature-multiplier';

describe('NatureMultiplier', () => {
  it('should fetch a NatureMultiplier', () => {
    for (const multiplier of NATURE_MULTIPLIERS) {
      const instance = NatureMultiplier.getByValue(multiplier);
      expect(instance.value).toBe(multiplier);
    }
  });

  it('should throw error if multiplier is invalid', () => {
    expect(() => NatureMultiplier.getByValue(1.5 as any)).toThrow();
    expect(() => NatureMultiplier.getByValue(0.8 as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureMultiplier.getByValue(1.1);
    const b = NatureMultiplier.getByValue(1.1);
    expect(a.equals(b)).toBe(true);
  });
});
