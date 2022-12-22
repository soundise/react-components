import type { ITheme } from './theme';
import * as colors from './colors';

export const darkTheme: ITheme = {
  colors: {
    background: colors.neutral.black,
    foreground: colors.neutral.white,
    ...colors,
  },
};
