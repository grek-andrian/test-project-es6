export function routing($stateProvider) {

    $stateProvider
        .state('app.groups-list', {
            url: '/groups',
            template: '<some-component></some-component>'
        });
}
