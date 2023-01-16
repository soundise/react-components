import { create } from '@storybook/theming';
import { darkTheme } from '../../src';

export const soundiseDark = create({
  base: 'dark',

  colorPrimary: darkTheme.colors.neutral.white,
  colorSecondary: darkTheme.colors.primary.pr500,

  appBg: darkTheme.colors.neutral.black,
  appContentBg: darkTheme.colors.neutral.black,
  appBorderColor: darkTheme.colors.gray.gr900,
  appBorderRadius: 0,

  fontBase: `${darkTheme.typography.fonts.primary}, ${darkTheme.typography.fonts.secondary}, ${darkTheme.typography.fonts.fallback}`,
  fontCode: `${darkTheme.typography.fonts.code.primary}, ${darkTheme.typography.fonts.code.secondary}, ${darkTheme.typography.fonts.code.fallback}`,

  textColor: darkTheme.colors.neutral.white,
  textInverseColor: darkTheme.colors.neutral.black,
  textMutedColor: darkTheme.colors.gray.gr500,

  barTextColor: darkTheme.colors.gray.gr500,
  barSelectedColor: darkTheme.colors.primary.pr500,
  barBg: darkTheme.colors.neutral.black,

  inputBg: darkTheme.colors.neutral.black,
  inputBorder: darkTheme.colors.gray.gr900,
  inputTextColor: darkTheme.colors.neutral.white,
  inputBorderRadius: 8,

  brandTitle: 'Soundise',
  brandUrl: 'https://soundise.com',
  brandImage: 'https://assets.soundise.com/logos/logo-light.svg',
  brandTarget: '_blank',
});
