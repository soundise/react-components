import type { ITheme } from './theme';
import { colors } from './colors';

export const lightTheme: ITheme = {
  colors: {
    background: colors.primary.main,
    foreground: colors.secondary.main,
    primary: {
      ...colors.secondary,
    },
    secondary: {
      ...colors.primary,
    },
    tertiary: {
      ...colors.tertiary,
    },
  },
};
