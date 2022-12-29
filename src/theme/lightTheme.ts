import type { ITheme } from './theme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const lightTheme: ITheme = {
  typography: {
    ...typography,
  },
  colors: {
    background: colors.neutral.white,
    foreground: colors.neutral.black,
    textPrimary: colors.neutral.black,
    textSecondary: colors.neutral.white,
    textTertiary: colors.primary.pr500,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
