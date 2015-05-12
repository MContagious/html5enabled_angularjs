var app = angular.module('ProfileEvaluator',
                         ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router'])
.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
         function($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider){
  $mdThemingProvider
    .theme("docs-dark","default")
    .primaryPalette("yellow").dark()
    .accentPalette("orange");
           
           // For routing
           $urlRouterProvider.otherwise('/home');
           
           $stateProvider.state('home', {
             url : '/home',
             templateUrl : './partials/home.html',
             controller : 'HomeController'
           });
           $stateProvider.state('university', {
             url : '/university',
             templateUrl : './partials/university.html',
             controller : 'HomeController'
           });
           $locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.controller('HomeController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  
}]);