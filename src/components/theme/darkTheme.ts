import type { ITheme } from './theme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const darkTheme: ITheme = {
  typography: {
    ...typography,
    colors: {
      primary: colors.neutral.white,
      secondary: colors.neutral.black,
    },
  },
  colors: {
    background: colors.neutral.black,
    foreground: colors.neutral.white,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
