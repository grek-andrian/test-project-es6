// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
//import bootstrap from 'bootstrap';

// import angular from 'angular';
// import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';


// Modules
import app from './app/app.module';
import common from './common/common.module';
import groupsList from './groups-list/groups-list.module';
import studentsList from './students-list/students-list.module';

angular.module('main', [
    'ngAnimate', angularUiBootstrap, 'mgcrea.ngStrap', app, common, groupsList, studentsList
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});




