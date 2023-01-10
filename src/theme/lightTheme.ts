import type { ITheme } from './theme';
import { fonts, weights } from './typography';
import { breakpoints } from './breakpoints';
import {
  neutral,
  primary,
  gray,
  greenLight,
  yellowLight,
  redLight,
} from './colors';

export const lightTheme: ITheme = {
  variant: 'light',
  typography: {
    fonts,
    weights,
  },
  breakpoints,
  colors: {
    background: neutral.black,
    foreground: neutral.white,
    textPrimary: neutral.white,
    textSecondary: neutral.black,
    textTertiary: primary.pr500,
    neutral,
    primary,
    gray,
    green: greenLight,
    yellow: yellowLight,
    red: redLight,
  },
};
