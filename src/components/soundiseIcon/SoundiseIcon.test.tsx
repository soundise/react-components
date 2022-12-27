import React from 'react';
import { render, cleanup } from 'tests';
import { SoundiseIcon } from './SoundiseIcon';

afterEach(cleanup);

describe('SoundiseIcon', () => {
  it('should render the Soundise icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseIcon />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toBeInTheDocument();
    expect(soundiseIcon.tagName).toBe('svg');
    expect(soundiseIcon).toMatchSnapshot();
  });
});
