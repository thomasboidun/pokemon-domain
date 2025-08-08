import { ICheckAndCounterStats } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";
import { Name } from "../../../value-objects/shared/name";
import { Percent } from "../../../value-objects/shared/percent";
import { CheckAndCounterWeight } from "./check-and-counter-weight";

/**
 * Properties required to instantiate a {@link CheckAndCounter}.
 */
export interface CheckAndCounterStatsProps {
  /** Name of the Pokémon acting as a check or counter. */
  name: Name;
  /** Statistical weight metrics representing the importance or influence of the check/counter. */
  weight: CheckAndCounterWeight;
  /** Percentage of battles where this Pokémon knocked out the moveset Pokémon. */
  KOed: Percent;
  /** Percentage of battles where this Pokémon caused the moveset Pokémon to switch out. */
  switchedOut: Percent;
}

/**
 * Represents the checks and counters statistics for a Pokémon moveset.
 * 
 * This class encapsulates:
 * - The Pokémon's name acting as a check or counter.
 * - The statistical weight of its impact.
 * - The percentages of knockouts and forced switches it caused.
 */
export class CheckAndCounterStats {
  /** Name of the Pokémon acting as a check or counter. */
  public get name(): Name {
    return this.props.name;
  }

  /** Statistical weight metrics representing the importance or influence of the check/counter. */
  public get weight(): CheckAndCounterWeight {
    return this.props.weight;
  }

  /** Percentage of battles where this Pokémon knocked out the moveset Pokémon. */
  public get KOed(): Percent {
    return this.props.KOed;
  }

  /** Percentage of battles where this Pokémon caused the moveset Pokémon to switch out. */
  public get switchedOut(): Percent {
    return this.props.switchedOut;
  }

  private constructor(private readonly props: CheckAndCounterStatsProps) { }

  /**
   * Factory method to create an instance of CheckAndCounterStats.
   * Values are normalized (rounded) for consistency.
   * 
   * @param checksAndCounters - Raw check and counter statistics data.
   * @returns A new CheckAndCounterStats instance.
   */
  public static create(checksAndCounters: ICheckAndCounterStats): CheckAndCounterStats {
    return new CheckAndCounterStats({
      name: Name.create(checksAndCounters.name),
      weight: CheckAndCounterWeight.create(checksAndCounters.weight),
      KOed: Percent.create(checksAndCounters.KOed, 1),
      switchedOut: Percent.create(checksAndCounters.switchedOut, 1)
    });
  }

  /**
   * Converts the current instance into a plain object representation.
   * 
   * @returns An object matching the ICheckAndCounterStats interface.
   */
  public toObject(): ICheckAndCounterStats {
    return {
      name: this.name.value,
      weight: this.weight.toObject(),
      KOed: this.KOed.value,
      switchedOut: this.switchedOut.value
    };
  }

  /**
   * Returns a human-readable string representation of the instance.
   */
  public toString(): string {
    let text = `${this.name} ${this.weight}\n`;
    text += `\tKOed: ${this.KOed}\n`;
    text += `\tSwitched out: ${this.switchedOut}`;
    return text;
  }
}
