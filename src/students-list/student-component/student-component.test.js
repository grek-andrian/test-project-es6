import { assert } from 'chai';

import StudentController  from './student-controller.js';
import * as firebase from "firebase";

describe('StudentController', () => {

    let ctrl;

    // beforeEach(() => {
    //      MockFirebase.override();
    //    });


        beforeEach(() => {

            // firebase = {
            //     getStudentList: () => {
            //         return {
            //             then: (success) => success({
            //                 data: {
            //                     studentsList: []
            //                 }
            //             })
            //         };
            //     }
            // }

            ctrl = new StudentController(firebase);
        });


        it('should return the correct result', () => {
            expect(ctrl.itemsPerPage).to.be.equal(5);
            assert.equal(ctrl.itemsPerPage, 5, 'itemPerPage equal 5');
        });

//     let firebaseRef, controller, $rootscope;
//
//       beforeEach(() => {
//         window.MockFirebase.override();
//       });
//
//       beforeEach(() => {
//         window.MockFirebase.restore();
//       });
//
//       beforeEach(module('firebase.database', (_$firebaseRefProvider_) => {
//         _$firebaseRefProvider_.registerUrl('Mock');
//       }));
//
//       beforeEach(() => {
//         module('main.app.students-list');
//
//         inject(($controller, $firebaseArray, $firebaseRef, _$rootScope_) => {
//           $rootscope = _$rootScope_;
//
//           controller = $controller('StudentController', {
//             $firebaseRef: $firebaseRef,
//             $firebaseArray: $firebaseArray
//           });
//         });
//     });
//
//     describe('Object Data Testing', () => {
//
//     beforeEach(() => {
//       inject(($firebaseRef) => {
//         firebaseRef = $firebaseRef.default.child('students');
//       });
//     });
//
//     it('should read object data from firebase', () => {
//       const student = {
//         firstname: 'John',
//         lastname: 'Doe',
//         email: 'jhon@ukr.net'
//       };
//
//       firebaseRef.set(student);
//       firebaseRef.flush();
//       $rootscope.$digest();
//
//       expect(controller.student.firstname).toEqual(student.firstname);
//     });
//
//     it('should write object data to firebase', () => {
//       let student;
//
//       // save some data that our controller will read
//       firebaseRef.on('value', (data) => {
//         student = data.val();
//       });
//
//       controller.updateStudent('Joe');
//       firebaseRef.flush();
//       $rootscope.$digest();
//
//       const keys = Object.keys(student);
//       expect(keys.length).toEqual(1);
//       expect(controller.student.name).toEqual(student.name);
//     });
// });



});

// describe('My controller', function () {
//   var scope, createController;
//
//   beforeEach(module('app.controllers'));
//
//   beforeEach(inject(function ($injector) {
//     var $rootScope = $injector.get('$rootScope');
//     var $controller = $injector.get('$controller');
//
//     scope = $rootScope.$new();
//
//     createController = function () {
//       return $controller('CustomCtrl', {$scope: scope});
//     };
//   }));
//
//   afterEach(function () {
//     scope.$destroy();
//   });
// });
