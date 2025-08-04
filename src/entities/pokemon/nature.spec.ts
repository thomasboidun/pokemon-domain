import { NATURE_NAMES, NATURE_SUMMARIES } from "../../domain/pokemon/nature/nature.data";
import { Nature } from "./nature";

describe('Nature', () => {
  it('should return all predefined Natures', () => {
    const all = Nature.all;
    expect(all.length).toBeGreaterThan(0);
    expect(all.every((n) => n instanceof Nature)).toBe(true);
  });

  it('should create a Nature from a valid name', () => {
    const name = NATURE_NAMES[0];
    const nature = Nature.getByName(name);

    expect(nature.name.value).toBe(name);
  });

  it('should throw when creating a Nature from an invalid name', () => {
    expect(() => Nature.getByName('InvalidName' as any)).toThrow();
  });

  it('should create a Nature from a valid summary', () => {
    const summary = NATURE_SUMMARIES.find((s) => s !== '');
    const nature = Nature.getBySummary(summary!);

    expect(nature.summary.value).toBe(summary);
  });

  it('should throw when creating a Nature from an invalid summary', () => {
    expect(() => Nature.getBySummary('invalid' as any)).toThrow();
  });

  it('should serialize to plain object', () => {
    const nature = Nature.all[0];
    const plain = nature.toObject();

    expect(plain.name).toBe(nature.name.value);
    expect(plain.summary).toBe(nature.summary.value);
    expect(plain.multipliers).toEqual(nature.multipliers.toObject());
  });

  it('should serialize to string with summary', () => {
    const nature = Nature.all.find((n) => n.summary.value !== '')!;
    const str = nature.toString();

    expect(str).toContain(nature.name.value);
    expect(str).toContain(nature.summary.value);
  });

  it('should serialize to string without summary', () => {
    const nature = Nature.all.find((n) => n.summary.value === '')!;
    const str = nature.toString();

    expect(str).toBe(nature.name.value);
  });
});
