import { NATURE_SUMMARIES } from '../../../domain/pokemon/nature/nature.data';
import { NatureSummary } from './nature-summary';

describe('NatureSummary', () => {
  it('should create a valid NatureSummary', () => {
    for (const summary of NATURE_SUMMARIES) {
      const instance = NatureSummary.getByValue(summary);
      expect(instance.value).toBe(summary);
    }
  });

  it('should throw if value is not a valid nature summary', () => {
    expect(() => NatureSummary.getByValue('InvalidSummary' as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureSummary.getByValue('+Atk, -SpA');
    const b = NatureSummary.getByValue('+Atk, -SpA');
    expect(a.equals(b)).toBe(true);
  });
});
