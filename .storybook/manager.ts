import { addons } from '@storybook/addons';
import { soundiseLight } from './themes';

addons.setConfig({
  theme: soundiseLight,
  sidebar: {
    showRoots: false,
  },
});
