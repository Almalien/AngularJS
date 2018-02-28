var myModule = angular.module('myModule', []);

    // create the controller and inject Angular's $scope
    myModule.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });


