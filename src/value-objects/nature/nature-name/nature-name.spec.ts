import { NATURE_NAMES } from '../../../domain/nature';
import { NatureName } from './nature-name';

describe('NatureName', () => {
  it('should create a valid NatureName', () => {
    for (const name of NATURE_NAMES) {
      const instance = NatureName.create(name);
      expect(instance.value).toBe(name);
    }
  });

  it('should throw if value is not a valid nature name', () => {
    expect(() => NatureName.create('InvalidName' as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureName.create('Adamant');
    const b = NatureName.create('Adamant');
    expect(a.equals(b)).toBe(true);
  });
});
