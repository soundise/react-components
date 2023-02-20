import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLock,
  faFileCircleExclamation,
  faPlugCircleExclamation,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { HttpError } from './HttpError';

const meta: Meta<typeof HttpError> = {
  title: 'Components/Errors/Http Error',
  component: HttpError,
};

export default meta;
type Story = StoryObj<typeof HttpError>;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary.pr500};
`;

export const Error401: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faUserLock} />,
    title: 'Sorry for the roadblock!',
    description:
      "You need to have admin's permission to get a peek of this page!",
  },
};

export const Error403: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faUserLock} />,
    title: 'Sorry for the roadblock!',
    description:
      "You need to have admin's permission to get a peek of this page!",
  },
};

export const Error404: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faFileCircleExclamation} />,
    title: 'Seems like you are lost...',
    description: (
      <>
        Return to the <Link href="/">homepage</Link>!
      </>
    ),
  },
};

export const Error500: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faPlugCircleExclamation} />,
    title: "It's not you, it's us!",
    description: 'We are trying to fix things here! We won’t take that long!',
  },
};

export const Error503: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faPlugCircleExclamation} />,
    title: "It's not you, it's us!",
    description: 'We are trying to fix things here! We won’t take that long!',
  },
};

export const Fallback: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faCircleExclamation} />,
    title: 'Something went wrong!',
    description:
      "We're so sorry. We're not sure what happened. Please try again later!",
  },
};
