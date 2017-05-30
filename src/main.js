// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
//import bootstrap from 'bootstrap';
//import firebase from 'firebase';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';

import * as firebase from 'firebase/app';
//var firebase = require('firebase/app');
// console.log(firebase,  );
firebase.initializeApp({
    apiKey: "AIzaSyD42nq5lLz4HPaOii1g5lc0qTX79Y4CooU",
    authDomain: "students-crud.firebaseapp.com",
    databaseURL: "https://students-crud.firebaseio.com",
    projectId: "students-crud",
    storageBucket: "students-crud.appspot.com",
    messagingSenderId: "244088294230"
});

// Modules
import app from './app/app.module';
import common from './common/common.module';
import groupsList from './groups-list/groups-list.module';
import featureB from './feature-b/feature-b.module';

angular.module('main', [
    angularAnimate, angularUiBootstrap, app, common, firebase, groupsList, featureB
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});




