var app=angular.module("appModule",[]);
    
app.controller("SeguroController",['$scope','$log','$http',function($scope,$log,$http) {
  var config={
    method:"GET",
    url:"http://jsonplaceholder.typicode.com/posts"
  }
   
  var response=$http(config);
   
  response.then(function(data, status, headers, config) {
      $scope.seguro=data;
  });
   
  response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
     
    
}]);