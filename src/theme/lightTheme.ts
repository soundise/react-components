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
  name: 'Soundise Light Theme',
  variant: 'light',
  typography: {
    fonts,
    weights,
  },
  breakpoints,
  colors: {
    background: neutral.white,
    foreground: neutral.black,
    text: {
      primary: neutral.black,
      secondary: neutral.white,
      tertiary: primary.pr500,
    },
    status: {
      success: greenLight.g500,
      warning: yellowLight.y500,
      error: redLight.r500,
    },
    brand: {
      primary: neutral.black,
      secondary: neutral.white,
      tertiary: primary.pr500,
    },
    neutral,
    primary,
    gray,
    green: greenLight,
    yellow: yellowLight,
    red: redLight,
  },
};
