import { ICountAndPercent } from '../../shared/count-and-percent.interface';
import { IStatsFileMetadata } from './stats-file-metadata.interface';

export interface IUsageStatsFile {
  rawUrl: string;
  parsedFilePath: string;
  content: IUsageStatsFileContent;
  metadata: IStatsFileMetadata;
}

export interface IUsageStatsFileContent {
  totalBattles: number;
  avgWeightTeam: number;
  pokemons: IPokemonUsageStats[];
}

export interface IPokemonUsageStats {
  rank: number;
  name: string;
  overallPercent: number;
  raw: ICountAndPercent;
  real: ICountAndPercent;
}
