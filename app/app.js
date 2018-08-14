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
        .when('/about', {
            template: "<p>This is te chnage</p>"
        })
        .when('/login', {
            template: "<div>Login page</div>"
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

