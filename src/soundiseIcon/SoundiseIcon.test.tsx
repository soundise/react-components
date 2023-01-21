import React from 'react';
import { render, cleanup } from 'tests';
import 'jest-styled-components';
import { SoundiseIcon } from './SoundiseIcon';
import { darkTheme } from '../theme';

afterEach(cleanup);

describe('SoundiseIcon', () => {
  it('should render the Soundise icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseIcon />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toBeInTheDocument();
    expect(soundiseIcon.tagName).toBe('svg');
    expect(soundiseIcon).toMatchSnapshot();
  });

  it('should render primary Soundise icon', () => {
    const { getAllByTestId } = render(<SoundiseIcon variant="primary" />);
    const soundiseIconPaths = getAllByTestId('soundise-icon-path');

    soundiseIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.primary);
    });
    expect(soundiseIconPaths).toMatchSnapshot();
  });

  it('should render secondary Soundise icon', () => {
    const { getAllByTestId } = render(<SoundiseIcon variant="secondary" />);
    const soundiseIconPaths = getAllByTestId('soundise-icon-path');

    soundiseIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.secondary);
    });
    expect(soundiseIconPaths).toMatchSnapshot();
  });
});
