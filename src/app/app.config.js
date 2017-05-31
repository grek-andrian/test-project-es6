export function routing($urlRouterProvider, $locationProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/groups');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
