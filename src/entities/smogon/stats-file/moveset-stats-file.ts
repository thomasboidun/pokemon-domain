import { IMovesetStatsFile } from "../../../domain/smogon/stats-file/moveset-stats-file.interface";
import { StatsFileMetadata } from "../../../value-objects/smogon/stats-file/stats-file-metadata";
import { MovesetStatsFileContent } from "./moveset-stats-file-content";

/**
 * Represents the properties required to create a UsageStatsFile.
 */
export interface MovesetStatsFileProps {
  /** Original Smogon TXT file URL */
  rawUrl: string;
  /** Local path to the parsed JSON file */
  parsedFilePath: string;
  content: MovesetStatsFileContent;
  metadata: StatsFileMetadata;
}

export class MovesetStatsFile {
  /** Original Smogon TXT file URL */
  public get rawUrl(): string {
    return this.props.rawUrl;
  }

  /** Local path to the parsed JSON file */
  public get parsedFilePath(): string {
    return this.props.parsedFilePath;
  }

  /** Structured moveset statistics content */
  public get content(): MovesetStatsFileContent {
    return this.props.content;
  }

  /** Metadata describing the stats file */
  public get metadata(): StatsFileMetadata {
    return this.props.metadata;
  }

  /** Private constructor: use {@link create} instead. */
  private constructor(private readonly props: MovesetStatsFileProps) { }

  /**
   * Factory method to create an instance from raw parsed data.
   * @param content Raw moveset stats content (e.g., parsed from file)
   */
  public static create(file: IMovesetStatsFile): MovesetStatsFile {
    return new MovesetStatsFile({
      rawUrl: file.rawUrl,
      parsedFilePath: file.parsedFilePath,
      content: MovesetStatsFileContent.create(file.content),
      metadata: StatsFileMetadata.create(file.metadata)
    });
  }

  /**
   * Returns the plain object representation for serialization.
   */
  public toObject(): IMovesetStatsFile {
    return {
      rawUrl: this.rawUrl,
      parsedFilePath: this.parsedFilePath,
      content: this.content.toObject(),
      metadata: this.metadata.toObject()
    };
  }

  /**
   * Returns a string representation of the stats file.
   *
   * @returns The parsedFilePath URL
   */
  public toString(): string {
    return this.rawUrl;
  }
}