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

  .when('/ajax', {
    templateUrl : 'pages/ajax.html',
    controller  : 'AjaxController'
  })

  

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope,$location) {
  $scope.message = 'Hola, HomeController';
  $scope.url = $location.absUrl();
});

app.controller('FilterController', function($scope) {
  $scope.message = 'Hola, FilterController';
  $scope.nombre = 'Alma Rosa';
});

app.controller('EventController', function($scope) {
  $scope.message = 'Hola, EventController';
  $scope.count = 0;
  $scope.showMe = false;
  $scope.showMe2 = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }

    $scope.myFunc2 = function() {
      $scope.showMe2 = !$scope.showMe2;
  }
});

app.filter('noSpace', function() {
  return function noSpace(text) {
     return text.split(' ').join('');
  };
});




