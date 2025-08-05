import { IUsageStatsFile } from '../../../domain/smogon/stats-file/usage-stats-file.interface';
import { StatsFileMetadata } from '../../../value-objects/smogon/stats-file/stats-file-metadata';
import { UsageStatsFileContent } from './usage-stats-file-content';

/**
 * Represents the properties required to create a UsageStatsFile.
 */
export interface UsageStatsFileProps {
  rawUrl: string;
  parsedFilePath: string;
  content: UsageStatsFileContent;
  metadata: StatsFileMetadata;
}

/**
 * Represents a full usage statistics file including raw URL, parsed file path,
 * parsed metadata, and statistical content.
 */
export class UsageStatsFile {
  private constructor(private readonly props: UsageStatsFileProps) {}

  /**
   * Returns the raw URL of the stats file.
   */
  public get rawUrl(): string {
    return this.props.rawUrl;
  }

  /**
   * Returns the parsed file path of the stats file.
   */
  public get parsedFilePath(): string {
    return this.props.parsedFilePath;
  }

  /**
   * Returns the parsed content of the stats file.
   */
  public get content(): UsageStatsFileContent {
    return this.props.content;
  }

  /**
   * Returns the metadata associated with the stats file.
   */
  public get metadata(): StatsFileMetadata {
    return this.props.metadata;
  }

  /**
   * Creates a UsageStatsFile instance from a raw IUsageStatsFile object.
   *
   * @param file - Raw usage stats file object from external parsedFilePath
   * @returns A UsageStatsFile instance
   */
  public static create(file: IUsageStatsFile): UsageStatsFile {
    return new UsageStatsFile({
      rawUrl: file.rawUrl,
      parsedFilePath: file.parsedFilePath,
      content: UsageStatsFileContent.create(file.content),
      metadata: StatsFileMetadata.create(file.metadata),
    });
  }

  /**
   * Serializes the current instance to a plain object.
   *
   * @returns An IUsageStatsFile object
   */
  public toObject(): IUsageStatsFile {
    return {
      rawUrl: this.rawUrl,
      parsedFilePath: this.parsedFilePath,
      content: this.content.toObject(),
      metadata: this.metadata.toObject(),
    };
  }

  /**
   * Returns a string representation of the stats file.
   *
   * @returns The parsedFilePath URL
   */
  public toString(): string {
    return this.parsedFilePath;
  }
}
