import { ILeadStatsFile } from '../../../domain/smogon/stats-file/lead-stats-file.interface';
import { StatsFileMetadata } from '../../../value-objects/smogon/stats-file/stats-file-metadata';
import { LeadStatsFileContent } from './lead-stats-file-content';

export interface LeadStatsFileProps {
  rawUrl: string;
  parsedFilePath: string;
  content: LeadStatsFileContent;
  metadata: StatsFileMetadata;
}

/**
 * Represents a parsed and typed Smogon lead stats file.
 *
 * Includes metadata, original source URL, output file path, and structured content.
 */
export class LeadStatsFile {
  /**
   * The original URL of the raw .txt Smogon stats file.
   */
  public get rawUrl(): string {
    return this.props.rawUrl;
  }

  /**
   * The path to the parsed JSON file.
   */
  public get parsedFilePath(): string {
    return this.props.parsedFilePath;
  }

  /**
   * The parsed and structured content of the file.
   */
  public get content(): LeadStatsFileContent {
    return this.props.content;
  }

  /**
   * Metadata about the file, such as format, date, and type (must be "leads").
   */
  public get metadata(): StatsFileMetadata {
    return this.props.metadata;
  }

  private constructor(private readonly props: LeadStatsFileProps) {}

  /**
   * Creates a new LeadStatsFile from a raw object, validating that it's a "leads" file.
   *
   * @param file - The raw parsed file object.
   * @returns A LeadStatsFile instance.
   * @throws If the file metadata tag is not 'leads'.
   */
  public static create(file: ILeadStatsFile): LeadStatsFile {
    if (file.metadata.tag === 'leads') {
      return new LeadStatsFile({
        rawUrl: file.rawUrl,
        parsedFilePath: file.parsedFilePath,
        content: LeadStatsFileContent.create(file.content),
        metadata: StatsFileMetadata.create(file.metadata),
      });
    } else {
      throw new Error(`[LeadStatsFile] Invalid metadata tag: ${file.metadata.tag}`);
    }
  }

  /**
   * Serializes the instance to a plain object suitable for storage or transport.
   *
   * @returns An object matching ILeadStatsFile.
   */
  public toObject(): ILeadStatsFile {
    return {
      rawUrl: this.rawUrl,
      parsedFilePath: this.parsedFilePath,
      content: this.content.toObject(),
      metadata: this.metadata.toObject(),
    };
  }
}
