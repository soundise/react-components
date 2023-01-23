<a href="https://soundise.com" align="center">
  <img src="https://assets.soundise.com/headers/header-github-readme-dark.svg" width="100%" />
</a>

<div align="center">
  <h1>react-components</h1>
  <b>Soundise React component library</b>
</div>

## About

**react-components** is a library of responsive React UI components that look incredible on any device. It includes buttons, inputs, icons, and more - everything we need at Soundise to create beautiful web interfaces without repeating ourselves. This package helps us build all of our projects faster and more reliably with higher-quality code.

## Components

Visit [storybook.soundise.com](https://storybook.soundise.com) to check out available components.

## Installation

```bash
yarn add styled-components

# TypeScript
yarn add -D @types/styled-components

yarn add @soundise/react-components
```

## Setup

1. For **react-components** to work correctly, you need to set up the ThemeProvider at the root of your application. You can choose a light theme, a dark theme, or just implement a theme based on the `prefers-color-scheme` media query. Go to the root of your application and do this:

```jsx
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@soundise/react-components';

const Application = () => (
  <ThemeProvider theme={darkTheme}>
    <AppComponent /> // ---> Your App Component
  </ThemeProvider>
);
```

2. If you want to use our global style with reset CSS, and custom selection, do this:

```jsx
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from '@soundise/react-components';

const Application = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <AppComponent /> // ---> Your App Component
  </ThemeProvider>
);
```

3. If you use TypeScript, you can create a `styled.d.ts` file in the `src/` folder to get definitions for styled-components:

```ts
import 'styled-components';
import type { ITheme } from '@soundise/react-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
```

## Usage

1. Once the **react-components** library is installed and configured, you can use any of the components as follows:

```jsx
import { SoundiseIcon } from '@soundise/react-components';

const Component = () => <SoundiseIcon />;
```

2. Every single component has its own exported interface that can be used in your app:

```jsx
import React from 'react';
import { SoundiseIcon } from '@soundise/react-components';
import type { ISoundiseIconProps } from '@soundise/react-components';

interface IWrapperProps extends ISoundiseIconProps {
  name: string;
}

const Wrapper = ({ name, ...props }: IWrapperProps) => (
  <div id={name}>
    <p>Wrapper</p>
    <SoundiseIcon {...props} />
  </div>
);
```

## Community

We are excited to see the community adopt Soundise, raise issues, and provide feedback.
Whether it's a feature request, a bug report, or a project to showcase, please get involved!

- [Discord](https://discord.soundise.com)
- [Twitter](https://twitter.com/soundiseapp)
- [GitHub Organization](https://github.com/soundise)

## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](https://github.com/soundise/.github/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT](https://github.com/soundise/.github/blob/main/CODE_OF_CONDUCT.md).

## License

[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
