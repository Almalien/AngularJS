var appttt = angular.module("appModule");
appttt.factory("CrudService",['localStorageService',function(localStorageService) {
    var crudService = {};
      crudService.key = "angular-todoList";
      
      if(localStorageService.get(crudService.key)){
          crudService.users = localStorageService.get(crudService.key);
      }else{
          crudService.users = [];
      }
      crudService.add = function(user){
          crudService.users.push(user);
          crudService.refresh();
      }
      crudService.refresh = function(){
          localStorageService.set(crudService.key,crudService.users)
      }
      crudService.getAll = function(){
          return crudService.users;
      }

      crudService.removeItem = function(item){
        crudService.users = crudService.users.filter(function(it){
            return it !== item;
        });
        crudService.refresh();
        return crudService.getAll();
    }
      return crudService;
  }]);