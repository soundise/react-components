import type { ITheme } from './theme';
import { colors } from './colors';

export const darkTheme: ITheme = {
  colors: {
    background: colors.secondary.main,
    foreground: colors.primary.main,
    ...colors,
  },
};
