import { CheckAndCounterStats } from "./check-and-counter-stats";
import { CheckAndCounterWeight } from "./check-and-counter-weight";
import { Name } from "../../../value-objects/shared/name";
import { Percent } from "../../../value-objects/shared/percent";
import { ICheckAndCounterStats } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";

describe("CheckAndCounterStats", () => {
  const sampleData: ICheckAndCounterStats = {
    name: "Pikachu",
    weight: { score: 0.87654, avg: 50.1234, stdDev: 10.9876 },
    KOed: 25.456,
    switchedOut: 40.789
  };

  it("should create a CheckAndCounterStats instance with rounded values", () => {
    const stats = CheckAndCounterStats.create(sampleData);

    expect(stats).toBeInstanceOf(CheckAndCounterStats);
    expect(stats.name).toBeInstanceOf(Name);
    expect(stats.weight).toBeInstanceOf(CheckAndCounterWeight);
    expect(stats.KOed).toBeInstanceOf(Percent);
    expect(stats.switchedOut).toBeInstanceOf(Percent);

    expect(stats.weight.score).toBe(0.877); // rounded to 3 decimals
    expect(stats.weight.avg).toBe(50.12);   // rounded to 2 decimals
    expect(stats.weight.stdDev).toBe(10.99); // rounded to 2 decimals
    expect(stats.KOed.value).toBe(25.5);     // rounded to 1 decimal
    expect(stats.switchedOut.value).toBe(40.8); // rounded to 1 decimal
  });

  it("should return correct object representation", () => {
    const stats = CheckAndCounterStats.create(sampleData);
    const obj = stats.toObject();

    expect(obj).toEqual({
      name: "Pikachu",
      weight: { score: 0.877, avg: 50.12, stdDev: 10.99 },
      KOed: 25.5,
      switchedOut: 40.8
    });
  });

  it("should return correct string representation", () => {
    const stats = CheckAndCounterStats.create(sampleData);
    const str = stats.toString();

    expect(str).toContain("Pikachu");
    expect(str).toContain(`${stats.weight.score}`);
    expect(str).toContain(`KOed: ${stats.KOed}`);
    expect(str).toContain(`Switched out: ${stats.switchedOut}`);
  });
});
