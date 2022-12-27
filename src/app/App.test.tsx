import React from 'react';
import { render, cleanup } from 'tests';
import { App } from 'app';

afterEach(cleanup);

describe('App', () => {
  it('should render the App component', () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
