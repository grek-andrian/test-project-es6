export function routing($stateProvider) {

    $stateProvider
        .state('app.groups-list', {
            url: '/groups',
            template: '<group-component></group-component>'
        });
}
