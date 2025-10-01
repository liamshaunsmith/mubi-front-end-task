import { convertPxToRem } from './utilities.ts';

export interface Theme {
  colors: {
    background: string;
    borders: string;
    error: string;
    headerAndFooter: string;
    subtext: string;
    text: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const theme: Theme = {
  colors: {
    background: '#FFFFFF',
    borders: '#C9C7C7',
    error: '#BD2025',
    headerAndFooter: '#E2E2E2',
    subtext: '#5B5C5E',
    text: '#000000',
  },
  breakpoints: {
    sm: convertPxToRem(768),
    md: convertPxToRem(1024),
    lg: convertPxToRem(1440),
  },
  spacing: {
    xs: convertPxToRem(4),
    sm: convertPxToRem(8),
    md: convertPxToRem(16),
    lg: convertPxToRem(24),
    xl: convertPxToRem(32),
  },
};
