import type { ITheme } from './theme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const darkTheme: ITheme = {
  typography: {
    ...typography,
  },
  colors: {
    background: colors.neutral.black,
    foreground: colors.neutral.white,
    textPrimary: colors.neutral.white,
    textSecondary: colors.neutral.black,
    textTertiary: colors.primary.pr500,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
