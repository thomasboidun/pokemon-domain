import { NATURE_NAMES } from '../../../domain/pokemon/nature/nature.data';
import { NatureName } from './nature-name';

describe('NatureName', () => {
  it('should create a valid NatureName', () => {
    for (const name of NATURE_NAMES) {
      const instance = NatureName.getByValue(name);
      expect(instance.value).toBe(name);
    }
  });

  it('should throw if value is not a valid nature name', () => {
    expect(() => NatureName.getByValue('InvalidName' as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureName.getByValue('Adamant');
    const b = NatureName.getByValue('Adamant');
    expect(a.equals(b)).toBe(true);
  });
});
