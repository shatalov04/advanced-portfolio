/* eslint-disable no-new */
/* eslint-disable global-require */
import './styles/main.pcss';

import './scripts/skills';
import SidePanel from './scripts/side-panel';
import Navigation from './scripts/nav';
import Application from './scripts/app';
import Parallax from './scripts/parallax';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require('file-loader!./index.pug');
}

// components

Vue.component('side', SidePanel);
Vue.component('navigation', Navigation);
Vue.component('parallax', Parallax);

new Vue(Application);
