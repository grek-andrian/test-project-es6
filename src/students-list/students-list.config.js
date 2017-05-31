export function routing($stateProvider) {

    $stateProvider
        .state('app.students-list', {
            url: '/students',
            template: '<student-component></student-component>'
        });
}
