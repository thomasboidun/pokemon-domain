import { ICountAndPercent } from '../../shared/count-and-percent.interface';
import { IStatsFileMetadata } from './stats-file-metadata.interface';

export interface ILeadStatsFile {
  rawUrl: string;
  parsedFilePath: string;
  content: ILeadStatsFileContent;
  metadata: IStatsFileMetadata;
}

export interface ILeadStatsFileContent {
  totalLeads: number;
  pokemons: IPokemonLeadStats[];
}

export interface IPokemonLeadStats {
  rank: number;
  name: string;
  overallPercent: number;
  raw: ICountAndPercent;
}
