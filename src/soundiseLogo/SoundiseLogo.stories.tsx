import type { Meta, StoryObj } from '@storybook/react';
import { SoundiseLogo } from './SoundiseLogo';

const meta: Meta<typeof SoundiseLogo> = {
  title: 'Components/Soundise Logo',
  component: SoundiseLogo,
};

export default meta;
type Story = StoryObj<typeof SoundiseLogo>;

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
