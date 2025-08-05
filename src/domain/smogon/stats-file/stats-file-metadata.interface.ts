import { EloRatingValue } from '../elo-rating/elo-rating.type';
import { FormatShorthandValue } from '../format/format.type';
import { GenerationNumberValue } from '../generation/generation.type';
import { PeriodValue } from '../period/period.type';
import { RegulationSetValue } from '../regulation-set/regulation-set.type';
import { StatsFileTagValue } from './stats-file.type';

export interface IStatsFileMetadata {
  period: PeriodValue;
  generation: GenerationNumberValue;
  format: FormatShorthandValue;
  regulationSet?: RegulationSetValue;
  eloRating: EloRatingValue;
  tag: StatsFileTagValue;
}
