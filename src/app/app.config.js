export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/groups');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
