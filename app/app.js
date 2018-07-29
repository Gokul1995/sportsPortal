var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: './home.html'
        })
        .when('/about', {
            templateUrl: './about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: './contact.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])
