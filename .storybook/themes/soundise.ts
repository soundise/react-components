import { create } from '@storybook/theming';
import { darkTheme } from '../../src';

export const soundise = create({
  base: 'dark',

  colorSecondary: darkTheme.colors.primary.pr500,

  appBg: darkTheme.colors.neutral.black,

  fontBase: `${darkTheme.typography.fonts.primary}, ${darkTheme.typography.fonts.secondary}, ${darkTheme.typography.fonts.fallback}`,
  fontCode: `${darkTheme.typography.fonts.code.primary}, ${darkTheme.typography.fonts.code.secondary}, ${darkTheme.typography.fonts.code.fallback}`,

  brandTitle: 'Soundise',
  brandUrl: 'https://soundise.com',
  brandImage: 'https://assets.soundise.com/logos/logo-light.svg',
  brandTarget: '_blank',
});
