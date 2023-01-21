import React from 'react';
import { render, cleanup } from 'tests';
import 'jest-styled-components';
import { SoundiseLogo } from './SoundiseLogo';
import { darkTheme } from '../theme';

afterEach(cleanup);

describe('SoundiseLogo', () => {
  it('should render the Soundise logo as an SVG', () => {
    const { getByTestId } = render(<SoundiseLogo />);
    const soundiseLogo = getByTestId('soundise-logo');

    expect(soundiseLogo).toBeInTheDocument();
    expect(soundiseLogo.tagName).toBe('svg');
    expect(soundiseLogo).toMatchSnapshot();
  });

  it('should render primary Soundise logo', () => {
    const { getAllByTestId } = render(<SoundiseLogo variant="primary" />);
    const soundiseLogoPaths = getAllByTestId('soundise-logo-path');

    soundiseLogoPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.primary);
    });
    expect(soundiseLogoPaths).toMatchSnapshot();
  });

  it('should render secondary Soundise logo', () => {
    const { getAllByTestId } = render(<SoundiseLogo variant="secondary" />);
    const soundiseLogoPaths = getAllByTestId('soundise-logo-path');

    soundiseLogoPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.secondary);
    });
    expect(soundiseLogoPaths).toMatchSnapshot();
  });
});
