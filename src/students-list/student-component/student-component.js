import template from './student-component.tpl.html';
import StudentController  from './student-controller.js';

let StudentComponent = function () {
    return {
        restrict: 'EA',
        scope: {},
        template: template,
        controller: StudentController,
        controllerAs: 'students',
        bindToController: true
    };
};

StudentComponent = new StudentComponent();

export default StudentComponent;
