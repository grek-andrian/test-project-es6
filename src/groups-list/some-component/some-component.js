import template from './some-component.tpl.html';
import SomeController  from './some-controller.js';

let SomeComponent = function () {
    return {
        restrict: 'EA',
        scope: {},
        template: template,
        controller: SomeController,
        controllerAs: 'groups',
        bindToController: true
    };
};

SomeComponent = new SomeComponent();

export default SomeComponent;
