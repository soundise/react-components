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
        font-family: 'Inter', 'system-ui', 'sans-serif';
        font-weight: 400;
        color: ${({ theme }) => theme.colors.neutral.white};
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
