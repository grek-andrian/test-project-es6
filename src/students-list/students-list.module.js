import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';


import { routing } from './students-list.config.js';

import StudentComponent from './student-component/student-component.js';

export default angular
    .module('main.app.students-list', [uirouter, angularfire])
    .config(routing)
    .component('studentComponent', StudentComponent )
    .name;
