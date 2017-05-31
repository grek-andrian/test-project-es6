// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
//import bootstrap from 'bootstrap';
//import firebase from 'firebase';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';


// Modules
import app from './app/app.module';
import common from './common/common.module';
import groupsList from './groups-list/groups-list.module';
import featureB from './feature-b/feature-b.module';

angular.module('main', [
    angularAnimate, angularUiBootstrap, app, common, groupsList, featureB
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});




