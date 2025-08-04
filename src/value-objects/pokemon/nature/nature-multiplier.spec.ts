import { NATURE_MULTIPLIERS } from "../../../domain/pokemon/nature/nature.data";
import { NatureMultiplier } from "./nature-multiplier";

describe('NatureMultiplier', () => {
  it('should create a valid NatureMultiplier', () => {
    for (const multiplier of NATURE_MULTIPLIERS) {
      const instance = NatureMultiplier.create(multiplier);
      expect(instance.value).toBe(multiplier);
    }
  });

  it('should throw if multiplier is invalid', () => {
    expect(() => NatureMultiplier.create(1.5 as any)).toThrow();
    expect(() => NatureMultiplier.create(0.8 as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureMultiplier.create(1.1);
    const b = NatureMultiplier.create(1.1);
    expect(a.equals(b)).toBe(true);
  });
});
