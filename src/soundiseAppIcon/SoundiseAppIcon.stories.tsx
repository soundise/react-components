import type { Meta, StoryObj } from '@storybook/react';
import { SoundiseAppIcon } from './SoundiseAppIcon';

const meta: Meta<typeof SoundiseAppIcon> = {
  title: 'Components/Soundise App Icon',
  component: SoundiseAppIcon,
};

export default meta;
type Story = StoryObj<typeof SoundiseAppIcon>;

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
