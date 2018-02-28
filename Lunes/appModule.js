var app = angular.module("appModule",[]);
app.controller("filterController", function($scope){
    $scope.mi_html = "<p>Hola</p>"
    $scope.nombreUsuario = "Ulises Martinez c"
    $scope.objJson = {};
    $scope.objJson.usuario = "Ulises";
    $scope.objJson.mensaje = "Hola a todos";
})