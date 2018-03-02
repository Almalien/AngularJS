var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/filter', {
    templateUrl : 'pages/filter.html',
    controller  : 'FilterController'
  })

  .when('/event', {
    templateUrl : 'pages/event.html',
    controller  : 'EventController'
  })

  

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('FilterController', function($scope) {
  $scope.message = 'Hello from FilterController';
});

app.controller('EventController', function($scope) {
  $scope.message = 'Hello from EventController';
});


