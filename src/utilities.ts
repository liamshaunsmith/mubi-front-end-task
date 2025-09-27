import { STYLING_SIZING_BASE } from './constants.ts';

export const convertPxToRem = (pxValue: number): string =>
  `${pxValue / STYLING_SIZING_BASE}rem`;
