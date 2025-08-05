import { ValueObject } from '../../../core/value-object';

export interface RankProps {
  value: number;
}

export class Rank extends ValueObject<RankProps> {
  public get value(): number {
    return this.props.value;
  }

  private constructor(props: RankProps) {
    super(props);
  }

  public static create(rank: number): Rank {
    if (typeof rank === 'number' && rank >= 0 && Number.isInteger(rank)) {
      return new Rank({ value: rank });
    } else {
      throw new Error(`Rank value must be an interger number greater than 0.`);
    }
  }
}
