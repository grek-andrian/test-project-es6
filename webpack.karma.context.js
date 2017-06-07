import angular from 'angular';
import mocks from 'angular-mocks';

import * as main from './src/main';

let context = require.context('./src', true, /\.test\.js/);
context.keys().forEach(context);
