import type { ITheme } from './theme';
import { fonts, weights } from './typography';
import { breakpoints } from './breakpoints';
import {
  neutral,
  primary,
  gray,
  greenDark,
  yellowDark,
  redDark,
} from './colors';

export const darkTheme: ITheme = {
  variant: 'dark',
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
    green: greenDark,
    yellow: yellowDark,
    red: redDark,
  },
};
