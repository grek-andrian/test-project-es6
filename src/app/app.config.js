export function routing($urlRouterProvider, $locationProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/groups');
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
