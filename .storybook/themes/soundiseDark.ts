import { create } from '@storybook/theming';
import { darkTheme } from '../../src';

export const soundiseDark = create({
  base: 'dark',

  colorPrimary: darkTheme.colors.brand.secondary,
  colorSecondary: darkTheme.colors.brand.tertiary,

  appBg: darkTheme.colors.background,
  appContentBg: darkTheme.colors.background,
  appBorderColor: darkTheme.colors.gray.gr900,
  appBorderRadius: 4,

  fontBase: `${darkTheme.typography.fonts.primary}, ${darkTheme.typography.fonts.secondary}, ${darkTheme.typography.fonts.fallback}`,
  fontCode: `${darkTheme.typography.fonts.code.primary}, ${darkTheme.typography.fonts.code.secondary}, ${darkTheme.typography.fonts.code.fallback}`,

  textColor: darkTheme.colors.text.primary,
  textInverseColor: darkTheme.colors.text.secondary,
  textMutedColor: darkTheme.colors.gray.gr500,

  barTextColor: darkTheme.colors.gray.gr500,
  barSelectedColor: darkTheme.colors.text.primary,
  barBg: darkTheme.colors.background,

  inputBg: darkTheme.colors.background,
  inputBorder: darkTheme.colors.gray.gr900,
  inputTextColor: darkTheme.colors.text.primary,
  inputBorderRadius: 8,

  brandTitle: 'Soundise',
  brandUrl: 'https://soundise.com',
  brandImage: 'https://assets.soundise.com/logos/logo-light.svg',
  brandTarget: '_blank',
});
