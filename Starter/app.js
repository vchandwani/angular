var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
    
        $routeProvider
            .when('/', {
                templateUrl : 'pages/main.html',
                controller : 'mainController'
                
            })
            .when('/second', {
                templateUrl : 'pages/second.html',
                controller : 'secondController'
                
            })
            
});


myApp.controller('secondController',['$scope',function($scope){
        $scope.name = 'Second';        
}]);

myApp.controller('mainController',['$scope','$timeout','$http','$log','$location', function($scope,$timeout,$http,$log,$location) {

    $log.info($location.path());
    
    $scope.name = 'Name Last';
    $scope.handle = '';
    
    $scope.$watch('handle', function(newValue, oldValue) {
        
        $scope.infoChange = 'Value changes from '+oldValue + ' to '+newValue;
        
    });
    
    $scope.characters = 5;
    
    $http.get('/angular/example/Starter/api.php')
            .success(function(result){
                $scope.rules = result;
            })
            .error(function(data,status){
                console.log(data);
            })
    
    $scope.newRule = '';
    $scope.addRule = function(){
        $http.post('/angular/example/Starter/api.php',{newRule: $scope.newRule})
                .success(function(result){
                    console.log(result);
                    $scope.rules = result;
                    $scope.newRule = "";
                })
                .error(function(data,status){
                    console.log(data);
                })
    }
    
    $scope.rules = [
        {rulename : "Must be 5 characters"},
        {rulename : "Must not be used"},
    ]
    
    $timeout(function(){
       $scope.name = 'Name Change'; 
    },3000);
    
    
}]);

