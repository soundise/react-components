import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { App } from 'app';
import { darkTheme } from 'components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        border: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.typography.fonts.primary}, ${({
  theme,
}) => theme.typography.fonts.secondary}, ${({ theme }) =>
  theme.typography.fonts.fallback};
        font-weight: ${({ theme }) => theme.typography.weights.regular};
        color: ${({ theme }) => theme.typography.colors.primary};
        text-decoration: none;
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
    }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
