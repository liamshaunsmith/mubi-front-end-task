import { convertPxToRem } from './utilities.ts';

export interface Theme {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const theme: Theme = {
  breakpoints: {
    sm: convertPxToRem(768),
    md: convertPxToRem(1024),
    lg: convertPxToRem(1440),
    xl: convertPxToRem(1920),
  },
  spacing: {
    xs: convertPxToRem(4),
    sm: convertPxToRem(8),
    md: convertPxToRem(16),
    lg: convertPxToRem(24),
    xl: convertPxToRem(32),
    xxl: convertPxToRem(40),
  },
};
