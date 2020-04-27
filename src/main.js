/* eslint-disable global-require */
import './styles/main.pcss';

import './scripts/skills';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require('file-loader!./index.pug');
}
