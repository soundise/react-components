import type { StoryFn, Parameters, Decorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { lightTheme, GlobalStyle } from '../src';
import { soundiseLight } from './themes';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: soundiseLight,
  },
};

const PreviewStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.gray.gr100};

      ${({ theme }) =>
        theme.variant === 'dark' &&
        css`
          background: ${({ theme }) => theme.colors.gray.gr900};
        `}
  }
`;

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <PreviewStyle />
      <Story />
    </ThemeProvider>
  ),
];
