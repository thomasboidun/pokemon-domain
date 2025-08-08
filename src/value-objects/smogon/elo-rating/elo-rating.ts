import { ValueObject } from '../../../core/value-object';
import { ELO_RATINGS } from '../../../domain/smogon/elo-rating/elo-rating.data';
import { EloRatingValue } from '../../../domain/smogon/elo-rating/elo-rating.type';

export interface EloRatingProps {
  value: EloRatingValue;
}

export class EloRating extends ValueObject<EloRatingProps> {
  private static _all: readonly EloRating[] = Object.freeze(ELO_RATINGS.map((value) => new EloRating({ value })));

  public static get all(): readonly EloRating[] {
    return this._all;
  }

  private constructor(props: EloRatingProps) {
    super(props);
  }

  public get value(): EloRatingValue {
    return this.props.value;
  }

  public static getByValue(elo: EloRatingValue): EloRating {
    if (!ELO_RATINGS.includes(elo)) {
      throw new Error(`Invalid ELO rating "${elo}". Must be one of ${ELO_RATINGS.join(', ')}.`);
    }

    const found = this.all.find((e) => e.value === elo);

    if (!found) {
      throw new Error(`ELO ranting "${elo}" not found.`);
    }

    return found;
  }

  public toString(): string {
    return this.value.toString();
  }
}
