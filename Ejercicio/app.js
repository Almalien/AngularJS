var app = angular.module('myApp', ['ngRoute','pascalprecht.translate']);

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

app.config(["$translateProvider",function($translateProvider){
  
  var en_translations = {
    "language" : "Selected Language English",
    "greeting" : "Welcome" 
  }
  
  var sp_translations = {
    "language" : "Selected Language Spanish",
    "greeting" : "Bienvenido"  
  }
  
  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('sp',sp_translations);
  
  $translateProvider.preferredLanguage('en');
  
}]);

app.controller('HomeController', function($scope,$location) {
  $scope.message = 'Hola, HomeController';
  $scope.url = $location.absUrl();
  
});

app.controller("translateController" ,["$scope","$translate",function($scope,$translate){
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
  }
}]);

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

app.controller('DataController', function ($scope, $http) {
  $http.get("http://jsonplaceholder.typicode.com/users")
  .then(function (response) {$scope.names = response.data;});
});




