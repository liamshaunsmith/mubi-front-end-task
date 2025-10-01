import { FILM_URL, STYLING_SIZING_BASE } from './constants.ts';
import type { Film } from './types/types.ts';

export const convertPxToRem = (pxValue: number): string =>
  `${pxValue / STYLING_SIZING_BASE}rem`;

export const getFilmDirector = (film: Film): string | undefined =>
  film.cast.find((castMember) => castMember.credits.includes('Director'))?.name;

export const getFilmUrl = (film: Film): string => `${FILM_URL}/${film.id}`;

export const truncateText = (text: string, maximumLength: number): string => {
  if (text.length <= maximumLength) {
    return text;
  }

  const truncatedText = text.slice(0, maximumLength);
  const lastTruncatedWordIndex = truncatedText.lastIndexOf(' ');

  return `${truncatedText.slice(0, lastTruncatedWordIndex)}…`;
};
