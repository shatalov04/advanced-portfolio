/* eslint-disable no-new */
/* eslint-disable global-require */
import './styles/main.pcss';

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import Skills from './scripts/skills';
import SidePanel from './scripts/side-panel';
import Navigation from './scripts/nav';
import Application from './scripts/app';
import Parallax from './scripts/parallax';
import BuddaParallax from './scripts/budda-parallax';
import Yells from './scripts/yells';
import Works from './scripts/works';
import Property from './scripts/property';
import PropertyInput from './scripts/property-input';
import FeedbackForm from './scripts/feedback-form';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require('file-loader!./index.pug');
}

Vue.component('side', SidePanel);
Vue.component('navigation', Navigation);
Vue.component('parallax', Parallax);
Vue.component('budda-parallax', BuddaParallax);
Vue.component('skills', Skills);
Vue.component('yells', Yells);
Vue.component('works', Works);
Vue.component('property', Property);
Vue.component('property-input', PropertyInput);
Vue.component('feedback-form', FeedbackForm);

Vue.use(VueScrollTo);

new Vue(Application);
