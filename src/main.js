/* eslint-disable no-new */
/* eslint-disable global-require */
import './styles/main.pcss';

import './scripts/skills';
import SidePanel from './scripts/side-panel';
import Navigation from './scripts/nav';
import Application from './scripts/app';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require('file-loader!./index.pug');
}

Vue.component('side', SidePanel);
Vue.component('navigation', Navigation);

new Vue(Application);
