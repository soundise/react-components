import { addons } from '@storybook/addons';
import { isDarkMode } from './utils';
import { soundiseLight, soundiseDark } from './themes';

addons.setConfig({
  theme: isDarkMode() ? soundiseDark : soundiseLight,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
  },
});
