
var app = angular.module('myApp', ['ngRoute', 'chart.js']);

app.controller('myCtrl', function ($scope,$location) {
    
    $scope.redirect = function(){
        $location.path('/angular/example/Starter/#/');
    }
    
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    // Line Chart
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.lineColors = ['#FF0000', '#337AB7'];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    // Bar Chart
    $scope.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.barSeries = ['Series A', 'Series B'];

    $scope.barData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.barColors = ['#ff8080', '#99ff99'];
    
    // Donought Data
    $scope.donLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.donData = [300, 500, 100];
    $scope.donColors = ['#FF0000', '#809fff', '#267326'];


    //Polar 
    $scope.polarLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.polarData = [300, 500, 100, 40, 120];
});