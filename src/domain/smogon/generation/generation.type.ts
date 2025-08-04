import { GENERATION_NAMES, GENERATION_NUMBERS, GENERATION_SHORTHANDS } from './generation.data';

export type GenerationNumberValue = (typeof GENERATION_NUMBERS)[number];

export type GenerationNameValue = (typeof GENERATION_NAMES)[number];

export type GenerationShorthandValue = (typeof GENERATION_SHORTHANDS)[number];
