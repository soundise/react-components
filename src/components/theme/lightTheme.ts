import type { ITheme } from './theme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const lightTheme: ITheme = {
  typography: {
    ...typography,
    colors: {
      primary: colors.neutral.black,
      secondary: colors.neutral.white,
    },
  },
  colors: {
    background: colors.neutral.white,
    foreground: colors.neutral.black,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
