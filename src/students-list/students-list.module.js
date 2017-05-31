import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';

import StudentComponent from './student-component/student-component.js';

export default angular
    .module('main.app.students-list', [uirouter, angularfire])
    .component('studentComponent', StudentComponent )
    .name;
