import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';


import { routing } from './groups-list.config.js';

import SomeComponent from './some-component/some-component.js';

export default angular
    .module('main.app.groups-list', [uirouter, angularfire])
    .config(routing)
    .component('someComponent', SomeComponent )
    .name;
