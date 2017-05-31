import template from './group-component.tpl.html';
import SomeController  from './group-controller.js';

let GroupComponent = function () {
    return {
        restrict: 'EA',
        scope: {},
        template: template,
        controller: SomeController,
        controllerAs: 'groups',
        bindToController: true
    };
};

GroupComponent = new GroupComponent();

export default GroupComponent;
