import type { Meta, StoryObj } from '@storybook/react';
import { SoundiseIcon } from './SoundiseIcon';

const meta: Meta<typeof SoundiseIcon> = {
  title: 'Components/Soundise/Soundise Icon',
  component: SoundiseIcon,
};

export default meta;
type Story = StoryObj<typeof SoundiseIcon>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
