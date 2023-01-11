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
    background: neutral.white,
    foreground: neutral.black,
    textPrimary: neutral.black,
    textSecondary: neutral.white,
    textTertiary: primary.pr500,
    neutral,
    primary,
    gray,
    green: greenLight,
    yellow: yellowLight,
    red: redLight,
  },
};
