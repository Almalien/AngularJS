var app = angular.module("appModule");

app.controller("ctrlAngular", function($scope, $http, CrudService){
    vm = this;
    vm.usuarios = CrudService.getAll()
    vm.dinero = 12456;
    vm.fechaAct = new Date()
    vm.name = "Ulises M";

    vm.user = {
        name: null,
        lastName: null
    };
    vm.addUserServ = function(){
        CrudService.add(vm.user);
        vm.user = {
            name: null,
            lastName: null
        };
    }

    vm.deleteUserServ = function(user){
        vm.usuarios = CrudService.removeItem(user);
        vm.user = {
            name: null,
            lastName: null
        };
    }

    // vm.listComplejos = [];
    
    // vm.listUsers = [
    //     {
    //         name: "Ulises",
    //         lastName: "Mtz"
    //     },
    //     {
    //         name: "Luis",
    //         lastName: "Lopez"
    //     }
    // ];
    
    vm.getInfo = function(){
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .then(function (data) {
                vm.listComplejos = data.data;
            },function (error) {
                console("Error");
            });
    }
    vm.insertInfo = function(){
        $http.post("http://jsonplaceholder.typicode.com/posts",
                  {
            title:vm.user.name,
            body:vm.user.lastName,
            userId:1
        })
            .then(function (data) {
                vm.user = {
                    name: null,
                    lastName: null
                };
                vm.getInfo();
                //vm.listComplejos.push(data.data);
            },function (error) {
                console("Error");
            });
    }
    
    // vm.addUser = function(){
    //     vm.listUsers.push(vm.user);
    //     vm.user = {
    //         name: null,
    //         lastName: null
    //     };
    // }
    
    // vm.deleteUser = function(user){
    //     var index = vm.listUsers.indexOf(user);
    //     vm.listUsers.splice(index, 1);
    // }
    
    // vm.getInfo();
});