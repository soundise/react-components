import type { StoryFn, Parameters, Decorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, GlobalStyle } from '../src';
import { soundise } from './themes';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: soundise,
  },
};

const PreviewStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.gray.gr800};
  }
`;

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <PreviewStyle />
      <Story />
    </ThemeProvider>
  ),
];
