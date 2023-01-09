import type { ITheme } from './theme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const darkTheme: ITheme = {
  variant: 'dark',
  typography: {
    ...typography,
  },
  colors: {
    background: colors.neutral.black,
    foreground: colors.neutral.white,
    textPrimary: colors.neutral.white,
    textSecondary: colors.neutral.black,
    textTertiary: colors.primary.pr500,
    neutral: colors.neutral,
    primary: colors.primary,
    gray: colors.gray,
    green: colors.greenDark,
    yellow: colors.yellowDark,
    red: colors.redDark,
  },
  breakpoints: {
    ...breakpoints,
  },
};
