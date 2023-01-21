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
  name: 'Soundise Dark Theme',
  variant: 'dark',
  typography: {
    fonts,
    weights,
  },
  breakpoints,
  colors: {
    background: neutral.black,
    foreground: gray.gr900,
    border: gray.gr800,
    text: {
      primary: neutral.white,
      secondary: neutral.black,
      tertiary: primary.pr500,
    },
    status: {
      success: greenDark.g500,
      warning: yellowDark.y500,
      error: redDark.r500,
    },
    brand: {
      primary: neutral.black,
      secondary: neutral.white,
      tertiary: primary.pr500,
    },
    neutral,
    primary,
    gray,
    green: greenDark,
    yellow: yellowDark,
    red: redDark,
  },
};
