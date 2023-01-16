import { addons } from '@storybook/addons';
import { soundiseDark } from './themes';

addons.setConfig({
  theme: soundiseDark,
  sidebar: {
    showRoots: false,
  },
});
