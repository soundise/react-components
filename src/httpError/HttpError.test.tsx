import React from 'react';
import { render } from 'tests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { HttpError } from './HttpError';

describe('HttpError', () => {
  it('should render Http Error', () => {
    const { getByTestId } = render(
      <HttpError
        icon={<FontAwesomeIcon icon={faCircleExclamation} />}
        title="Something went wrong!"
        description="We're so sorry. We're not sure what happened. Please try again later!"
      />
    );
    const httpError = getByTestId('http-error');

    expect(httpError).toBeInTheDocument();
  });

  it('should match Http Error snapshot', () => {
    const { getByTestId } = render(
      <HttpError
        icon={<FontAwesomeIcon icon={faCircleExclamation} />}
        title="Something went wrong!"
        description="We're so sorry. We're not sure what happened. Please try again later!"
      />
    );
    const httpError = getByTestId('http-error');

    expect(httpError).toMatchSnapshot();
  });
});
