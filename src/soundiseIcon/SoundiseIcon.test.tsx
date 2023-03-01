import React from 'react';
import { render } from 'tests';
import { SoundiseIcon } from './SoundiseIcon';

describe('SoundiseIcon', () => {
  it('should render Soundise icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseIcon />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toBeInTheDocument();
    expect(soundiseIcon.tagName).toBe('svg');
  });

  it('should match primary Soundise icon snapshot', () => {
    const { getByTestId } = render(<SoundiseIcon variant="primary" />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toMatchSnapshot();
  });

  it('should match secondary Soundise icon snapshot', () => {
    const { getByTestId } = render(<SoundiseIcon variant="secondary" />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toMatchSnapshot();
  });
});
