import { GenerationNameValue, GenerationNumberValue, GenerationShorthandValue } from './generation.type';

export interface IGeneration {
  number: GenerationNumberValue;
  name: GenerationNameValue;
  shorthand: GenerationShorthandValue;
}
