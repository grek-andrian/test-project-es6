export function routing($stateProvider) {

    $stateProvider
        .state('app.groups-list', {
            url: '/groups-list',
            template: '<some-component></some-component>'
        });
}
