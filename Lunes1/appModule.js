var app = angular.module("appModule", ["LocalStorageModule"]);
app.controller("firstController", function($scope, CrudService){

    $scope.name = "Ulises";
    $scope.listUsers = CrudService.getAll();
    $scope.user = {
        name: null,
        lastName: null
    };

    $scope.addUser = function(){
        CrudService.add($scope.user);
        $scope.user = {
            name: null,
            lastName: null
        };
    };

    $scope.deleteUserServ = function(user){
        $scope.listUsers = CrudService.removeItem(user);
        $scope.user = {
            name: null,
            lastName: null
        };
    }

});

