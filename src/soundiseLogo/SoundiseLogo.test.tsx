import React from 'react';
import { render } from 'tests';
import { SoundiseLogo } from './SoundiseLogo';

describe('SoundiseLogo', () => {
  it('should render Soundise logo as an SVG', () => {
    const { getByTestId } = render(<SoundiseLogo />);
    const soundiseLogo = getByTestId('soundise-logo');

    expect(soundiseLogo).toBeInTheDocument();
    expect(soundiseLogo.tagName).toBe('svg');
  });

  it('should match primary Soundise logo snapshot', () => {
    const { getByTestId } = render(<SoundiseLogo variant="primary" />);
    const soundiseLogo = getByTestId('soundise-logo');

    expect(soundiseLogo).toMatchSnapshot();
  });

  it('should match secondary Soundise logo snapshot', () => {
    const { getByTestId } = render(<SoundiseLogo variant="secondary" />);
    const soundiseLogo = getByTestId('soundise-logo');

    expect(soundiseLogo).toMatchSnapshot();
  });
});
