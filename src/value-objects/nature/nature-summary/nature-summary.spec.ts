import { NATURE_SUMMARIES } from '../../../domain/nature';
import { NatureSummary } from './nature-summary';

describe('NatureSummary', () => {
  it('should create a valid NatureSummary', () => {
    for (const summary of NATURE_SUMMARIES) {
      const instance = NatureSummary.create(summary);
      expect(instance.value).toBe(summary);
    }
  });

  it('should throw if value is not a valid nature summary', () => {
    expect(() => NatureSummary.create('InvalidSummary' as any)).toThrow();
  });

  it('should be equal if values are the same', () => {
    const a = NatureSummary.create('+Atk, -SpA');
    const b = NatureSummary.create('+Atk, -SpA');
    expect(a.equals(b)).toBe(true);
  });
});
