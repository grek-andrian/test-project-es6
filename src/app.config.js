export function routing($urlRouterProvider, $locationProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/students');
    //$locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })
        .state('app.students-list', {
                url: '/students',
                template: '<student-component></student-component>'
        })
        .state('app.groups-list', {
            url: '/groups',
            template: '<group-component></group-component>'
        });

}
