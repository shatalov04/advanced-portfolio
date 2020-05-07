/* eslint-disable no-new */
/* eslint-disable global-require */
import './styles/main.pcss';

import './scripts/skills';
import './scripts/nav';
import SidePanel from './scripts/side-panel';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require('file-loader!./index.pug');
}

new Vue(SidePanel);
