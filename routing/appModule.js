var app = angular.module("appModule", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "firstController",
        templateUrl: "templates/home.html"
    })
    .when("/detalle/:nameHola",{
        controller: "detalleController",
        templateUrl: "templates/detalle.html"
    })
    .otherwise("/");
});
app.directive("backImg", function(){
    return function(scope,element,attrs){
        attrs.$observe("backImg",function(value){
            element.css({
                'background-image':'url('+value+')',
                'background-position': 'center',
                'background-size': 'cover',
                'background-position': 'center'
            });
        });
    }
});
app.controller("firstController", function($scope, $http){

    $scope.getInfo = function(){
        $http.get("http://jsonplaceholder.typicode.com/photos")
            .then(function (data) {
                $scope.listImages = data.data.splice(0, 7);
            },function (error) {
                console("Error");
            });
    }

});

app.controller("detalleController", function($scope, $http, $routeParams){

    $scope.parametroUrl = $routeParams.nameHola;
    
});

